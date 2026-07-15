# 🗺️ Atlas Mágico — El Cartógrafo de Leyendas

> *Un fascinante atlas educativo con geografía, leyendas del mundo, bestiario mitológico y trivias locales.*

---

## 📋 Tabla de Contenidos

1. [Descripción General](#-descripción-general)
2. [Stack Tecnológico](#-stack-tecnológico)
3. [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
4. [Estructura de Archivos](#-estructura-de-archivos)
5. [Modelo de Datos](#-modelo-de-datos)
6. [Componentes de la Interfaz](#-componentes-de-la-interfaz)
7. [Servidor Backend y API](#-servidor-backend-y-api)
8. [Mecánicas del Juego](#-mecánicas-del-juego)
9. [Contenido Educativo](#-contenido-educativo)
10. [Configuración e Instalación](#-configuración-e-instalación)
11. [Scripts Disponibles](#-scripts-disponibles)
12. [Variables de Entorno](#-variables-de-entorno)
13. [Diseño Visual y UX](#-diseño-visual-y-ux)
14. [Flujo de Pantallas](#-flujo-de-pantallas)
15. [Assets e Imágenes](#-assets-e-imágenes)
16. [Posibles Mejoras Futuras](#-posibles-mejoras-futuras)

---

## 🌍 Descripción General

**Atlas Mágico** es una aplicación web educativa interactiva diseñada como un juego de exploración geográfica para estudiantes de primaria y secundaria. Los jugadores recorren un mapa de fantasía del mundo, descubriendo países a través de trivias de un banco de datos local, leyendas mitológicas y un bestiario fantástico de criaturas de cada cultura.

### Características Principales

- **Mapa interactivo estilo fantasía** con marcadores de países navegables dentro de un portal circular.
- **Sistema de trivias** con preguntas obtenidas desde un extenso banco de datos local (100% offline).
- **3 niveles de dificultad** por país: Fácil, Medio y Difícil.
- **Sistema de recompensas** con puntos y estrellas (hasta 3 estrellas por nivel).
- **Temporizador por pregunta** (20 segundos) con bonificación por velocidad.
- **Mascota guía**: "Capitán Patito", un pato marinero que acompaña y da pistas al jugador.
- **Leyendas mitológicas** de cada país (Thunderbird, Curupira, Kitsune, etc.).
- **Bestiario de criaturas fantásticas** (2 criaturas por país con descripción, hábitat y poderes).
- **Efectos de sonido** sintetizados con Web Audio API.
- **Modal de ajustes** con control de volumen, efectos de sonido y reinicio de progreso.
- **8 países explorables**: USA, Brasil, Nigeria, India, China, Japón, Rusia y Australia.

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| **React** | ^19.0.1 | Librería de UI para renderizado de componentes |
| **TypeScript** | ~5.8.2 | Tipado estático para JavaScript |
| **Vite** | ^6.2.3 | Bundler y servidor de desarrollo rápido |
| **TailwindCSS** | ^4.1.14 | Framework de utilidades CSS |
| **Express** | ^4.21.2 | Framework de servidor HTTP para Node.js |
| **Lucide React** | ^0.546.0 | Librería de iconos SVG |
| **Motion** | ^12.23.24 | Librería de animaciones (Framer Motion) |
| **dotenv** | ^17.2.3 | Carga de variables de entorno desde `.env` |
| **tsx** | ^4.21.0 | Ejecución directa de TypeScript en Node.js |
| **esbuild** | ^0.25.0 | Bundler rápido para el servidor de producción |

---

## 🏗️ Arquitectura del Proyecto

Atlas Mágico es una **Single Page Application (SPA) estática** construida con React y Vite, diseñada para ejecutarse íntegramente en el navegador.

```
┌─────────────────────────────────────────────────────┐
│                   CLIENTE (React)                   │
│                                                     │
│  ┌───────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ MapScreen │→ │ LevelsScreen │→ │  QuizScreen  │  │
│  └───────────┘  └──────────────┘  └──────────────┘  │
│        ↑               ↑               │            │
│        └───────────────┴───────────────┘            │
│                   App.tsx (Router)                   │
│                                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │ Banco de Preguntas Local (questionBank.ts)   │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### Flujo de Datos

1. El **cliente React** maneja el estado del juego localmente en `App.tsx`.
2. Cuando el jugador inicia un quiz, `QuizScreen` obtiene directamente una pregunta de `src/questionBank.ts`.
3. El frontend filtra la última pregunta respondida para evitar repeticiones inmediatas.
4. Toda la lógica se resuelve localmente sin llamadas de red a un backend.

---

## 📁 Estructura de Archivos

```
atlas-magico/
├── .gitignore                  # Archivos ignorados por Git
├── index.html                  # Punto de entrada HTML
├── metadata.json               # Metadatos del proyecto
├── package.json                # Dependencias y scripts de npm
├── package-lock.json           # Lockfile de dependencias
├── tsconfig.json               # Configuración de TypeScript
├── vite.config.ts              # Configuración de Vite + TailwindCSS plugin
│
├── assets/                     # Assets estáticos de nivel raíz
│   └── .aistudio/              # Configuración de AI Studio
│
├── src/                        # Código fuente del frontend
│   ├── main.tsx                # Punto de entrada de React (createRoot + StrictMode)
│   ├── App.tsx                 # Componente principal + estado del juego + router de pantallas
│   ├── index.css               # Importación de TailwindCSS
│   ├── types.ts                # Definiciones de tipos TypeScript (interfaces)
│   ├── data.ts                 # Datos estáticos (países, leyendas, bestiario, rutas de imágenes)
│   │
│   ├── assets/
│   │   └── images/             # Imágenes generadas por IA
│   │       ├── duck_sailor_mascot_*.jpg       # Mascota "Capitán Patito"
│   │       ├── fantasy_world_map_*.jpg         # Mapa del mundo de fantasía
│   │       ├── tropical_forest_level_*.jpg     # Fondo de nivel "Bosque Tropical"
│   │       ├── amazon_river_level_*.jpg        # Fondo de nivel "Río Amazonas"
│   │       └── mountain_trail_level_*.jpg      # Fondo de nivel "Sendero de Montaña"
│   │
│   └── components/             # Componentes React
│       ├── MapScreen.tsx       # Pantalla del mapa mundial interactivo
│       ├── LevelsScreen.tsx    # Pantalla de selección de niveles por país
│       ├── QuizScreen.tsx      # Pantalla de trivia con timer y opciones
│       ├── MascotMessage.tsx   # Componente de burbuja de diálogo de la mascota
│       └── SettingsModal.tsx   # Modal de ajustes (volumen, sonido, reinicio)
│
└── node_modules/               # Dependencias instaladas
```

---

## 📐 Modelo de Datos

### `QuizQuestion`
Representa una pregunta de trivia.

```typescript
interface QuizQuestion {
  id: string;           // Identificador único (ej: "gemini_brasil_facil_1234567")
  question: string;     // Texto de la pregunta en español
  options: string[];    // Array de exactamente 3 opciones de respuesta
  correctIndex: number; // Índice de la respuesta correcta (0, 1, o 2)
  funFact: string;      // Dato curioso educativo sobre la respuesta correcta
  mascotHint: string;   // Pista del Capitán Patito
}
```

### `LevelData`
Representa un nivel de dificultad dentro de un país.

```typescript
interface LevelData {
  id: string;           // Identificador único (ej: "brasil_1")
  name: string;         // Nombre del nivel ("Fácil", "Medio", "Difícil")
  title: string;        // Título temático (ej: "Bosque Tropical")
  image: string;        // Ruta a la imagen de fondo del nivel
  starsEarned: number;  // Estrellas ganadas (0 a 3)
  status: 'unlocked' | 'locked' | 'completed';
  description: string;  // Descripción narrativa del nivel
}
```

### `CountryData`
Representa un país en el mapa del juego.

```typescript
interface CountryData {
  id: string;           // Identificador (ej: "brasil")
  name: string;         // Nombre mostrado (ej: "BRASIL")
  flag: string;         // Emoji de bandera (ej: "🇧🇷")
  levelRequired: number;// Nivel requerido para desbloquear
  iconType: 'flag' | 'paw' | 'temple' | 'shrine' | 'star';
  coordinates: {        // Posición en el mapa (porcentajes x, y)
    x: number;
    y: number;
  };
  levels: LevelData[];  // Array de 3 niveles (Fácil, Medio, Difícil)
  description: string;  // Descripción narrativa del país
}
```

### `GameState`
Estado global del juego, administrado en `App.tsx`.

```typescript
interface GameState {
  points: number;              // Puntos acumulados del jugador
  stars: number;               // Total de estrellas ganadas
  activeCountryId: string | null;  // País actualmente seleccionado
  activeLevelId: string | null;    // Nivel actualmente en juego
  currentScreen: 'map' | 'levels' | 'quiz';  // Pantalla actual
  unlockedCountries: string[]; // Lista de IDs de países desbloqueados
  volume: number;              // Volumen de música (0 a 100)
  soundEffects: boolean;       // Efectos de sonido activados/desactivados
}
```

### `LegendItem`
Leyenda mitológica asociada a un país.

```typescript
interface LegendItem {
  countryName: string;  // Nombre del país
  flag: string;         // Emoji de bandera
  title: string;        // Título de la leyenda
  story: string;        // Historia completa de la leyenda
  moral: string;        // Enseñanza o moraleja
}
```

### `BeastItem`
Criatura del bestiario mitológico.

```typescript
interface BeastItem {
  name: string;         // Nombre de la criatura
  description: string;  // Descripción detallada
  habitat: string;      // Hábitat natural
  power: string;        // Poder o habilidad especial
  imageSeed: string;    // Semilla para generar imagen
}
```

---

## 🧩 Componentes de la Interfaz

### `App.tsx` — Componente Raíz

El componente principal que actúa como **router de pantallas** y **administrador del estado global**.

**Responsabilidades:**
- Mantiene el `GameState` completo con `useState`.
- Contiene la lista de países (`CountryData[]`) con progreso dinámico.
- Enruta entre las 3 pantallas principales: `MapScreen`, `LevelsScreen`, `QuizScreen`.
- Pre-popula datos de demostración (Brasil con 2 niveles completados, 820 puntos, 4 estrellas).
- Maneja la lógica de selección de país, selección de nivel, finalización de quiz y reinicio de progreso.
- Calcula estrellas totales recorriendo todos los niveles de todos los países.

**Funciones principales:**
| Función | Descripción |
|---|---|
| `handleSelectCountry(countryId)` | Valida desbloqueo y navega a pantalla de niveles |
| `handleSelectLevel(levelId, levelIndex)` | Navega a la pantalla de quiz |
| `handleQuizComplete(starsEarned, pointsEarned)` | Actualiza progreso, recalcula estrellas, muestra alerta |
| `handleResetProgress()` | Reinicia todo el progreso a valores iniciales |

---

### `MapScreen.tsx` — Mapa del Mundo

Pantalla principal que muestra un **mapa de fantasía circular** con marcadores interactivos de países.

**Elementos visuales:**
- **Portal circular** con imagen de mapa de fantasía como fondo.
- **Líneas punteadas SVG** conectando los países en secuencia.
- **Marcadores de países** con banderas, nombres, indicadores de nivel y estado de bloqueo.
- **Tarjeta central "ATLAS MÁGICO"** con icono de velero.
- **Barra inferior de madera** con botones de Ajustes, Inicio y Salir.
- **Esquinas decorativas** con remaches metálicos.
- **Badge de navegación** "Modo Exploración" con icono de brújula animado.

**Props:**
```typescript
interface MapScreenProps {
  gameState: GameState;
  onSelectCountry: (countryId: string) => void;
  onOpenSettings: () => void;
  onNavigate: (screen: 'map' | 'levels' | 'quiz') => void;
  onQuit: () => void;
}
```

---

### `LevelsScreen.tsx` — Selector de Niveles

Pantalla de selección de nivel para un país específico, mostrando 3 tarjetas de nivel.

**Elementos visuales:**
- **Encabezado** con botón de retroceso, título del país y avatar de la mascota.
- **Badge central** con nombre del país y subtítulo "Elige un nivel".
- **3 tarjetas de nivel** en grid (Fácil/verde, Medio/azul, Difícil/rojo):
  - Imagen de fondo del nivel.
  - Badge de número de nivel.
  - Indicador de estrellas.
  - Título y descripción.
- **Barra inferior de estado** con estadísticas (Estrellas, Puntos, Nivel) y botón "Continuar".

**Props:**
```typescript
interface LevelsScreenProps {
  country: CountryData;
  gameState: GameState;
  onSelectLevel: (levelId: string, levelIndex: number) => void;
  onBack: () => void;
}
```

---

### `QuizScreen.tsx` — Pantalla de Trivia

El componente más complejo. Maneja la carga, presentación y evaluación de preguntas de trivia.

**Elementos visuales:**
- **Tarjeta de pergamino** central con la pregunta y opciones.
- **Temporizador circular SVG** de 20 segundos (cambia a rojo bajo 5s, pulsa al agotarse).
- **Sticker de mascota** decorativo en la esquina.
- **Pill de país y nivel** indicando contexto.
- **3 botones de opciones** con gradientes estilizados:
  - Marrón/dorado por defecto.
  - Verde cuando es la respuesta correcta (revelada).
  - Rojo si fue seleccionada incorrectamente.
  - Gris/opaco para las no seleccionadas tras responder.
- **Panel de explicación** (post-respuesta):
  - Mensaje de éxito o ánimo.
  - `funFact` educativo.
  - `mascotHint` del Capitán Patito con su avatar.
- **Botón "Continuar"** para proceder.

**Lógica interna:**
- `fetchQuestion()`: Hace `POST /api/quiz` para obtener una pregunta.
- Temporizador con `setInterval`, se detiene al responder o expirar.
- `handleAnswerSelect(optionIdx)`: Evalúa respuesta, reproduce sonidos con Web Audio API.
- `handleContinue()`: Calcula estrellas basadas en velocidad de respuesta.

**Sistema de puntuación:**
| Condición | Estrellas | Puntos |
|---|---|---|
| Correcto + tiempo restante ≥ 12s | ⭐⭐⭐ | 150 |
| Correcto + tiempo restante ≥ 5s | ⭐⭐ | 100 |
| Correcto + tiempo restante < 5s | ⭐ | 50 |
| Incorrecto o tiempo agotado | — | 10 |

**Efectos de Sonido (Web Audio API):**
- **Correcto**: Secuencia melódica ascendente (C5 → E5 → G5).
- **Incorrecto**: Zumbido descendente (150 Hz → 120 Hz).

---

### `MascotMessage.tsx` — Burbuja del Capitán Patito

Componente reutilizable para mostrar mensajes de la mascota guía.

**Elementos:**
- Avatar circular animado (bounce) del pato marinero.
- Burbuja de diálogo con flecha CSS.
- Nombre "Capitán Patito" en verde negrita.
- Remaches decorativos en las esquinas.

```typescript
interface MascotMessageProps {
  message: string;
  className?: string;
}
```

---

### `SettingsModal.tsx` — Modal de Ajustes

Modal overlay con opciones de configuración del juego.

**Funcionalidades:**
- **Control de volumen**: Slider de 0% a 100% con botón de silencio/activar.
- **Toggle de efectos de sonido**: Interruptor visual personalizado.
- **Reinicio de progreso**: Botón con confirmación. Borra todos los puntos, estrellas y progreso.
- **Botón de cerrar** (X).

---

## 🖥️ Lógica de Trivias

El sistema de preguntas de Atlas Mágico funciona completamente del lado del cliente.

### Banco de Preguntas Local (`src/questionBank.ts`)

El juego incluye preguntas predefinidas que se empaquetan en el bundle estático. El banco contiene:
- **8 países** × **3 niveles** × **5 preguntas** = 120 preguntas únicas.
- Cada pregunta incluye `id`, `question`, `options`, `correctIndex`, `funFact` y `mascotHint`.

### Selección de Preguntas (`QuizScreen.tsx`)

1. Al abrir un nivel, se filtra la lista de preguntas disponibles del país y nivel correspondientes.
2. Se excluye el `lastQuestionId` si existe en el estado local.
3. Se selecciona aleatoriamente una pregunta.
4. Se simula una breve carga visual (600ms) para mejorar la inmersión de UX ("El Capitán Patito está pensando").

### Modos de Ejecución

| Modo | Comportamiento |
|---|---|
| **Desarrollo** (`npm run dev`) | Servidor de desarrollo de Vite con HMR |
| **Producción** (`npm run build`) | Genera archivos estáticos en `dist/` listos para desplegar en cualquier host estático. |

---

## 🎮 Mecánicas del Juego

### Progresión

```
Mapa → Seleccionar País → Seleccionar Nivel → Quiz → Resultados → Volver a Niveles
```

### Sistema de Desbloqueo

- Todos los 8 países están **desbloqueados por defecto** en la versión actual (sandbox mode).
- Los 3 niveles de cada país están también accesibles para facilitar las pruebas.
- El campo `levelRequired` en `CountryData` permite implementar desbloqueo progresivo futuro.

### Puntuación y Estrellas

- Cada nivel otorga de **0 a 3 estrellas** dependiendo de la velocidad de respuesta correcta.
- Las estrellas se **acumulan** y no se pierden (se guarda la mejor puntuación).
- Los puntos se suman de forma incremental con cada quiz completado.
- Incluso al fallar, el jugador recibe **10 puntos de consolación** ("premio de aprendizaje").

### Datos de Demostración

El estado inicial viene pre-poblado para demostración:
- **Brasil**: Nivel Fácil (2⭐) y Nivel Medio (2⭐) completados.
- **Puntos**: 820 puntos iniciales.
- **Estrellas totales**: 4.

---

## 📚 Contenido Educativo

### Países Incluidos

| País | Bandera | Temática | Niveles |
|---|---|---|---|
| USA | 🇺🇸 | Cañones, secuoyas, rascacielos | La Gran Manzana · El Gran Cañón · El Gigante Denali |
| Brasil | 🇧🇷 | Selva tropical, samba, ríos | Bosque Tropical · Río Amazonas · Sendero del Corcovado |
| Nigeria | 🇳🇬 | Sabanas, baobabs, arte antiguo | El Vuelo del Águila · El Gran Río Níger · Arboleda Osun-Osogbo |
| India | 🇮🇳 | Templos, tigres, especias | Templo del Amor · Santuario de Bengala · Las Aguas del Ganges |
| China | 🇨🇳 | Gran Muralla, pandas, dragones | El Valle del Bambú · El Dragón de Piedra · El Gran Yangtsé |
| Japón | 🇯🇵 | Tecnología, templos, zorros mágicos | La Cumbre de Fuji · La Fiesta Sakura · La Isla Honshu |
| Rusia | 🇷🇺 | Taiga, palacios, matrioshkas | Cuna de Madera · Taiga de Siberia · El Río de los Zares |
| Australia | 🇦🇺 | Desiertos rojos, coral, fauna única | Tierra Saltarina · El Coral Gigante · El Corazón Uluru |

### Leyendas Mitológicas

Cada país tiene una leyenda narrada con historia y moraleja educativa:

| País | Leyenda | Moraleja |
|---|---|---|
| 🇺🇸 USA | El Pájaro del Trueno (Thunderbird) | Respetar la fuerza de la naturaleza |
| 🇧🇷 Brasil | La Leyenda de Curupira | Protección ecológica de la selva |
| 🇳🇬 Nigeria | La Tortuga Sabia y Sifón | Usar la inteligencia para el bien común |
| 🇮🇳 India | El Puente de los Monos de Rama | Toda contribución, por pequeña, tiene valor |
| 🇨🇳 China | El Gran Viaje de Nian | La unión de la comunidad supera los miedos |
| 🇯🇵 Japón | La Leyenda de los Kitsune | Las apariencias engañan; los guardianes vigilan |
| 🇷🇺 Rusia | El Pájaro de Fuego | La belleza no debe enjaularse por codicia |
| 🇦🇺 Australia | La Serpiente del Arco Iris | El agua como dadora primordial de vida |

### Bestiario Mitológico

Cada país tiene **2 criaturas fantásticas** con descripción, hábitat y poder especial:

| País | Criaturas |
|---|---|
| 🇺🇸 USA | Jackalope · Pie Grande (Sasquatch) |
| 🇧🇷 Brasil | Boitatá · Saci Pererê |
| 🇳🇬 Nigeria | Mami Wata · El Leopardo de Bronce |
| 🇮🇳 India | Airavata · Gajendra |
| 🇨🇳 China | Qilin (Unicornio Chino) · Long (Dragón Celestial) |
| 🇯🇵 Japón | Kappa · Kirin |
| 🇷🇺 Rusia | Zmey Gorynych · La Rana de los Pantanos |
| 🇦🇺 Australia | Yowie · Bunyip |

---

## ⚙️ Configuración e Instalación

### Requisitos Previos

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/darman-prog/atlas-magico.git
cd atlas-magico

# 2. Instalar dependencias
npm install

# 3. Iniciar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|---|---|---|
| `dev` | `npm run dev` | Inicia el servidor de desarrollo de Vite con HMR |
| `build` | `npm run build` | Compila TypeScript y empaqueta el frontend con Vite en `dist/` |
| `start` | `npm start` | Previsualiza el build de producción localmente |
| `clean` | `npm run clean` | Elimina el directorio `dist/` |
| `lint` | `npm run lint` | Chequeo de tipos TypeScript sin emitir archivos |

---

## 🔐 Variables de Entorno

| Variable | Requerida | Descripción | Valor por defecto |
|---|---|---|---|
| `NODE_ENV` | No | Modo de ejecución (`development` / `production`) | `development` |
| `DISABLE_HMR` | No | Desactiva Hot Module Replacement en Vite | `false` |

> **Nota**: La aplicación funciona completamente con el banco de preguntas local. No se requiere conexión a internet para jugar.

---

## 🎨 Diseño Visual y UX

### Paleta de Colores

| Color | Hex | Uso |
|---|---|---|
| Marrón madera oscuro | `#7d562d` | Bordes, barras, botones principales |
| Marrón oscuro profundo | `#2c1600` | Sombras, bordes inferiores |
| Pergamino claro | `#fff8ef` | Fondos de tarjetas |
| Pergamino dorado | `#fdf3db` | Fondos de mensajes |
| Pergamino medio | `#e3d9c3` | Fondo del mapa |
| Verde esmeralda | `#0f5238` | Botones primarios, acentos de éxito |
| Verde esmeralda hover | `#2d6a4f` | Estado hover de botones verdes |
| Azul marino | `#31486b` | Nivel medio, acentos azules |
| Rojo alerta | `#ba1a1a` | Nivel difícil, errores, alerta |
| Dorado estrella | `#ffca98` | Estrellas, iconos destacados |
| Verde menta suave | `#a8e7c5` | Bordes nivel fácil, acentos sutiles |
| Azul suave | `#c7dbff` | Bordes nivel medio |
| Rosa suave | `#ffdad6` | Bordes nivel difícil, errores suaves |
| Gris remache | `#707973` | Elementos decorativos metálicos |
| Texto oscuro | `#201b0d` | Texto principal |
| Fondo exterior | `#353021` | Fondo de la aplicación |

### Estilo General

- **Estética de mapa antiguo / pergamino** con textura de puntos radiales.
- **Elementos de madera** con bordes gruesos y sombras internas.
- **Remaches metálicos decorativos** en esquinas de tarjetas y modales.
- **Tipografía sans-serif** con tracking amplio para headings y monospace para datos.
- **Animaciones sutiles**: bounce en mascota, pulse en temporizador, spin en brújula.
- **Responsivo**: Grid de 1 columna en móvil, 3 columnas en desktop.

---

## 🔀 Flujo de Pantallas

```
┌─────────────────┐
│   MapScreen     │
│ (Mapa Mundial)  │
│                 │
│  [País] ────────┼──→ ┌──────────────────┐
│  [Ajustes] ──┐  │    │  LevelsScreen    │
│  [Salir]     │  │    │ (Niveles 1-3)    │
└──────────────┼──┘    │                  │
               │       │  [Nivel] ────────┼──→ ┌──────────────┐
               │       │  [Volver] ←──────┼────│  QuizScreen  │
               │       │  [Continuar] ────┼──→ │  (Trivia)    │
               ▼       └──────────────────┘    │              │
        ┌──────────────┐                       │ → Responder  │
        │SettingsModal │                       │ → Explicación│
        │  (Overlay)   │                       │ → Continuar ─┼──→ LevelsScreen
        │  [Volumen]   │                       └──────────────┘
        │  [Sonido]    │
        │  [Reiniciar] │
        │  [Cerrar]    │
        └──────────────┘
```

---

## 🖼️ Assets e Imágenes

Todas las imágenes se encuentran en `src/assets/images/` y fueron **generadas por inteligencia artificial**:

| Archivo | Descripción | Tamaño |
|---|---|---|
| `duck_sailor_mascot_*.jpg` | Avatar del Capitán Patito (pato marinero) | ~540 KB |
| `fantasy_world_map_*.jpg` | Mapa de fantasía del mundo (fondo del portal) | ~1.3 MB |
| `tropical_forest_level_*.jpg` | Escena de bosque tropical (niveles fáciles) | ~1.3 MB |
| `amazon_river_level_*.jpg` | Escena de río amazónico (niveles medios) | ~1.3 MB |
| `mountain_trail_level_*.jpg` | Escena de sendero montañoso (niveles difíciles) | ~1.0 MB |

Las imágenes se referencian mediante constantes exportadas en `data.ts`:
- `MASCOT_IMAGE`
- `MAP_IMAGE`
- `FOREST_IMAGE`
- `RIVER_IMAGE`
- `MOUNTAIN_IMAGE`

---

## 🚀 Posibles Mejoras Futuras

### Funcionalidad
- [ ] **Persistencia de progreso** en `localStorage` o base de datos.
- [ ] **Sistema de logros/insignias** por completar regiones o temáticas.
- [ ] **Múltiples preguntas por nivel** (quiz de 5-10 preguntas en vez de 1).
- [ ] **Modo multijugador** o tablero de clasificación.
- [ ] **Nivel secreto** (Nivel 4) por país con dificultad extrema.
- [ ] **Generación de imágenes de criaturas** del bestiario con IA.
- [ ] **Sección de leyendas** como pantalla navegable con narración.
- [ ] **Música de fondo** con Web Audio API o archivos de audio.
- [ ] **Modo oscuro** alternativo.
- [ ] **Internacionalización** (i18n) — soporte para inglés y portugués.

### Técnicas
- [ ] **Testing** con Vitest + React Testing Library.
- [ ] **Desbloqueo progresivo real** basado en `levelRequired`.
- [ ] **Animaciones de transición** entre pantallas con Framer Motion.
- [ ] **PWA** (Progressive Web App) con service worker para uso offline.
- [ ] **Rate limiting** en el endpoint `/api/quiz`.
- [ ] **Analytics** de uso y métricas de aprendizaje.

---

## 📄 Licencia

Este proyecto fue creado con fines educativos.

---

> *"¡Al agua patos! El mundo está lleno de misterios esperando ser descubiertos."*
> — **Capitán Patito** 🦆⛵
