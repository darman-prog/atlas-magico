import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize Google GenAI if the key is available
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini client successfully initialized server-side.");
  } catch (error) {
    console.error("Failed to initialize Gemini client:", error);
  }
} else {
  console.log("No valid GEMINI_API_KEY found. Running in offline fallback mode.");
}

app.use(express.json());

// Offline fallback database of questions
const OFFLINE_QUIZ_BANK: Record<string, Record<string, Array<{
  question: string;
  options: string[];
  correctIndex: number;
  funFact: string;
  mascotHint: string;
}>>> = {
  brasil: {
    facil: [
      {
        question: "¿Qué famoso animal con un enorme pico colorido vive en el Amazonas?",
        options: ["Pavo Real", "Tucán", "Pingüino"],
        correctIndex: 1,
        funFact: "¡El tucán usa su pico grande pero ligero para alcanzar frutas en ramas delgadas y también para regular su temperatura corporal!",
        mascotHint: "Busca un ave de plumaje negro y un pico anaranjado muy grande. ¡Le encanta comer frutas!"
      },
      {
        question: "¿Qué tipo de bioma muy denso y verde cubre gran parte de Brasil?",
        options: ["La Selva Tropical", "El Desierto", "La Tundra helada"],
        correctIndex: 0,
        funFact: "La selva amazónica es el bosque tropical más grande del mundo y produce una gran cantidad de oxígeno del planeta.",
        mascotHint: "¡Lleva repelente de mosquitos y botas, porque caminaremos entre miles de árboles gigantes y mucha lluvia!"
      }
    ],
    medio: [
      {
        question: "¿Qué famoso e imponente río cruza el norte de Brasil y es conocido por su increíble caudal?",
        options: ["Río Nilo", "Río Amazonas", "Río Misisipi"],
        correctIndex: 1,
        funFact: "El río Amazonas contiene más agua que el Nilo, el Yangtsé y el Misisipi juntos. ¡Es gigantesco!",
        mascotHint: "Este río tiene el mismo nombre que la selva tropical más famosa del mundo. ¡Cuidado con las pirañas!"
      }
    ],
    dificil: [
      {
        question: "¿Cuál es el río más largo que nace y fluye completamente dentro del territorio de Brasil?",
        options: ["Río Amazonas", "Río Paraná", "Río São Francisco"],
        correctIndex: 2,
        funFact: "Aunque el Amazonas es más largo, nace en Perú. El São Francisco nace en Minas Gerais y corre enteramente por territorio brasileño, apodado 'el río de la integración nacional'.",
        mascotHint: "Su nombre hace honor a un santo muy famoso que amaba a los animales. ¡Nace en las montañas de Canastra!"
      }
    ]
  },
  usa: {
    facil: [
      {
        question: "¿En qué famosa ciudad de Estados Unidos se encuentra la Estatua de la Libertad?",
        options: ["Nueva York", "Los Ángeles", "Miami"],
        correctIndex: 0,
        funFact: "La Estatua de la Libertad fue un regalo de Francia en 1886 para celebrar el centenario de la Declaración de Independencia de EE.UU.",
        mascotHint: "Se encuentra en la desembocadura del río Hudson, famosa por sus rascacielos y taxis amarillos."
      }
    ],
    medio: [
      {
        question: "¿Qué espectacular cañón tallado por el río Colorado es una de las maravillas naturales del mundo?",
        options: ["El Cañón del Colca", "El Gran Cañón", "Las Gargantas del Verdon"],
        correctIndex: 1,
        funFact: "El Gran Cañón tiene una profundidad de más de 1,800 metros y muestra millones de años de historia geológica en sus capas de roca.",
        mascotHint: "Está situado en el estado de Arizona. Su nombre resalta su imponente tamaño."
      }
    ],
    dificil: [
      {
        question: "¿Cuál es el punto geográfico más alto de toda América del Norte, ubicado en Alaska?",
        options: ["Monte Denali", "Monte Whitney", "Monte Elbert"],
        correctIndex: 0,
        funFact: "El Monte Denali (antes llamado Monte McKinley) se eleva a 6,190 metros sobre el nivel del mar y es famoso por su clima extremadamente frío.",
        mascotHint: "En lengua athabascana significa 'El Grande'. ¡Está rodeado de glaciares y osos polares!"
      }
    ]
  },
  nigeria: {
    facil: [
      {
        question: "¿Qué animal es el símbolo nacional que aparece en el escudo de Nigeria?",
        options: ["Un Águila", "Un León", "Un Oso"],
        correctIndex: 0,
        funFact: "El águila roja representa la fuerza en el escudo oficial de Nigeria, sostenida sobre un fondo negro que simboliza la rica tierra fértil.",
        mascotHint: "Vuela muy alto en el cielo, tiene una vista increíble y garras afiladas."
      }
    ],
    medio: [
      {
        question: "¿Cómo se llama el río más importante de Nigeria, del cual el país toma su nombre?",
        options: ["Río Níger", "Río Congo", "Río Zambeze"],
        correctIndex: 0,
        funFact: "El río Níger es el tercer río más largo de África y tiene una peculiar forma de media luna que desconcertó a los geógrafos europeos durante siglos.",
        mascotHint: "Empieza por 'N' y rima con el nombre de tu propio barco, ¡el explorador!"
      }
    ],
    dificil: [
      {
        question: "¿Cuál de estos bosques sagrados de Nigeria es Patrimonio de la Humanidad por albergar arte y santuarios de la cultura Yoruba?",
        options: ["Bosque Sagrado de Osun-Osogbo", "Reserva de Omo", "Parque Nacional Yankari"],
        correctIndex: 0,
        funFact: "El Bosque Sagrado de Osun-Osogbo es considerado la última arboleda sagrada de la cultura Yoruba y contiene esculturas de la diosa de la fertilidad Osun.",
        mascotHint: "Lleva el nombre de una deidad del agua dulce muy venerada en la cultura afrodescendiente."
      }
    ]
  },
  india: {
    facil: [
      {
        question: "¿Qué icónico palacio blanco de mármol construido por amor es el monumento más famoso de la India?",
        options: ["Taj Mahal", "Palacio de los Vientos", "Fuerte Rojo"],
        correctIndex: 0,
        funFact: "El Taj Mahal fue construido en Agra por el emperador Shah Jahan en memoria de su esposa favorita, Mumtaz Mahal.",
        mascotHint: "Rima con 'Cantar' y es una joya de mármol blanco brillante junto al río Yamuna."
      }
    ],
    medio: [
      {
        question: "¿Qué majestuoso animal es el animal nacional de la India y habita en sus reservas de selva?",
        options: ["El León Asiático", "El Tigre de Bengala", "El Elefante Asiático"],
        correctIndex: 1,
        funFact: "El tigre de Bengala es el símbolo nacional de la India y representa poder, agilidad y gracia majestuosa.",
        mascotHint: "Es un gran felino de pelaje anaranjado con rayas negras. ¡Tiene un rugido que se escucha a kilómetros!"
      }
    ],
    dificil: [
      {
        question: "¿Cuál es el río más sagrado de la India, que nace en los glaciares del Himalaya?",
        options: ["Río Indo", "Río Ganges", "Río Brahmaputra"],
        correctIndex: 1,
        funFact: "El Ganges es venerado como una diosa (Ganga) en el hinduismo, y millones de personas acuden a sus aguas en ciudades como Benarés para purificarse.",
        mascotHint: "Su nombre empieza por 'G' y fluye hacia la Bahía de Bengala."
      }
    ]
  },
  china: {
    facil: [
      {
        question: "¿Qué adorable mamífero de color blanco y negro se alimenta casi exclusivamente de bambú en China?",
        options: ["Koala", "Oso Panda", "Lémur"],
        correctIndex: 1,
        funFact: "Un panda gigante pasa hasta 12 horas al día comiendo bambú para satisfacer sus necesidades de energía.",
        mascotHint: "Tiene orejas redondas y negras, manchas negras en los ojos y es súper tierno."
      }
    ],
    medio: [
      {
        question: "¿Qué colosal estructura defensiva de piedra cruza desiertos y montañas del norte de China?",
        options: ["La Muralla China", "La Línea Maginot", "El Muro de Berlín"],
        correctIndex: 0,
        funFact: "La Gran Muralla China se construyó a lo largo de dinastías para proteger el imperio y tiene más de 21,000 kilómetros de longitud histórica.",
        mascotHint: "Es tan larga que serpentea como un dragón de piedra por colinas y montañas."
      }
    ],
    dificil: [
      {
        question: "¿Cuál es el río más largo de Asia, que nace en el Tíbet y desemboca cerca de Shanghái?",
        options: ["Río Amarillo", "Río Yangtsé", "Río Mekong"],
        correctIndex: 1,
        funFact: "El Yangtsé es el tercer río más largo del mundo y alberga la gigantesca presa de las Tres Gargantas, la central hidroeléctrica más grande del planeta.",
        mascotHint: "También se le conoce como el 'Río Azul'. ¡Su nombre empieza por Y!"
      }
    ]
  },
  japon: {
    facil: [
      {
        question: "¿Qué majestuoso volcán de pico nevado es la montaña más alta y sagrada de Japón?",
        options: ["Monte Fuji", "Monte Everest", "Monte Olimpo"],
        correctIndex: 0,
        funFact: "El Monte Fuji es un volcán activo pero de bajo riesgo, considerado una de las tres montañas sagradas de Japón junto con el monte Tate y el monte Haku.",
        mascotHint: "Tiene una silueta cónica casi perfecta y suele aparecer pintado con flores de cerezo."
      }
    ],
    medio: [
      {
        question: "¿Cómo se llama la hermosa época del año en Japón en la que florecen los cerezos?",
        options: ["Momiji", "Hanami", "Tsukimi"],
        correctIndex: 1,
        funFact: "Hanami significa literalmente 'ver flores' y es una tradición nacional donde amigos y familias hacen picnics bajo los cerezos en flor (Sakura).",
        mascotHint: "Es un festival de primavera que tiñe los parques de un suave color rosa pastel."
      }
    ],
    dificil: [
      {
        question: "¿Cuál es la isla más grande del archipiélago de Japón, donde se ubican Tokio, Kioto y el Monte Fuji?",
        options: ["Hokkaido", "Honshu", "Kyushu"],
        correctIndex: 1,
        funFact: "Honshu es la séptima isla más grande del mundo y alberga a más del 80% de la población total de Japón, siendo el centro cultural y económico histórico.",
        mascotHint: "Su nombre significa literalmente 'Provincia Principal'. Termina con 'shu'."
      }
    ]
  },
  rusia: {
    facil: [
      {
        question: "¿Qué coloridas muñecas rusas de madera se guardan una dentro de otra?",
        options: ["Matrioshkas", "Barbies", "Kokeshis"],
        correctIndex: 0,
        funFact: "La primera matrioshka fue tallada en 1890. Representan la fertilidad y la familia, tradicionalmente vestidas de campesinas.",
        mascotHint: "¡Es una gran familia de madera! Abres una grande y... ¡sorpresa, sale otra más pequeñita!"
      }
    ],
    medio: [
      {
        question: "¿Qué enorme región fría y boscosa cubre la mayor parte de la Rusia asiática?",
        options: ["El Sahara", "Siberia", "La Patagonia"],
        correctIndex: 1,
        funFact: "Siberia representa el 77% del territorio ruso y alberga el lago Baikal, el más profundo y antiguo del mundo.",
        mascotHint: "Es famosa por sus inviernos congelados, tigres siberianos y el tren Transiberiano."
      }
    ],
    dificil: [
      {
        question: "¿Cuál es el río más largo de Europa, que fluye completamente por Rusia occidental hasta el Mar Caspio?",
        options: ["Río Danubio", "Río Volga", "Río Rin"],
        correctIndex: 1,
        funFact: "El río Volga es de vital importancia histórica y económica en Rusia. Es tan venerado que los rusos lo llaman con cariño 'Madre Volga'.",
        mascotHint: "Empieza con la letra V y tiene muchas presas y canales famosos."
      }
    ]
  },
  australia: {
    facil: [
      {
        question: "¿Qué asombroso marsupial saltarín lleva a sus crías en una bolsa en Australia?",
        options: ["Canguro", "Koala", "Ornitorrinco"],
        correctIndex: 0,
        funFact: "Los canguros machos pueden saltar hasta 9 metros de un solo brinco gracias a sus potentes patas traseras.",
        mascotHint: "Da saltos muy altos y es el boxeador más famoso del reino animal."
      }
    ],
    medio: [
      {
        question: "¿Qué increíble arrecife de coral gigante de Australia es visible desde el espacio?",
        options: ["La Gran Barrera de Coral", "El Arrecife de Belice", "El Atolón de Maldivas"],
        correctIndex: 0,
        funFact: "La Gran Barrera de Coral está compuesta por más de 2,900 arrecifes individuales y se extiende a lo largo de 2,300 kilómetros en el Mar del Coral.",
        mascotHint: "Es el hogar de Nemo, lleno de peces de mil colores y tortugas marinas."
      }
    ],
    dificil: [
      {
        question: "¿Cómo llaman los indígenas australianos a la gigantesca e icónica roca sagrada de arenisca roja en el centro del país?",
        options: ["Karijini", "Uluru", "Kakadu"],
        correctIndex: 1,
        funFact: "Uluru (también conocida como Ayers Rock) cambia de color de manera espectacular según la hora del día y las estaciones, especialmente al atardecer cuando brilla en rojo encendido.",
        mascotHint: "Es un nombre sagrado aborigen muy corto de 5 letras, ¡empieza y termina con la letra U!"
      }
    ]
  }
};

