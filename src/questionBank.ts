import { QuizQuestion } from "./types";

const generateId = (country: string, level: number, index: number) => `qb_${country}_${level}_${index}`;

export const QUESTION_BANK: Record<string, Record<number, QuizQuestion[]>> = {
  usa: {
    1: [
      {
        id: generateId("usa", 1, 0),
        question: "¿En qué famosa ciudad de Estados Unidos se encuentra la Estatua de la Libertad?",
        options: ["Nueva York", "Los Ángeles", "Miami"],
        correctIndex: 0,
        funFact: "La Estatua de la Libertad fue un regalo de Francia en 1886 para celebrar el centenario de la Declaración de Independencia de EE.UU.",
        mascotHint: "Se encuentra en la desembocadura del río Hudson, famosa por sus rascacielos y taxis amarillos. ¡A babor!"
      },
      {
        id: generateId("usa", 1, 1),
        question: "¿Qué ave rapaz de cabeza blanca es el símbolo nacional de Estados Unidos?",
        options: ["Halcón Peregrino", "Águila Calva", "Cóndor"],
        correctIndex: 1,
        funFact: "El águila calva, en realidad, no es calva; el nombre proviene del inglés antiguo 'balde', que significa blanco.",
        mascotHint: "Vuela majestuosa por los cielos americanos y tiene plumas blancas en la cabeza. ¡Atento a las alturas, marinero!"
      },
      {
        id: generateId("usa", 1, 2),
        question: "¿Cuál es el deporte tradicionalmente considerado como el pasatiempo nacional de Estados Unidos?",
        options: ["Fútbol Americano", "Béisbol", "Baloncesto"],
        correctIndex: 1,
        funFact: "El béisbol se popularizó en el siglo XIX y se considera parte fundamental de la cultura e historia estadounidense.",
        mascotHint: "Se juega con un bate de madera y una pelota blanca con costuras rojas. ¡Hacia el home!"
      },
      {
        id: generateId("usa", 1, 3),
        question: "¿Qué comida rápida, servida en un pan largo, es icónica en los eventos deportivos de EE.UU.?",
        options: ["Hamburguesa", "Hot Dog (Perrito Caliente)", "Pizza"],
        correctIndex: 1,
        funFact: "Los hot dogs se volvieron muy populares entre los inmigrantes en Nueva York y hoy son un clásico en los estadios de béisbol.",
        mascotHint: "Tiene forma alargada, y se suele aderezar con mostaza y ketchup. ¡Sabe a victoria marinera!"
      },
      {
        id: generateId("usa", 1, 4),
        question: "¿Cuál de estos parques temáticos se encuentra en Florida y es famoso por un castillo mágico?",
        options: ["Universal Studios", "Walt Disney World", "Six Flags"],
        correctIndex: 1,
        funFact: "Walt Disney World en Orlando es el parque de atracciones más visitado del mundo entero.",
        mascotHint: "El ratón más famoso del mundo es el capitán de este parque. ¡Magia a la vista!"
      }
    ],
    2: [
      {
        id: generateId("usa", 2, 0),
        question: "¿Qué espectacular cañón tallado por el río Colorado es una de las maravillas naturales del mundo?",
        options: ["El Cañón del Colca", "El Gran Cañón", "Las Gargantas del Verdon"],
        correctIndex: 1,
        funFact: "El Gran Cañón tiene una profundidad de más de 1,800 metros y muestra millones de años de historia geológica en sus capas de roca.",
        mascotHint: "Está situado en el estado de Arizona. Su nombre resalta su imponente tamaño. ¡No te caigas por la borda!"
      },
      {
        id: generateId("usa", 2, 1),
        question: "¿Cuál es la capital de los Estados Unidos, donde se ubica la Casa Blanca?",
        options: ["Nueva York", "Filadelfia", "Washington D.C."],
        correctIndex: 2,
        funFact: "La ciudad de Washington D.C. fue diseñada específicamente para ser la capital, y no pertenece a ningún estado.",
        mascotHint: "Lleva el nombre del primer presidente del país. ¡Iza las velas hacia la capital!"
      },
      {
        id: generateId("usa", 2, 2),
        question: "¿Qué famoso puente colgante de color naranja se encuentra en la ciudad de San Francisco?",
        options: ["Puente de Brooklyn", "Golden Gate", "Puente de la Torre"],
        correctIndex: 1,
        funFact: "El color 'naranja internacional' del Golden Gate fue elegido inicialmente como una capa protectora contra el óxido antes de ser pintado.",
        mascotHint: "Su nombre en español significa 'Puerta Dorada'. ¡Cruzarlo es toda una aventura, grumete!"
      },
      {
        id: generateId("usa", 2, 3),
        question: "¿En qué estado de EE.UU. se encuentra el famoso Parque Nacional de Yellowstone?",
        options: ["California", "Wyoming", "Texas"],
        correctIndex: 1,
        funFact: "Yellowstone, establecido en 1872, fue el primer parque nacional del mundo. Es famoso por sus géiseres como el Old Faithful.",
        mascotHint: "Es un estado montañoso famoso por sus vaqueros, empieza por la letra W. ¡Al oeste!"
      },
      {
        id: generateId("usa", 2, 4),
        question: "¿Qué famosa ruta histórica cruzaba Estados Unidos desde Chicago hasta Santa Mónica (Los Ángeles)?",
        options: ["Ruta 66", "Pacific Coast Highway", "Interestatal 95"],
        correctIndex: 0,
        funFact: "La Ruta 66, conocida como la 'Calle Principal de América', fue una de las rutas originales del sistema de carreteras de EE.UU. establecida en 1926.",
        mascotHint: "Son dos números iguales. Empieza por el 6... ¡Pisa el acelerador, capitán!"
      }
    ],
    3: [
      {
        id: generateId("usa", 3, 0),
        question: "¿Cuál es el punto geográfico más alto de toda América del Norte, ubicado en Alaska?",
        options: ["Monte Denali", "Monte Whitney", "Monte Elbert"],
        correctIndex: 0,
        funFact: "El Monte Denali se eleva a 6,190 metros sobre el nivel del mar y es famoso por su clima extremadamente frío.",
        mascotHint: "En lengua athabascana significa 'El Grande'. ¡Abrígate bien que vienen vientos polares!"
      },
      {
        id: generateId("usa", 3, 1),
        question: "¿Qué gran río de los Estados Unidos desemboca en el Golfo de México formando un delta inmenso?",
        options: ["Río Colorado", "Río Misisipi", "Río Columbia"],
        correctIndex: 1,
        funFact: "El río Misisipi, junto con el Misuri, forma el sistema fluvial más grande de América del Norte, vital para el transporte comercial.",
        mascotHint: "Tiene muchas letras 'i' y 's' en su nombre. ¡A navegar sus aguas turbias!"
      },
      {
        id: generateId("usa", 3, 2),
        question: "¿Qué impresionante monumento natural en Wyoming está formado por columnas hexagonales volcánicas?",
        options: ["Torre del Diablo (Devils Tower)", "Valle de la Muerte", "Parque Nacional Zion"],
        correctIndex: 0,
        funFact: "Devils Tower fue el primer monumento nacional declarado en EE.UU. en 1906, y aparece en la famosa película 'Encuentros en la Tercera Fase'.",
        mascotHint: "Su nombre alude a una construcción alta que supuestamente pertenece a un ser malvado del inframundo. ¡Escalera al cielo!"
      },
      {
        id: generateId("usa", 3, 3),
        question: "¿Qué enormes y antiguos árboles crecen en la costa oeste, siendo los seres vivos más altos del planeta?",
        options: ["Robles Centenarios", "Baobabs", "Secuoyas Rojas"],
        correctIndex: 2,
        funFact: "La secuoya roja más alta registrada, llamada Hyperion, mide más de 115 metros de altura.",
        mascotHint: "Sus troncos son tan anchos que algunos incluso han sido tallados para que pasen autos. ¡Un bosque de gigantes!"
      },
      {
        id: generateId("usa", 3, 4),
        question: "¿Qué desierto de EE.UU. incluye el 'Valle de la Muerte', uno de los lugares más calientes y bajos del mundo?",
        options: ["Desierto de Mojave", "Desierto de Sonora", "Desierto de Chihuahua"],
        correctIndex: 0,
        funFact: "El Valle de la Muerte tiene el récord de la temperatura del aire más alta registrada de manera confiable en la Tierra: 56.7 °C en 1913.",
        mascotHint: "Empieza por M. ¡Lleva mucha agua en tu cantimplora, grumete!"
      }
    ]
  },
  brasil: {
    1: [
      {
        id: generateId("brasil", 1, 0),
        question: "¿Qué famoso animal con un enorme pico colorido vive en el Amazonas?",
        options: ["Pavo Real", "Tucán", "Pingüino"],
        correctIndex: 1,
        funFact: "¡El tucán usa su pico grande pero ligero para alcanzar frutas en ramas delgadas y también para regular su temperatura corporal!",
        mascotHint: "Busca un ave de plumaje negro y un pico anaranjado muy grande. ¡A volar se ha dicho!"
      },
      {
        id: generateId("brasil", 1, 1),
        question: "¿Qué tipo de bioma muy denso y verde cubre gran parte del norte de Brasil?",
        options: ["La Selva Tropical", "El Desierto", "La Tundra helada"],
        correctIndex: 0,
        funFact: "La selva amazónica es el bosque tropical más grande del mundo y produce gran parte del oxígeno del planeta.",
        mascotHint: "¡Lleva repelente de mosquitos y botas, porque caminaremos entre miles de árboles gigantes y mucha lluvia!"
      },
      {
        id: generateId("brasil", 1, 2),
        question: "¿Qué enorme estatua se eleva con los brazos abiertos sobre la ciudad de Río de Janeiro?",
        options: ["Estatua de la Libertad", "Cristo Redentor", "El Gran Buda"],
        correctIndex: 1,
        funFact: "El Cristo Redentor, de 30 metros de altura, está ubicado en la cima del cerro del Corcovado y es una de las Nuevas Siete Maravillas del Mundo.",
        mascotHint: "Observa la bahía desde lo más alto con los brazos en forma de cruz. ¡Vaya vigía!"
      },
      {
        id: generateId("brasil", 1, 3),
        question: "¿Cuál es el género musical y baile más famoso de Brasil, asociado con el Carnaval?",
        options: ["Salsa", "Samba", "Tango"],
        correctIndex: 1,
        funFact: "La samba tiene raíces africanas y es el alma del famoso Carnaval de Río, donde desfilan las 'escolas de samba'.",
        mascotHint: "Mueve los pies al ritmo del tambor. ¡Alegría marinera!"
      },
      {
        id: generateId("brasil", 1, 4),
        question: "¿De qué color son el escudo y las estrellas en la bandera de Brasil?",
        options: ["Rojo y Blanco", "Amarillo y Verde", "Azul y Blanco"],
        correctIndex: 2,
        funFact: "La esfera azul representa el cielo nocturno sobre Río de Janeiro la noche en que Brasil se convirtió en república.",
        mascotHint: "Mira el centro de su bandera: un globo celeste con estrellas blancas y una cinta. ¡A babor!"
      }
    ],
    2: [
      {
        id: generateId("brasil", 2, 0),
        question: "¿Qué famoso e imponente río cruza el norte de Brasil y es conocido por su increíble caudal?",
        options: ["Río Nilo", "Río Amazonas", "Río Misisipi"],
        correctIndex: 1,
        funFact: "El río Amazonas contiene más agua que el Nilo, el Yangtsé y el Misisipi juntos. ¡Es gigantesco!",
        mascotHint: "Este río tiene el mismo nombre que la selva tropical más famosa del mundo. ¡Cuidado con las pirañas!"
      },
      {
        id: generateId("brasil", 2, 1),
        question: "¿Cuál es la capital oficial de Brasil, diseñada desde cero con forma de avión?",
        options: ["Río de Janeiro", "São Paulo", "Brasilia"],
        correctIndex: 2,
        funFact: "Brasilia fue construida en tan solo 41 meses e inaugurada en 1960. Fue diseñada por los famosos arquitectos Lúcio Costa y Oscar Niemeyer.",
        mascotHint: "Su nombre es casi igual al del país entero. ¡Vaya ciudad futurista!"
      },
      {
        id: generateId("brasil", 2, 2),
        question: "¿Qué gigantesca región pantanosa en Brasil es conocida por su increíble diversidad de vida silvestre, incluyendo jaguares?",
        options: ["El Pantanal", "El Gran Chaco", "La Pampa"],
        correctIndex: 0,
        funFact: "El Pantanal es el humedal tropical más grande del mundo, y su ciclo de inundaciones y sequías crea un paraíso para miles de especies.",
        mascotHint: "Su nombre suena a un lugar lleno de lodo y agua estancada, pero es hermoso. ¡Saca las botas de lluvia!"
      },
      {
        id: generateId("brasil", 2, 3),
        question: "¿Qué animal de movimientos muy lentos cuelga boca abajo en los árboles de las selvas brasileñas?",
        options: ["Mono Araña", "Perezoso", "Iguana"],
        correctIndex: 1,
        funFact: "Los perezosos son tan lentos que incluso algas verdes crecen en su pelaje, lo que les ayuda a camuflarse en el bosque.",
        mascotHint: "Su nombre indica que le encanta dormir y descansar todo el día. ¡A estribor, sin prisa!"
      },
      {
        id: generateId("brasil", 2, 4),
        question: "¿Qué espectacular conjunto de cascadas se encuentra en la frontera entre Brasil y Argentina?",
        options: ["Cataratas del Niágara", "Cataratas del Iguazú", "Salto Ángel"],
        correctIndex: 1,
        funFact: "Las Cataratas del Iguazú están formadas por 275 saltos de agua, siendo la 'Garganta del Diablo' el más grande e impresionante.",
        mascotHint: "Su nombre en guaraní significa 'Agua Grande'. ¡Prepara el impermeable!"
      }
    ],
    3: [
      {
        id: generateId("brasil", 3, 0),
        question: "¿Cuál es el río más largo que nace y fluye completamente dentro del territorio de Brasil?",
        options: ["Río Amazonas", "Río Paraná", "Río São Francisco"],
        correctIndex: 2,
        funFact: "El río São Francisco es conocido como el 'río de la integración nacional' de Brasil, uniendo el sudeste con el noreste del país.",
        mascotHint: "Su nombre hace honor a un santo muy famoso que amaba a los animales. ¡Nace en las montañas de Canastra!"
      },
      {
        id: generateId("brasil", 3, 1),
        question: "¿Qué bioma único y semiárido ocupa gran parte del noreste de Brasil, caracterizado por sus cactus y arbustos espinosos?",
        options: ["La Caatinga", "El Cerrado", "La Mata Atlántica"],
        correctIndex: 0,
        funFact: "La Caatinga, que significa 'bosque blanco' en lengua tupí, es el único bioma exclusivamente brasileño, adaptado a largas sequías.",
        mascotHint: "Su nombre nativo suena a 'Ca-a-tinga'. ¡Un lugar rudo para navegar en tierra!"
      },
      {
        id: generateId("brasil", 3, 2),
        question: "¿Qué mamífero fluvial de color rosado nada por las aguas dulces del sistema amazónico?",
        options: ["Manatí", "Delfín Rosado", "Nutria Gigante"],
        correctIndex: 1,
        funFact: "El delfín rosado, o 'boto', es protagonista de muchas leyendas locales donde se transforma en un humano vestido de blanco por las noches.",
        mascotHint: "Es muy inteligente, nada de maravilla y es de color rosa chicle. ¡A jugar en el agua!"
      },
      {
        id: generateId("brasil", 3, 3),
        question: "¿Cuál es la montaña más alta de Brasil, ubicada en el estado norteño de Amazonas cerca de la frontera con Venezuela?",
        options: ["Pico da Neblina", "Pico das Agulhas Negras", "Monte Roraima"],
        correctIndex: 0,
        funFact: "El Pico da Neblina, con 2,995 metros, permaneció sin ser descubierto hasta 1950 debido a que siempre está cubierto por espesas nubes.",
        mascotHint: "Su nombre significa que siempre está cubierto por una espesa niebla. ¡No veo nada, grumete!"
      },
      {
        id: generateId("brasil", 3, 4),
        question: "¿Qué sabana tropical, la más biodiversa del mundo, cubre la mayor parte de la región central de Brasil?",
        options: ["La Caatinga", "El Cerrado", "La Pampa"],
        correctIndex: 1,
        funFact: "El Cerrado alberga cerca del 5% de todas las especies de la Tierra, con árboles retorcidos adaptados a sobrevivir incendios naturales.",
        mascotHint: "Su nombre significa 'cerrado' o 'denso'. ¡Tierra de raíces profundas!"
      }
    ]
  },
  nigeria: {
    1: [
      {
        id: generateId("nigeria", 1, 0),
        question: "¿Qué animal es el símbolo nacional que aparece en el escudo de Nigeria?",
        options: ["Un Águila", "Un León", "Un Oso"],
        correctIndex: 0,
        funFact: "El águila roja representa la fuerza en el escudo oficial de Nigeria, sostenida sobre un fondo negro que simboliza la rica tierra fértil.",
        mascotHint: "Vuela muy alto en el cielo, tiene una vista increíble y garras afiladas. ¡A estribor el ave majestuosa!"
      },
      {
        id: generateId("nigeria", 1, 1),
        question: "¿En qué continente se encuentra Nigeria?",
        options: ["América del Sur", "Asia", "África"],
        correctIndex: 2,
        funFact: "Nigeria es a menudo llamada 'El Gigante de África' debido a su enorme población y economía.",
        mascotHint: "Es el continente famoso por sus safaris, leones y jirafas. ¡Zarpamos hacia el sol naciente!"
      },
      {
        id: generateId("nigeria", 1, 2),
        question: "¿De qué colores es la bandera oficial de Nigeria?",
        options: ["Verde, Blanco, Verde", "Rojo, Amarillo, Verde", "Azul y Blanco"],
        correctIndex: 0,
        funFact: "Las franjas verdes de la bandera representan la riqueza natural y forestal, mientras que la blanca central simboliza la paz.",
        mascotHint: "Tiene el color de las hojas y el color de las nubes formando tres franjas verticales. ¡Iza bandera!"
      },
      {
        id: generateId("nigeria", 1, 3),
        question: "¿Qué gran ciudad portuaria es el centro económico más importante de Nigeria, aunque no sea su capital?",
        options: ["Lagos", "Abuya", "Nairobi"],
        correctIndex: 0,
        funFact: "Lagos es una megaciudad vibrante y una de las áreas urbanas de más rápido crecimiento en todo el mundo.",
        mascotHint: "Su nombre significa 'lagos' o cuerpos de agua en portugués, ¡y tiene un gran puerto marítimo!"
      },
      {
        id: generateId("nigeria", 1, 4),
        question: "¿Qué industria cinematográfica local de Nigeria es mundialmente famosa por su enorme volumen de películas?",
        options: ["Hollywood", "Bollywood", "Nollywood"],
        correctIndex: 2,
        funFact: "Nollywood produce miles de películas cada año y es, en volumen, la segunda industria fílmica más grande del mundo tras la de la India.",
        mascotHint: "Su nombre combina la N de su país con la terminación del cine estadounidense. ¡Luces, cámara, anclas!"
      }
    ],
    2: [
      {
        id: generateId("nigeria", 2, 0),
        question: "¿Cómo se llama el río más importante de Nigeria, del cual el país toma su nombre?",
        options: ["Río Níger", "Río Congo", "Río Zambeze"],
        correctIndex: 0,
        funFact: "El río Níger es el tercer río más largo de África y tiene una peculiar forma de media luna que desconcertó a los geógrafos europeos durante siglos.",
        mascotHint: "Empieza por 'N' y rima con el nombre del país. ¡Todos a bordo!"
      },
      {
        id: generateId("nigeria", 2, 1),
        question: "¿Cuál es la capital actual de Nigeria, construida a propósito en el centro del país en los años 80?",
        options: ["Lagos", "Kano", "Abuja (Abuya)"],
        correctIndex: 2,
        funFact: "Abuja fue elegida como capital para reemplazar a Lagos debido a su ubicación neutral, que no favorece a ningún grupo étnico importante sobre otro.",
        mascotHint: "Su nombre empieza y termina con 'A'. ¡Navega al centro del país!"
      },
      {
        id: generateId("nigeria", 2, 2),
        question: "¿Qué gran río fluye desde el este y se une al río Níger en la ciudad de Lokoja?",
        options: ["Río Benue", "Río Nilo", "Río Volta"],
        correctIndex: 0,
        funFact: "La confluencia en Lokoja es majestuosa y los ríos forman una gigantesca letra 'Y' visible en el mapa de Nigeria.",
        mascotHint: "Es un río importante que empieza con 'B'. ¡Dos corrientes se encuentran, grumete!"
      },
      {
        id: generateId("nigeria", 2, 3),
        question: "¿Qué estilo musical originado en Nigeria combina ritmos locales del oeste africano, jazz, funk y cantos?",
        options: ["Reggae", "Afrobeat", "Salsa"],
        correctIndex: 1,
        funFact: "El legendario músico Fela Kuti fue el pionero del Afrobeat en la década de 1970 en Lagos.",
        mascotHint: "Su nombre combina la palabra 'África' y el ritmo en inglés. ¡A bailar en cubierta!"
      },
      {
        id: generateId("nigeria", 2, 4),
        question: "¿Cuál es el principal recurso natural exportado desde el delta del Níger que impulsa la economía del país?",
        options: ["Oro", "Petróleo crudo", "Diamantes"],
        correctIndex: 1,
        funFact: "Nigeria es uno de los mayores productores y exportadores de petróleo del mundo, extraído principalmente de su costa sur.",
        mascotHint: "Es un líquido negro muy valioso conocido como 'oro negro'. ¡Vaya botín!"
      }
    ],
    3: [
      {
        id: generateId("nigeria", 3, 0),
        question: "¿Cuál de estos bosques sagrados de Nigeria es Patrimonio de la Humanidad por albergar santuarios de la cultura Yoruba?",
        options: ["Bosque Sagrado de Osun-Osogbo", "Reserva de Omo", "Parque Nacional Yankari"],
        correctIndex: 0,
        funFact: "El Bosque Sagrado de Osun-Osogbo contiene esculturas increíbles dedicadas a la diosa del agua dulce y la fertilidad.",
        mascotHint: "Lleva el nombre de una deidad del agua dulce muy venerada. ¡Adéntrate en los misterios de la selva!"
      },
      {
        id: generateId("nigeria", 3, 1),
        question: "¿Qué antigua cultura nigeriana es famosa por sus intrincadas figuras humanas hechas de terracota que datan del 500 a.C.?",
        options: ["Cultura Nok", "Imperio Songhai", "Reino de Kush"],
        correctIndex: 0,
        funFact: "Las impresionantes esculturas de terracota Nok se caracterizan por sus peculiares ojos triangulares y fueron encontradas por mineros de estaño.",
        mascotHint: "Un nombre de tan solo 3 letras. Empieza por N y termina por K. ¡Tesoros enterrados!"
      },
      {
        id: generateId("nigeria", 3, 2),
        question: "¿Cuál es el punto natural más alto de Nigeria, situado en los montes Gotel cerca de la frontera con Camerún?",
        options: ["Chappal Waddi", "Monte Kilimanjaro", "Monte Kenia"],
        correctIndex: 0,
        funFact: "Chappal Waddi, que significa 'Montaña de la Muerte', se eleva a 2,419 metros sobre el nivel del mar, pero sus valles son muy frondosos.",
        mascotHint: "Su nombre consta de dos palabras que suenan muy peculiares: C... W... ¡Sube hasta las nubes!"
      },
      {
        id: generateId("nigeria", 3, 3),
        question: "¿Qué gran formación de roca en forma de cúpula granítica se alza imponentemente a las afueras de la capital Abuja?",
        options: ["Roca Zuma", "Roca Aso", "Monte Olumo"],
        correctIndex: 0,
        funFact: "La Roca Zuma es tan masiva (más de 700 metros de alto) que muchos aseguran poder ver el rostro de una persona grabado en su ladera.",
        mascotHint: "Rima con 'Puma'. ¡Es una montaña de piedra que no puedes perder de vista, marinero!"
      },
      {
        id: generateId("nigeria", 3, 4),
        question: "¿Qué famoso reino precolonial ubicado en el actual sur de Nigeria era conocido por sus sofisticados palacios y sus impresionantes placas de bronce?",
        options: ["Reino Zulú", "Imperio Mali", "Reino de Benín"],
        correctIndex: 2,
        funFact: "El Reino de Benín forjó los famosos 'Bronces de Benín', que decoraban el palacio del Oba (el rey) y demostraban un arte metalúrgico maestro.",
        mascotHint: "Lleva el nombre del país vecino que está al oeste de Nigeria. ¡Una corte de reyes marineros!"
      }
    ]
  },
  india: {
    1: [
      {
        id: generateId("india", 1, 0),
        question: "¿Qué icónico palacio blanco de mármol construido por amor es el monumento más famoso de la India?",
        options: ["Taj Mahal", "Palacio de los Vientos", "Fuerte Rojo"],
        correctIndex: 0,
        funFact: "El Taj Mahal fue construido en Agra por el emperador Shah Jahan en memoria de su esposa favorita, Mumtaz Mahal.",
        mascotHint: "Rima con 'Cantar' y es una joya de mármol blanco brillante junto al río Yamuna. ¡A estribor, maravilla a la vista!"
      },
      {
        id: generateId("india", 1, 1),
        question: "¿Qué animal es considerado sagrado en gran parte de la India y a menudo deambula libremente por las calles?",
        options: ["El Elefante", "La Vaca", "El Mono"],
        correctIndex: 1,
        funFact: "En la religión hindú, las vacas son un símbolo de riqueza, vida y maternidad universal, por lo que son muy respetadas y protegidas.",
        mascotHint: "Nos da leche y hace 'Muuu'. ¡Cuidado por donde navegas en tierra!"
      },
      {
        id: generateId("india", 1, 2),
        question: "¿Cuál es la vibrante fiesta de los colores en la India donde la gente se lanza polvos brillantes?",
        options: ["Diwali", "Holi", "Navidad"],
        correctIndex: 1,
        funFact: "Holi es el festival hindú de la primavera que celebra la victoria del bien sobre el mal, llenando todo el país de arcoíris de colores en polvo.",
        mascotHint: "Solo tiene 4 letras y empieza con 'H'. ¡Prepara tu cañón de pintura, marinero!"
      },
      {
        id: generateId("india", 1, 3),
        question: "¿Qué gran felino rayado de las selvas es el animal nacional de la India?",
        options: ["El León Asiático", "El Leopardo de las Nieves", "El Tigre de Bengala"],
        correctIndex: 2,
        funFact: "La India alberga a la gran mayoría de la población mundial de tigres salvajes. Tienen un rugido que se escucha a 3 kilómetros de distancia.",
        mascotHint: "Es naranja con rayas negras y se pasea sigilosamente. ¡A babor, fiera en cubierta!"
      },
      {
        id: generateId("india", 1, 4),
        question: "¿Cómo se llama la flor nacional de la India, de color rosa y que suele crecer en el lodo flotando sobre estanques?",
        options: ["Rosa", "Loto", "Orquídea"],
        correctIndex: 1,
        funFact: "La flor de loto es sagrada en la India; representa pureza y belleza, ya que brota perfecta desde las profundidades del lodo.",
        mascotHint: "Su nombre suena como una palabra para pedir suerte en la lotería. ¡Una flor flotante en alta mar!"
      }
    ],
    2: [
      {
        id: generateId("india", 2, 0),
        question: "¿Qué gran sistema montañoso forma la frontera norte de la India, siendo el más alto de la Tierra?",
        options: ["Los Andes", "Los Alpes", "El Himalaya"],
        correctIndex: 2,
        funFact: "Himalaya significa 'morada de la nieve' en sánscrito, y estas montañas protegen a la India de los vientos helados de Asia Central.",
        mascotHint: "Empieza con H y sus cumbres tocan el cielo. ¡Prepara los abrigos polares, tripulación!"
      },
      {
        id: generateId("india", 2, 1),
        question: "¿Qué río del norte de la India es considerado el más sagrado por el hinduismo?",
        options: ["Río Indo", "Río Ganges", "Río Brahmaputra"],
        correctIndex: 1,
        funFact: "Millones de peregrinos acuden a las orillas del Ganges (o Ganga) en ciudades como Varanasi para sumergirse en sus aguas purificadoras.",
        mascotHint: "Empieza por G. ¡El río de los dioses espera!"
      },
      {
        id: generateId("india", 2, 2),
        question: "¿Cuál es la bulliciosa ciudad costera conocida como la capital del cine 'Bollywood'?",
        options: ["Nueva Delhi", "Calcuta", "Bombay (Mumbai)"],
        correctIndex: 2,
        funFact: "Mumbai no solo es el centro financiero de la India, sino también una de las ciudades más pobladas y frenéticas de todo el planeta.",
        mascotHint: "Su nombre antiguo empezaba por B y el actual por M. ¡Luces, música y baile a babor!"
      },
      {
        id: generateId("india", 2, 3),
        question: "¿Qué impresionante palacio de color rosado con 953 ventanas minúsculas se encuentra en la ciudad de Jaipur?",
        options: ["Hawa Mahal (Palacio de los Vientos)", "Fuerte de Amber", "Palacio de Mysore"],
        correctIndex: 0,
        funFact: "Fue diseñado con tantas ventanas pequeñas para permitir a las mujeres reales observar los festivales callejeros sin ser vistas, y permitía fluir el aire fresco.",
        mascotHint: "Su nombre significa 'Palacio de los Vientos'. ¡Siente la brisa en tu cara, marinero!"
      },
      {
        id: generateId("india", 2, 4),
        question: "¿Qué majestuoso desierto cálido cubre parte del noroeste de la India en la región de Rajastán?",
        options: ["Desierto del Gobi", "Desierto de Thar", "Desierto del Sahara"],
        correctIndex: 1,
        funFact: "El Desierto de Thar es el desierto más densamente poblado del mundo, lleno de vida colorida y camellos engalanados.",
        mascotHint: "Su nombre solo tiene 4 letras y suena a un antiguo dios del trueno de otra mitología. ¡A navegar dunas de arena!"
      }
    ],
    3: [
      {
        id: generateId("india", 3, 0),
        question: "¿Qué antigua maravilla arquitectónica hindú en el estado de Maharashtra cuenta con más de 30 templos esculpidos directamente en cuevas de piedra sólida?",
        options: ["Cuevas de Ajanta y Ellora", "Templos de Khajuraho", "Templo del Sol de Konark"],
        correctIndex: 0,
        funFact: "El templo de Kailasa, dentro del complejo de Ellora, es la mayor estructura monolítica tallada en roca del mundo entero, excavada de arriba hacia abajo.",
        mascotHint: "Son un conjunto de cuevas. Sus nombres empiezan con A y E. ¡Rocas mágicas talladas a mano!"
      },
      {
        id: generateId("india", 3, 1),
        question: "¿Cómo se llama la extensa meseta que forma la mayor parte de la península sur de la India?",
        options: ["Meseta del Tíbet", "Meseta del Decán", "Meseta de Pamir"],
        correctIndex: 1,
        funFact: "La meseta del Decán abarca varios estados de la India meridional y está bordeada por cadenas montañosas conocidas como los Ghats Occidentales y Orientales.",
        mascotHint: "Su nombre deriva de una palabra que significa 'sur' en sánscrito. ¡Tierra alta a estribor!"
      },
      {
        id: generateId("india", 3, 2),
        question: "¿Qué río gigante fluye desde el Tíbet atravesando el noreste de la India y es clave para los enormes deltas de Bengala?",
        options: ["Río Indo", "Río Brahmaputra", "Río Godavari"],
        correctIndex: 1,
        funFact: "A diferencia de la mayoría de los ríos de la India con nombres femeninos, el Brahmaputra significa 'hijo de Brahma' y lleva un nombre masculino.",
        mascotHint: "Es un nombre largo que empieza por B. ¡Corrientes muy, muy fuertes, capitán!"
      },
      {
        id: generateId("india", 3, 3),
        question: "¿Qué grupo de islas coralinas paradisíacas pertenece a la India y se encuentra en pleno Mar Arábigo?",
        options: ["Islas Andamán y Nicobar", "Lakshadweep (Laquedivas)", "Islas Maldivas"],
        correctIndex: 1,
        funFact: "Las islas Lakshadweep son las únicas islas de coral atolones de la India, su nombre significa literalmente 'cien mil islas' en sánscrito.",
        mascotHint: "Es una palabra muy larga que empieza por L. ¡Arrecifes listos para explorar bajo el agua!"
      },
      {
        id: generateId("india", 3, 4),
        question: "¿Qué enorme reserva de manglares en la costa este es el hábitat natural de los tigres nadadores de Bengala?",
        options: ["Parque Nacional Ranthambore", "Sunderbans", "Bosque de Gir"],
        correctIndex: 1,
        funFact: "Los Sunderbans son el bosque de manglares halófitos más grande del planeta, abarcando India y Bangladesh.",
        mascotHint: "Su nombre significa 'bosque hermoso' en bengalí y empieza por S. ¡Prepara tu bote entre las raíces!"
      }
    ]
  },
  china: {
    1: [
      {
        id: generateId("china", 1, 0),
        question: "¿Qué adorable mamífero de color blanco y negro se alimenta casi exclusivamente de bambú en China?",
        options: ["Koala", "Oso Panda", "Lémur"],
        correctIndex: 1,
        funFact: "Un panda gigante pasa hasta 12 horas al día comiendo bambú para satisfacer sus necesidades de energía.",
        mascotHint: "Tiene orejas redondas y negras, manchas negras en los ojos y es súper tierno. ¡Un osito glotón a babor!"
      },
      {
        id: generateId("china", 1, 1),
        question: "¿Qué colosal estructura defensiva de piedra fue construida para proteger el norte del imperio chino?",
        options: ["La Muralla China", "La Línea Maginot", "El Muro de Berlín"],
        correctIndex: 0,
        funFact: "La Gran Muralla China se construyó a lo largo de varias dinastías y abarca más de 21,000 kilómetros entre montañas y desiertos.",
        mascotHint: "Es tan larga que parece un dragón serpenteando sobre las colinas. ¡Una barrera de rocas interminable!"
      },
      {
        id: generateId("china", 1, 2),
        question: "¿Qué criatura mitológica que escupe fuego o vuela entre las nubes es un símbolo tradicional de buena suerte en China?",
        options: ["El Ave Fénix", "El Unicornio", "El Dragón"],
        correctIndex: 2,
        funFact: "A diferencia de la cultura occidental, en la tradición china el dragón es benevolente, representa el poder imperial y controla la lluvia.",
        mascotHint: "Tiene cuerpo de serpiente, escamas, bigotes largos y no necesita alas para volar. ¡Viene volando entre las nubes!"
      },
      {
        id: generateId("china", 1, 3),
        question: "¿Cuál de estos inventos antiguos NO fue inventado originalmente en China?",
        options: ["El papel y la pólvora", "La brújula magnética", "La máquina de vapor"],
        correctIndex: 2,
        funFact: "China es célebre por sus 'Cuatro Grandes Inventos': el papel, la brújula, la pólvora y la imprenta.",
        mascotHint: "Un invento moderno y metálico que hizo nacer los trenes y la revolución industrial en Europa. ¡Ojo avizor!"
      },
      {
        id: generateId("china", 1, 4),
        question: "¿Qué color se considera el más afortunado y feliz en China, usando ampliamente en festividades como el Año Nuevo?",
        options: ["Blanco", "Rojo", "Negro"],
        correctIndex: 1,
        funFact: "En el Año Nuevo Chino, los mayores entregan 'sobres rojos' (hongbao) llenos de dinero a los niños como símbolo de buena suerte.",
        mascotHint: "El color del fuego y de las banderas. ¡Vístete para atraer fortuna, marinero!"
      }
    ],
    2: [
      {
        id: generateId("china", 2, 0),
        question: "¿Cuál es el río más largo de Asia, que cruza China de oeste a este y alberga la gran presa de las Tres Gargantas?",
        options: ["Río Amarillo", "Río Yangtsé", "Río Mekong"],
        correctIndex: 1,
        funFact: "El río Yangtsé es el tercer río más largo del mundo y es una ruta comercial y ecológica vital que divide a China en norte y sur.",
        mascotHint: "También se le conoce como el 'Río Azul'. ¡Su nombre empieza por Y, levad anclas!"
      },
      {
        id: generateId("china", 2, 1),
        question: "¿Qué asombroso descubrimiento arqueológico en Xi'an consiste en miles de esculturas de guerreros de arcilla a tamaño real?",
        options: ["Los Guerreros de Terracota", "La Ciudad Prohibida", "Los Budas de Bamiyán"],
        correctIndex: 0,
        funFact: "Fueron mandados hacer hace más de 2000 años por el primer Emperador de China, Qin Shi Huang, para protegerlo en el más allá. ¡Cada rostro es único!",
        mascotHint: "Son un ejército silencioso hecho de barro horneado. ¡Alineados y en formación, tripulantes!"
      },
      {
        id: generateId("china", 2, 2),
        question: "¿Qué enorme complejo de palacios imperiales con techos amarillos se encuentra en el centro de Pekín (Beijing)?",
        options: ["El Palacio de Potala", "La Ciudad Prohibida", "El Templo del Cielo"],
        correctIndex: 1,
        funFact: "Fue la residencia de los emperadores durante casi 500 años y se le llamaba 'Prohibida' porque nadie podía entrar o salir sin el permiso del Emperador.",
        mascotHint: "Su nombre te dice que no puedes pasar. ¡Cuidado, acceso restringido, grumete!"
      },
      {
        id: generateId("china", 2, 3),
        question: "¿Cuál es el segundo río más largo de China, a menudo considerado como la 'cuna de la civilización china' debido a su limo fértil?",
        options: ["El Río de las Perlas", "El Río Amarillo (Huang He)", "El Río Amur"],
        correctIndex: 1,
        funFact: "El Río Amarillo obtiene su nombre por la enorme cantidad de sedimento de polvo fino (loess) que transporta, tiñendo sus aguas.",
        mascotHint: "Lleva el color del sol o del oro brillante en sus turbulentas aguas. ¡Navegamos en un río muy brillante!"
      },
      {
        id: generateId("china", 2, 4),
        question: "¿Qué gran región autónoma y montañosa al oeste de China es conocida como el 'Techo del Mundo'?",
        options: ["Sichuan", "Mongolia Interior", "El Tíbet"],
        correctIndex: 2,
        funFact: "El Tíbet es la meseta más alta y extensa de todo el planeta, con una altitud media de casi 5,000 metros.",
        mascotHint: "Su nombre empieza por T y está muy, muy alto, cerca de los Himalayas. ¡Preparen los abrigos!"
      }
    ],
    3: [
      {
        id: generateId("china", 3, 0),
        question: "¿Qué increíble paisaje geológico de montañas kársticas rodea el río Li cerca de la ciudad de Guilin?",
        options: ["El Bosque de Piedra (Shilin)", "Montañas de Zhangjiajie", "Colinas Kársticas de Guilin"],
        correctIndex: 2,
        funFact: "Las colinas puntiagudas de Guilin, tapizadas de vegetación, han inspirado pinturas chinas clásicas durante milenios y están plasmadas en los billetes del país.",
        mascotHint: "Es un paisaje de picos de roca caliza junto a un río sereno y empieza con G. ¡Un lugar poético y mágico!"
      },
      {
        id: generateId("china", 3, 1),
        question: "¿Qué parque forestal en Hunan tiene enormes pilares de cuarcita que inspiraron las montañas flotantes de la película Avatar?",
        options: ["Zhangjiajie", "Monte Hua", "Huangshan"],
        correctIndex: 0,
        funFact: "El Parque Forestal Nacional de Zhangjiajie alberga más de 3,000 enormes pilares rocosos naturales que a menudo se elevan sobre mares de nubes.",
        mascotHint: "Es una palabra muy difícil de pronunciar que empieza con Z. ¡Pilares que parecen tocar las estrellas!"
      },
      {
        id: generateId("china", 3, 2),
        question: "¿Qué enorme desierto frío situado en el noroeste de China era temido por las antiguas caravanas de la Ruta de la Seda?",
        options: ["Desierto del Gobi", "Desierto de Taklamakán", "Desierto del Thar"],
        correctIndex: 1,
        funFact: "Su nombre proviene de lenguas locales y popularmente se traduce como 'si entras, no saldrás'. Es uno de los desiertos de dunas móviles más grandes.",
        mascotHint: "Un nombre largo que suena a tictac. Empieza por T. ¡Cuidado de no perderse en las dunas de arena, marinero!"
      },
      {
        id: generateId("china", 3, 3),
        question: "¿Qué maravilla de la ingeniería antigua es el canal artificial más largo del mundo, conectando el norte y sur de China?",
        options: ["El Gran Canal de China", "El Canal de Suez", "El Canal de Panamá"],
        correctIndex: 0,
        funFact: "El Gran Canal, que conecta Pekín y Hangzhou, tiene más de 1,700 kilómetros de longitud y partes de él llevan en uso más de 2,500 años.",
        mascotHint: "Su nombre indica su inmenso tamaño y el país al que pertenece. ¡La súper autopista del agua antigua!"
      },
      {
        id: generateId("china", 3, 4),
        question: "¿Cuál de estos picos sagrados es conocido por tener el sendero de senderismo 'más peligroso del mundo' sobre tablones de madera en precipicios?",
        options: ["Monte Emei", "Monte Tai", "Monte Hua (Huashan)"],
        correctIndex: 2,
        funFact: "El monte Hua es uno de los Cinco Grandes Montes Sagrados del taoísmo y atrae a temerarios escaladores por sus escaleras empinadas y senderos al vacío.",
        mascotHint: "Su nombre suena como la palabra inglesa 'wash' pero sin la 's'. ¡Un acantilado vertiginoso!"
      }
    ]
  },
  japon: {
    1: [
      {
        id: generateId("japon", 1, 0),
        question: "¿Qué majestuoso volcán de pico nevado es la montaña más alta y famosa de Japón?",
        options: ["Monte Fuji", "Monte Everest", "Monte Olimpo"],
        correctIndex: 0,
        funFact: "El Monte Fuji es un volcán inactivo pero sagrado, considerado uno de los grandes símbolos espirituales de Japón.",
        mascotHint: "Tiene una silueta cónica casi perfecta y suele aparecer pintado con flores de cerezo. ¡Levanta la vista, grumete!"
      },
      {
        id: generateId("japon", 1, 1),
        question: "¿Cómo se llama la comida japonesa muy popular hecha de arroz avinagrado acompañado de pescado crudo o algas?",
        options: ["Sushi", "Ramen", "Tempura"],
        correctIndex: 0,
        funFact: "Originalmente, el arroz fermentado se usaba solo para conservar el pescado y luego se tiraba. ¡Hoy nos lo comemos fresco!",
        mascotHint: "Viene en rollitos enrollados con alga nori o en pequeños bocados de arroz. ¡A comer, marinero!"
      },
      {
        id: generateId("japon", 1, 2),
        question: "¿Qué antigua clase de guerreros japoneses se guiaba por el estricto código de honor del Bushido?",
        options: ["Los Ninjas", "Los Samuráis", "Los Vikingos"],
        correctIndex: 1,
        funFact: "Los samuráis usaban katanas, que eran espadas extremadamente afiladas, y servían fielmente a sus señores feudales o daimyos.",
        mascotHint: "Llevaban armaduras impresionantes y espadas largas. ¡Cuidado con su filo!"
      },
      {
        id: generateId("japon", 1, 3),
        question: "¿Qué son los trenes 'Shinkansen' que atraviesan rápidamente Japón?",
        options: ["Trenes Bala", "Trenes de Vapor Antiguos", "Trenes Submarinos"],
        correctIndex: 0,
        funFact: "Los trenes bala o Shinkansen pueden viajar a más de 300 km/h y son famosos mundialmente por su puntualidad milimétrica y gran seguridad.",
        mascotHint: "Son más rápidos que la bala de un cañón y su nombre popular lo dice. ¡Velocidad a babor!"
      },
      {
        id: generateId("japon", 1, 4),
        question: "¿Qué representan los enormes arcos rojos llamados 'Torii' que a menudo se encuentran en el agua o al inicio de los bosques?",
        options: ["Un puente medieval", "La puerta a un santuario sintoísta", "Una torre de defensa ninja"],
        correctIndex: 1,
        funFact: "Los arcos Torii marcan mágicamente la frontera entre el mundo humano cotidiano y el reino espiritual de los dioses o 'kami'.",
        mascotHint: "Son puertas gigantes de color rojo intenso que te invitan a un lugar sagrado. ¡Entremos con respeto!"
      }
    ],
    2: [
      {
        id: generateId("japon", 2, 0),
        question: "¿Cómo se llama la hermosa época de primavera en Japón en la que florecen los cerezos y se celebra el festival Hanami?",
        options: ["Momiji", "Sakura", "Tsukimi"],
        correctIndex: 1,
        funFact: "La flor del cerezo (Sakura) es tan importante que los noticieros japoneses pronostican cada año exactamente cuándo florecerán las diferentes ciudades.",
        mascotHint: "El país entero se tiñe de un suave color rosa pastel. ¡Prepara tu picnic!"
      },
      {
        id: generateId("japon", 2, 1),
        question: "¿Cuál es la inmensa metrópolis que es la actual capital de Japón, conocida por su famosa intersección de Shibuya?",
        options: ["Osaka", "Kioto", "Tokio"],
        correctIndex: 2,
        funFact: "Tokio (el área metropolitana) es el área urbana más poblada de todo el mundo, con alrededor de 37 millones de habitantes.",
        mascotHint: "Su nombre en japonés significa 'Capital del Este'. ¡Luces de neón en cada esquina!"
      },
      {
        id: generateId("japon", 2, 2),
        question: "¿Cuál es la isla más grande del archipiélago de Japón, donde se ubican Tokio, Kioto y el Monte Fuji?",
        options: ["Hokkaido", "Honshu", "Kyushu"],
        correctIndex: 1,
        funFact: "Honshu es la séptima isla más grande del mundo y alberga a la gran mayoría de la población e industria total de Japón.",
        mascotHint: "Su nombre significa literalmente 'Provincia Principal'. Termina con 'shu'."
      },
      {
        id: generateId("japon", 2, 3),
        question: "¿Qué impresionante castillo de madera pintado de blanco, apodado la 'Garza Blanca', es patrimonio mundial en Japón?",
        options: ["Castillo de Osaka", "Castillo de Edo", "Castillo de Himeji"],
        correctIndex: 2,
        funFact: "El Castillo de Himeji es uno de los pocos castillos japoneses originales que sobrevivió a terremotos y guerras sin ser destruido nunca.",
        mascotHint: "Su nombre empieza por H. Es una fortaleza blanca hermosa e imponente."
      },
      {
        id: generateId("japon", 2, 4),
        question: "¿Qué antiguo deporte japonés de combate enfrenta a gigantescos luchadores en un círculo de arena?",
        options: ["Judo", "Kárate", "Sumo"],
        correctIndex: 2,
        funFact: "Los luchadores de sumo o 'rikishi' siguen rituales sintoístas, como arrojar sal a la arena antes del combate para purificar el terreno.",
        mascotHint: "Los luchadores son muy pesados, fuertes, y chocan como dos grandes icebergs en el mar. ¡Puro peso!"
      }
    ],
    3: [
      {
        id: generateId("japon", 3, 0),
        question: "¿Qué mar, conocido por sus ricas aguas pesqueras, separa la costa oeste del archipiélago japonés del continente asiático?",
        options: ["El Mar Amarillo", "El Mar de Japón", "El Mar de la China Oriental"],
        correctIndex: 1,
        funFact: "El Mar de Japón carece prácticamente de mareas significativas debido a su aislamiento casi total del océano Pacífico.",
        mascotHint: "Su nombre es exactamente igual que el del propio país. ¡Navegamos en sus propias aguas, capitán!"
      },
      {
        id: generateId("japon", 3, 1),
        question: "¿Qué gran isla nevada, la más septentrional (al norte) de Japón, es famosa por sus osos pardos, paisajes helados y un festival de nieve en Sapporo?",
        options: ["Hokkaido", "Shikoku", "Okinawa"],
        correctIndex: 0,
        funFact: "Hokkaido cuenta con extensos parques nacionales inmaculados e inviernos polares, haciéndola un paraíso para el esquí y la naturaleza salvaje.",
        mascotHint: "Empieza con H. ¡Hace mucho frío allí arriba, a abrigarse bien las plumas!"
      },
      {
        id: generateId("japon", 3, 2),
        question: "¿Qué antiguo camino de la era Edo conectaba la vieja capital de Kioto con la nueva capital, Tokio (antiguamente llamada Edo)?",
        options: ["El camino del Kumano Kodo", "La ruta de la Seda", "La ruta Nakasendo"],
        correctIndex: 2,
        funFact: "El Nakasendo, que significa 'camino a través de las montañas', permitía viajar a salvo entre las ciudades y hoy sus antiguas posadas (juku) aún se pueden visitar a pie.",
        mascotHint: "Un nombre que empieza por N y termina por O. ¡Ponte las botas de caminar!"
      },
      {
        id: generateId("japon", 3, 3),
        question: "¿Qué isla sub-tropical en el lejano sur de Japón, cuna del kárate, era un reino independiente llamado Ryukyu?",
        options: ["Okinawa", "Kyushu", "Tsushima"],
        correctIndex: 0,
        funFact: "Okinawa tiene hermosas playas de arena blanca y coral, y sus habitantes son famosos mundialmente por su longevidad y dieta saludable.",
        mascotHint: "Empieza por O. Sus playas cristalinas son un refugio caribeño en pleno Japón. ¡Aloha a la japonesa!"
      },
      {
        id: generateId("japon", 3, 4),
        question: "¿Qué deidad de la mitología sintoísta japonesa es la diosa del Sol y la antepasada mitológica de la Familia Imperial?",
        options: ["Susanoo", "Tsukuyomi", "Amaterasu"],
        correctIndex: 2,
        funFact: "Según la leyenda antigua, Amaterasu se ocultó en una cueva ofendida y privó al mundo de su luz, hasta que la risa y bailes de otras deidades la hicieron salir curiosa.",
        mascotHint: "Su nombre empieza por A y suena celestial. ¡La luz del sol nos guía!"
      }
    ]
  },
  rusia: {
    1: [
      {
        id: generateId("rusia", 1, 0),
        question: "¿Qué coloridas muñecas rusas de madera hueca se guardan una dentro de otra?",
        options: ["Matrioshkas", "Barbies", "Kokeshis"],
        correctIndex: 0,
        funFact: "La primera matrioshka fue tallada en 1890. Representan la maternidad y la fertilidad, y tradicionalmente están pintadas como campesinas felices.",
        mascotHint: "¡Es una gran familia de madera! Abres una grande y... ¡sorpresa, sale otra más pequeñita!"
      },
      {
        id: generateId("rusia", 1, 1),
        question: "¿Cuál es la inmensa capital de Rusia, famosa por sus espectaculares estaciones de metro y el Kremlin?",
        options: ["San Petersburgo", "Moscú", "Kiev"],
        correctIndex: 1,
        funFact: "Moscú alberga la Plaza Roja y la bellísima Catedral de San Basilio, famosa por sus deslumbrantes cúpulas en forma de cebollas de colores.",
        mascotHint: "Empieza por M. En invierno allí cae mucha nieve. ¡Abrígate bien marinero!"
      },
      {
        id: generateId("rusia", 1, 2),
        question: "¿Rusia es famosa por ser el país más ______ de todo el planeta Tierra?",
        options: ["Poblado", "Cálido", "Extenso (Grande)"],
        correctIndex: 2,
        funFact: "Rusia es tan inmensa que abarca 11 husos horarios y ocupa un tercio del continente euroasiático.",
        mascotHint: "Es un verdadero gigante geográfico, sus tierras parecen nunca terminar en el horizonte. ¡Vaya viaje largo!"
      },
      {
        id: generateId("rusia", 1, 3),
        question: "¿Qué danza clásica muy elegante es un orgullo de la cultura rusa y teatros como el Bolshói?",
        options: ["Salsa", "Ballet", "Hip Hop"],
        correctIndex: 1,
        funFact: "El ballet ruso cuenta con obras maestras de la música clásica como 'El Lago de los Cisnes' y 'El Cascanueces', del compositor Tchaikovsky.",
        mascotHint: "Se baila de puntillas dando saltos gráciles como cisnes. ¡Mucha elegancia en la pista de baile!"
      },
      {
        id: generateId("rusia", 1, 4),
        question: "¿Qué fiero animal, muy asociado con Rusia en cuentos y fábulas, suele simbolizar la fuerza del país en dibujos y caricaturas?",
        options: ["El Lobo", "El Oso Pardo", "El Águila"],
        correctIndex: 1,
        funFact: "El oso ruso (Misha) es un símbolo nacional entrañable y feroz; incluso fue la mascota de los Juegos Olímpicos de Moscú en 1980.",
        mascotHint: "Es muy grande, peludo, de color marrón y le encanta la miel. ¡Un gran abrazo peludo a babor!"
      }
    ],
    2: [
      {
        id: generateId("rusia", 2, 0),
        question: "¿Qué enorme región fría y boscosa cubre la mayor parte de la Rusia asiática en el este?",
        options: ["El Sahara", "Siberia", "La Patagonia"],
        correctIndex: 1,
        funFact: "Siberia representa el 77% de la extensión total de Rusia; aunque es gigantesca, allí vive menos de un tercio de la población rusa debido a su clima hostil.",
        mascotHint: "Es famosa por sus inviernos congelados, grandes bosques de pinos y el tren Transiberiano."
      },
      {
        id: generateId("rusia", 2, 1),
        question: "¿Cuál es el río más largo del continente europeo, que fluye completamente por Rusia occidental hasta desembocar en el Mar Caspio?",
        options: ["Río Danubio", "Río Volga", "Río Rin"],
        correctIndex: 1,
        funFact: "El río Volga es de vital importancia histórica, cultural y económica para Rusia. Es tan venerado que en el país lo llaman con cariño 'Matushka Volga' (Madre Volga).",
        mascotHint: "Empieza con la letra V. Un río largo y legendario con gran historia comercial."
      },
      {
        id: generateId("rusia", 2, 2),
        question: "¿Qué gran ciudad rusa fundada por el Zar Pedro el Grande es conocida como 'La Venecia del Norte' por sus numerosos canales imperiales?",
        options: ["Kazán", "Sochi", "San Petersburgo"],
        correctIndex: 2,
        funFact: "San Petersburgo fue la lujosa capital del Imperio Ruso durante más de 200 años y alberga el espectacular Museo del Hermitage, que posee millones de obras de arte.",
        mascotHint: "Lleva el nombre de un zar y un santo. ¡Un palacio de invierno impresionante!"
      },
      {
        id: generateId("rusia", 2, 3),
        question: "¿Cuál de estos zares mandó a construir y embellecer gran parte de la historia moderna del imperio naval ruso?",
        options: ["Iván el Terrible", "Pedro el Grande", "Vladímir I"],
        correctIndex: 1,
        funFact: "Pedro el Grande viajó de incógnito por Europa trabajando como carpintero naval para aprender a construir grandes barcos de guerra y modernizar Rusia.",
        mascotHint: "Este Zar de más de 2 metros de altura fundó San Petersburgo. ¡Un líder con corazón marinero como el nuestro!"
      },
      {
        id: generateId("rusia", 2, 4),
        question: "¿Qué cordillera montañosa cruza Rusia de norte a sur y es considerada la división natural entre Europa y Asia?",
        options: ["Los Montes Urales", "El Cáucaso", "Los Alpes Escandinavos"],
        correctIndex: 0,
        funFact: "Los Montes Urales son de las montañas más antiguas de la Tierra y son riquísimos en minerales hermosos y gemas preciosas como la malaquita.",
        mascotHint: "Su nombre empieza por la letra U. ¡Una valla de piedra que separa dos continentes gigantes!"
      }
    ],
    3: [
      {
        id: generateId("rusia", 3, 0),
        question: "¿Qué antiguo y purísimo lago situado al sur de Siberia es el lago más profundo de toda la Tierra y contiene el 20% del agua dulce no congelada del planeta?",
        options: ["Lago Ladoga", "Lago Baikal", "Lago Titicaca"],
        correctIndex: 1,
        funFact: "El lago Baikal alcanza unos 1,642 metros de profundidad máxima y es hogar de especies únicas como la foca nerpa, la única foca exclusivamente de agua dulce del mundo.",
        mascotHint: "Empieza por B. Su agua es tan limpia que parece cristal azul. ¡Atento a las focas de agua dulce!"
      },
      {
        id: generateId("rusia", 3, 1),
        question: "¿Qué vasta zona de bosque boreal de coníferas se extiende ininterrumpida por miles de kilómetros a través del frío territorio ruso?",
        options: ["La Tundra", "La Taiga", "El Chaparral"],
        correctIndex: 1,
        funFact: "La taiga siberiana es el bioma terrestre ininterrumpido más grande del planeta, compuesto principalmente por pinos, abetos y alerces resistentes al hielo.",
        mascotHint: "Un nombre de cinco letras que empieza por T. ¡Es un océano pero de pinos oscuros y helados!"
      },
      {
        id: generateId("rusia", 3, 2),
        question: "¿Qué península del lejano oriente ruso, al borde del Pacífico, es una tierra de géiseres activos, osos salvajes y unos 160 volcanes?",
        options: ["Península de Kola", "Península de Chukotka", "Península de Kamchatka"],
        correctIndex: 2,
        funFact: "Kamchatka es Patrimonio de la Humanidad por la UNESCO debido a su espectacular actividad volcánica y su altísima concentración de osos pardos pescando salmón.",
        mascotHint: "Su nombre suena a algo fuerte y lejano que empieza con K. ¡Tierra de hielo y fuego!"
      },
      {
        id: generateId("rusia", 3, 3),
        question: "¿Cuál es el punto de elevación natural más alto de Rusia y de todo el continente europeo, ubicado en la cordillera del Cáucaso?",
        options: ["Monte Elbrus", "Mont Blanc", "Monte Naródnaya"],
        correctIndex: 0,
        funFact: "El imponente Monte Elbrus es un volcán inactivo con dos picos gemelos congelados, elevándose a 5,642 metros y muy codiciado por escaladores.",
        mascotHint: "Un nombre corto que empieza por E. ¡Es más alto que todos los Alpes juntos!"
      },
      {
        id: generateId("rusia", 3, 4),
        question: "¿Qué importante archipiélago ártico perteneciente a Rusia fue durante décadas tierra remota de expediciones polares extremas?",
        options: ["Svalbard", "Nueva Zembla (Novaya Zemlya)", "Tierra de Francisco José"],
        correctIndex: 1,
        funFact: "Nueva Zembla es un archipiélago con forma de luna creciente que separa los mares de Barents y Kara en el gélido Océano Ártico.",
        mascotHint: "Su nombre significa 'Nueva Tierra' en ruso antiguo. ¡Cuidado con los rompehielos!"
      }
    ]
  },
  australia: {
    1: [
      {
        id: generateId("australia", 1, 0),
        question: "¿Qué asombroso marsupial saltarín lleva a sus crías en una bolsa (marsupio) en Australia?",
        options: ["Canguro", "Koala", "Ornitorrinco"],
        correctIndex: 0,
        funFact: "Los canguros machos de mayor tamaño pueden dar enormes saltos que cubren hasta 9 metros de longitud de un solo brinco gracias a sus potentes patas.",
        mascotHint: "Da saltos muy altos en la estepa y es el 'boxeador' más famoso del reino animal. ¡A saltar grumete!"
      },
      {
        id: generateId("australia", 1, 1),
        question: "¿Qué simpático marsupial de Australia se la pasa durmiendo abrazado a los árboles de eucalipto?",
        options: ["Wombat", "Koala", "Demonio de Tasmania"],
        correctIndex: 1,
        funFact: "Un koala puede dormir hasta 20 horas al día porque las hojas de eucalipto de las que se alimenta son muy tóxicas y tardan muchísima energía en digerirse.",
        mascotHint: "Parece un tierno osito de peluche gris, aunque en realidad no es familia de los osos. ¡No lo despiertes!"
      },
      {
        id: generateId("australia", 1, 2),
        question: "¿Qué famoso e icónico edificio australiano tiene techos curvos de color blanco que parecen velas de barco o conchas marinas gigantes?",
        options: ["Torre de Sídney", "Ópera de Sídney", "Puente de la Bahía"],
        correctIndex: 1,
        funFact: "La Ópera de Sídney es una obra maestra del siglo XX diseñada por un arquitecto danés. Los azulejos blancos de sus techos se limpian solos con la lluvia.",
        mascotHint: "Las velas gigantes de su techo siempre me dan ganas de zarpar a cantar. ¡Música a la vista en la bahía!"
      },
      {
        id: generateId("australia", 1, 3),
        question: "¿Qué animal nativo, a pesar de ser mamífero, pone huevos, tiene pico de pato y cola de castor?",
        options: ["El Equidna", "El Emú", "El Ornitorrinco"],
        correctIndex: 2,
        funFact: "El ornitorrinco es uno de los mamíferos más raros del mundo (un monotrema) y los primeros científicos europeos en verlo pensaron que era un engaño de taxidermia o peluches cosidos.",
        mascotHint: "¡Tiene un hermoso pico como el mío! Nada increíblemente bien bajo el agua."
      },
      {
        id: generateId("australia", 1, 4),
        question: "¿Cuál es la capital oficial de Australia?",
        options: ["Sídney", "Melbourne", "Canberra"],
        correctIndex: 2,
        funFact: "Canberra fue construida a propósito a mitad de camino para solucionar una disputa intensa de poder político entre las grandes ciudades de Sídney y Melbourne.",
        mascotHint: "No es la ciudad más famosa, empieza con C y su nombre nativo significa 'Lugar de Encuentro'. ¡Alinea la brújula!"
      }
    ],
    2: [
      {
        id: generateId("australia", 2, 0),
        question: "¿Qué increíble arrecife de coral gigante de Australia es visible desde el espacio?",
        options: ["La Gran Barrera de Coral", "El Arrecife de Belice", "El Atolón de Maldivas"],
        correctIndex: 0,
        funFact: "La Gran Barrera de Coral está compuesta por más de 2,900 arrecifes individuales y se extiende a lo largo de 2,300 kilómetros en el Mar del Coral en la costa este.",
        mascotHint: "Es el hogar del pez payaso y tortugas, está rebosante de peces de mil colores submarinos. ¡Prepara el equipo de buceo!"
      },
      {
        id: generateId("australia", 2, 1),
        question: "¿Cómo se llama el extenso, árido e icónico desierto rojo que ocupa la mayor parte del interior de Australia?",
        options: ["El Sahara", "El Outback", "El Mojave"],
        correctIndex: 1,
        funFact: "El Outback es una zona remota de Australia, famosa por su tierra roja, altas temperaturas, canguros rojos salvajes y antiguos pueblos aborígenes originarios.",
        mascotHint: "Es una palabra en inglés que suena como 'allá afuera' en la inmensidad seca. ¡Lleva mucha agua!"
      },
      {
        id: generateId("australia", 2, 2),
        question: "¿Qué enorme ave corredora incapaz de volar acompaña al canguro en el escudo nacional de armas australiano?",
        options: ["El Kiwi", "El Avestruz", "El Emú"],
        correctIndex: 2,
        funFact: "Los emúes pueden correr a casi 50 km/h. Fueron elegidos para el escudo, junto con el canguro, porque ninguno de estos dos animales puede caminar hacia atrás, simbolizando una nación que siempre avanza hacia el futuro.",
        mascotHint: "Tiene solo tres letras, es gris y peludo, con patas muy largas para correr y dejarme atrás volando."
      },
      {
        id: generateId("australia", 2, 3),
        question: "¿Qué gran isla situada al sur del continente australiano es el hogar de un pequeño marsupial famoso por ser muy gruñón y ruidoso?",
        options: ["Isla Canguro", "Tasmania", "Nueva Zelanda"],
        correctIndex: 1,
        funFact: "Tasmania alberga al 'demonio de Tasmania', el marsupial carnívoro más grande que queda, famoso por un potente chillido y mordida fuerte cuando se alimenta.",
        mascotHint: "Empieza por T. ¡Atento a los remolinos y demonios peleoneros en el bosque!"
      },
      {
        id: generateId("australia", 2, 4),
        question: "¿Qué instrumento musical de viento cilíndrico de madera fue creado tradicionalmente por los aborígenes australianos hace miles de años?",
        options: ["El Didgeridoo", "La Flauta de Pan", "El Saxofón"],
        correctIndex: 0,
        funFact: "Originalmente, el Didgeridoo era hecho de troncos de eucalipto ahuecados de forma natural por termitas y produce un sonido vibrante y grave único y espiritual.",
        mascotHint: "Es un instrumento largo como un tronco que al soplarlo hace un fuerte zumbido antiguo y grave."
      }
    ],
    3: [
      {
        id: generateId("australia", 3, 0),
        question: "¿Cómo llaman respetuosamente los aborígenes a la colosal e icónica roca sagrada de arenisca roja en el remoto desierto central?",
        options: ["Karijini", "Uluru", "Kakadu"],
        correctIndex: 1,
        funFact: "Uluru (también conocida en occidente como Ayers Rock) cambia mágicamente de color a lo largo del día y se vuelve rojo fuego al atardecer por su composición mineral rica en hierro.",
        mascotHint: "Es un nombre sagrado corto de 5 letras, ¡empieza y termina curiosamente con la letra U!"
      },
      {
        id: generateId("australia", 3, 1),
        question: "¿Qué nombre recibe el inmenso arrecife costero y escarpado en la costa occidental del país famoso por los encuentros marinos con enormes tiburones ballena?",
        options: ["Ningaloo Reef", "Shark Bay", "Kimberley Coast"],
        correctIndex: 0,
        funFact: "El Arrecife Ningaloo es especial porque es un arrecife franjeante que está extremadamente cerca de la costa, permitiendo en algunas partes simplemente caminar desde la playa hasta los corales coloridos.",
        mascotHint: "Un nombre que empieza con la letra N. ¡Aguas del océano Índico te esperan!"
      },
      {
        id: generateId("australia", 3, 2),
        question: "¿Qué cadena montañosa divide las húmedas y pobladas costas del este de Australia de los secos desiertos del interior?",
        options: ["Montañas Snowy", "Montañas MacDonnell", "Gran Cordillera Divisoria"],
        correctIndex: 2,
        funFact: "La Gran Cordillera Divisoria o 'Great Dividing Range' es tan extensa que abarca climas nevados y selvas tropicales e influye fuertemente sobre dónde cae la lluvia en Australia.",
        mascotHint: "Su nombre te dice exactamente lo que hace, divide el país a lo largo. ¡Una barrera de nubes a estribor!"
      },
      {
        id: generateId("australia", 3, 3),
        question: "¿Qué inmenso y escabroso parque nacional del norte, patrimonio de la humanidad, es célebre por sus escarpes, arte rupestre antiguo y temibles cocodrilos de estuario?",
        options: ["Parque Nacional Kakadu", "Desierto Simpson", "Parque Purnululu"],
        correctIndex: 0,
        funFact: "Kakadu ha sido habitado ininterrumpidamente por indígenas durante más de 40,000 años y sus acantilados guardan algunas de las galerías de arte en roca más antiguas del mundo entero.",
        mascotHint: "Su nombre suena a un loro blanco saltarín. Empieza por K. ¡Cuidado con las mandíbulas en el fango!"
      },
      {
        id: generateId("australia", 3, 4),
        question: "¿Cuál es el lago más grande de Australia Continental que es mayormente una vasta llanura de sal blanca y solo se llena de agua raramente en época de fuertes diluvios?",
        options: ["Lago Argyle", "Lago Eyre (Kati Thanda)", "Lago Burley Griffin"],
        correctIndex: 1,
        funFact: "Cuando el majestuoso Kati Thanda-Lago Eyre se inunda mágicamente tras fuertes lluvias raras del norte, cientos de miles de pelícanos vuelan de todo el país para criar en sus brillantes aguas rosas.",
        mascotHint: "Lleva el nombre de un explorador británico. Empieza con la letra E. ¡Un lago fantasma!"
      }
    ]
  }
};