// API endpoint to generate trivia via Gemini
app.post("/api/quiz", async (req, res) => {
  const { countryId, levelId, levelIndex } = req.body;

  if (!countryId || !levelId) {
    return res.status(400).json({ error: "countryId and levelId are required" });
  }

  const countryLower = countryId.toLowerCase();
  const difficultyMap: Record<string, string> = {
    "1": "facil",
    "2": "medio",
    "3": "dificil"
  };
  const diffKey = difficultyMap[levelIndex?.toString()] || "facil";

  // If Gemini is not set up, go to fallback directly
  if (!ai) {
    return serveOfflineQuestion(countryLower, diffKey, res);
  }

  const prompt = `
      Eres el motor educativo detrás de "Atlas Mágico", un juego de geografía fantástico y aventurero para estudiantes de primaria y secundaria.
      Genera una pregunta de trivia educativa única y fascinante sobre geografía, cultura, naturaleza o hitos de: ${countryId.toUpperCase()}.
      
      DIFICULTAD REQUERIDA: ${diffKey.toUpperCase()} (Fácil, Medio o Difícil).
      - Fácil (Nivel 1): Preguntas sobre animales icónicos, monumentos obvios, banderas, o símbolos muy famosos de este país.
      - Medio (Nivel 2): Preguntas sobre ríos importantes, accidentes geográficos notables, tradiciones culturales o capitales.
      - Difícil (Nivel 3): Preguntas desafiantes sobre accidentes físicos raros, ecosistemas específicos, montañas, hitos históricos o geografía física avanzada de este país.
      
      Por favor, asegúrate de que el formato de respuesta sea JSON compatible con el siguiente esquema:
      - question: Una pregunta clara y emocionante en español.
      - options: Un arreglo de exactamente 3 opciones diferentes en español.
      - correctIndex: El índice entero de la opción correcta (0, 1 o 2).
      - funFact: Una explicación corta, alegre e ilustrativa (de 1 a 3 oraciones) de por qué esa es la respuesta correcta, con detalles divertidos para los estudiantes.
      - mascotHint: Un consejo juguetón y gracioso de parte del "Capitán Patito", el pato marinero consejero del juego, que guíe al niño hacia la respuesta sin decirla directamente. El pato habla de forma alegre usando frases náuticas cortas (¡Al agua patos!, ¡Por todos los mares!).
    `;

    let attempts = 0;
    const maxAttempts = 3;
    let responseText = "";

    while (attempts < maxAttempts) {
      try {
        attempts++;
        console.log(`Querying Gemini (gemini-3.5-flash) for ${countryId} - Level ${diffKey} (Attempt ${attempts}/${maxAttempts})...`);
        
        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING, description: "La pregunta de geografía formulada de manera emocionante." },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Arreglo de exactamente 3 opciones de respuesta."
                },
                correctIndex: { type: Type.INTEGER, description: "Índice entero (0, 1 o 2) de la opción correcta." },
                funFact: { type: Type.STRING, description: "Dato curioso y educativo que amplía el conocimiento sobre la respuesta correcta." },
                mascotHint: { type: Type.STRING, description: "Consejo náutico divertido del Capitán Patito para ayudar a adivinar." }
              },
              required: ["question", "options", "correctIndex", "funFact", "mascotHint"]
            }
          }
        });

        if (response && response.text) {
          responseText = response.text.trim();
          break; // Exit loop on successful retrieval
        } else {
          throw new Error("Empty response text from Gemini API.");
        }
      } catch (err: any) {
        const errMsg = err?.message || err || "Unknown error";
        console.warn(`Attempt ${attempts} failed for country ${countryId} (Level ${diffKey}): ${errMsg}`);
        if (attempts >= maxAttempts) {
          console.warn("Gemini API is unavailable or rate-limited after retries. Serving offline fallback question instead.");
          return serveOfflineQuestion(countryLower, diffKey, res);
        }
        const delay = attempts * 500;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    try {
      const quizObj = JSON.parse(responseText);
      // Validate structure matches
      if (
        quizObj.question &&
        Array.isArray(quizObj.options) &&
        quizObj.options.length === 3 &&
        typeof quizObj.correctIndex === "number" &&
        quizObj.correctIndex >= 0 &&
        quizObj.correctIndex <= 2
      ) {
        return res.json({
          id: `gemini_${countryLower}_${diffKey}_${Date.now()}`,
          ...quizObj
        });
      } else {
        console.warn("Invalid structure returned from Gemini. Falling back to offline question.");
        return serveOfflineQuestion(countryLower, diffKey, res);
      }
    } catch (parseError) {
      console.warn("JSON parsing failed on Gemini response. Falling back to offline question.");
      return serveOfflineQuestion(countryLower, diffKey, res);
    }
});

function serveOfflineQuestion(country: string, diff: string, res: any) {
  const countryQuestions = OFFLINE_QUIZ_BANK[country] || OFFLINE_QUIZ_BANK["brasil"];
  const list = countryQuestions[diff] || countryQuestions["facil"];
  const randomIndex = Math.floor(Math.random() * list.length);
  const selected = list[randomIndex];

  return res.json({
    id: `offline_${country}_${diff}_${randomIndex}`,
    ...selected
  });
}

// Vite integration middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite middleware mounted in Development mode.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production assets from /dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully booted on port ${PORT}`);
  });
}

startServer();
