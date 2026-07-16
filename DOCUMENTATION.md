# 🗺️ Atlas Mágico — El Cartógrafo de Leyendas

> Aplicación web educativa en React y TypeScript que combina geografía, trivias, leyendas mitológicas y un bestiario fantástico en una experiencia de exploración estilo atlas.

---

## 📋 Tabla de Contenidos

1. [Descripción General](#-descripción-general)
2. [Stack Tecnológico Actual](#-stack-tecnológico-actual)
3. [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
4. [Estructura de Archivos](#-estructura-de-archivos)
5. [Modelo de Datos](#-modelo-de-datos)
6. [Componentes Principales](#-componentes-principales)
7. [Mecánicas del Juego](#-mecánicas-del-juego)
8. [Contenido Educativo](#-contenido-educativo)
9. [Configuración e Instalación](#-configuración-e-instalación)
10. [Scripts Disponibles](#-scripts-disponibles)
11. [Diseño Visual y UX](#-diseño-visual-y-ux)
12. [Flujo de Pantallas](#-flujo-de-pantallas)
13. [Assets e Imágenes](#-assets-e-imágenes)
14. [Estado Actual y Mejoras Futuras](#-estado-actual-y-mejoras-futuras)

---

## 🌍 Descripción General

Atlas Mágico es una SPA interactiva pensada para aprender jugando. El jugador explora un mapa de fantasía, accede a países, elige niveles de dificultad y responde preguntas de trivia. Cada respuesta ofrece retroalimentación educativa, pistas de la mascota guía y recompensas en forma de puntos y estrellas.

### Características actuales

- Mapa interactivo circular con marcadores de países.
- Pantalla de niveles por país con 3 retos: Fácil, Medio y Difícil.
- Quiz de trivia con temporizador de 20 segundos.
- Sistema de puntuación basado en acierto y velocidad.
- Mascota guía: Capitán Patito.
- Leyendas y bestiario por país.
- Modal de ajustes con volumen, efectos de sonido y reinicio de progreso.
- Todo el contenido está cargado localmente, sin backend activo en esta versión.

---

## 🛠️ Stack Tecnológico Actual

| Tecnología | Versión | Propósito |
|---|---|---|
| React | ^19.0.1 | Renderizado de la interfaz de usuario |
| TypeScript | ~5.8.2 | Tipado estático del proyecto |
| Vite | ^6.2.3 | Servidor de desarrollo y build |
| Tailwind CSS | ^4.1.14 | Estilos utilitarios |
| Lucide React | ^0.546.0 | Iconos SVG |
| Motion | ^12.23.24 | Animaciones de interfaz |

### Nota importante

La implementación actual es frontend-only. No existe un servidor backend ni un endpoint de API en funcionamiento; las preguntas y los datos del juego se cargan desde archivos locales del proyecto.

---

## 🏗️ Arquitectura del Proyecto

El proyecto sigue un patrón de SPA sencilla:

- App.tsx actúa como coordinador principal del estado del juego.
- Los datos estáticos viven en data.ts y questionBank.ts.
- Cada pantalla es un componente independiente.
- La navegación entre pantallas se maneja con estado local en React.

### Flujo general

1. El usuario entra al mapa principal.
2. Selecciona un país desbloqueado.
3. Elige un nivel.
4. Responde una pregunta del quiz.
5. Recibe puntos y estrellas según su desempeño.
6. Regresa a la pantalla de niveles para continuar.

---

## 📁 Estructura de Archivos

```text
atlas-magico/
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── data.ts
│   ├── main.tsx
│   ├── questionBank.ts
│   ├── types.ts
│   ├── index.css
│   ├── assets/
│   │   └── images/
│   └── components/
│       ├── LevelsScreen.tsx
│       ├── MapScreen.tsx
│       ├── MascotMessage.tsx
│       ├── QuizScreen.tsx
│       └── SettingsModal.tsx
└── DOCUMENTATION.md
```

---

## 📐 Modelo de Datos

Los tipos principales se definen en src/types.ts.

### QuizQuestion

```ts
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  funFact: string;
  mascotHint: string;
}
```

### LevelData

```ts
interface LevelData {
  id: string;
  name: string;
  title: string;
  image: string;
  starsEarned: number;
  status: 'unlocked' | 'locked' | 'completed';
  description: string;
}
```

### CountryData

```ts
interface CountryData {
  id: string;
  name: string;
  flag: string;
  levelRequired: number;
  iconType: 'flag' | 'paw' | 'temple' | 'shrine' | 'star';
  coordinates: { x: number; y: number };
  levels: LevelData[];
  description: string;
}
```

### GameState

```ts
interface GameState {
  points: number;
  stars: number;
  activeCountryId: string | null;
  activeLevelId: string | null;
  currentScreen: 'map' | 'levels' | 'quiz';
  unlockedCountries: string[];
  volume: number;
  soundEffects: boolean;
}
```

---

## 🧩 Componentes Principales

### App.tsx

Componente raíz del juego. Gestiona:

- El estado global del progreso.
- La selección del país y del nivel.
- El cambio entre pantallas.
- El reinicio del progreso.
- El cálculo total de estrellas y puntos.

### MapScreen.tsx

Pantalla principal del mapa. Incluye:

- Portal circular con imagen de fondo.
- Marcadores de países interactivos.
- Ruta punteada entre ubicaciones.
- Botones de Ajustes, Inicio y Salir.
- Indicador visual de modo exploración.

### LevelsScreen.tsx

Pantalla de selección de niveles. Muestra:

- Encabezado del país actual.
- Tres tarjetas de nivel: Fácil, Medio y Difícil.
- Imagen de fondo, título y descripción por nivel.
- Resumen de estrellas, puntos y progreso.

### QuizScreen.tsx

Pantalla de trivia. Maneja:

- Carga aleatoria de preguntas desde el banco local.
- Temporizador de 20 segundos.
- Validación de respuestas.
- Retroalimentación visual y explicativa.
- Recompensa en puntos y estrellas.
- Efectos de sonido mediante Web Audio API.

### SettingsModal.tsx

Modal de ajustes con:

- Control de volumen.
- Activación/desactivación de efectos de sonido.
- Reinicio del progreso con confirmación.

### MascotMessage.tsx

Componente reutilizable para mostrar mensajes del Capitán Patito con avatar, burbuja y estilo temático.

---

## 🎮 Mecánicas del Juego

### Progresión

El flujo del juego es:

Mapa → País → Nivel → Quiz → Recompensa → Vuelta a niveles

### Desbloqueo

En la versión actual, todos los países están desbloqueados por defecto. La lógica de desbloqueo existe a nivel de datos mediante `unlockedCountries` y `levelRequired`, pero la experiencia actual usa un modo de prueba/sandbox.

### Puntuación

- Respuesta correcta con tiempo alto: 3 estrellas y 150 puntos.
- Respuesta correcta con tiempo moderado: 2 estrellas y 100 puntos.
- Respuesta correcta con tiempo bajo: 1 estrella y 50 puntos.
- Respuesta incorrecta o tiempo agotado: 0 estrellas y 10 puntos.

### Estado inicial de demostración

El juego empieza con datos de ejemplo pre-cargados:

- Brasil con dos niveles completados.
- 820 puntos iniciales.
- 4 estrellas acumuladas.

---

## 📚 Contenido Educativo

El proyecto incluye contenido temático por país en los archivos de datos:

- USA
- Brasil
- Nigeria
- India
- China
- Japón
- Rusia
- Australia

Cada país incluye:

- Descripción narrativa del territorio.
- Tres niveles temáticos.
- Leyendas mitológicas asociadas.
- Bestiario fantástico con criatura, hábitat y poder.

El banco de preguntas se organiza por país y nivel, y se usa localmente desde src/questionBank.ts.

---

## ⚙️ Configuración e Instalación

### Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

### Instalación

```bash
git clone <repo-url>
cd atlas-magico
npm install
npm run dev
```

La aplicación queda disponible en el puerto 3000 de Vite.

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|---|---|---|
| dev | npm run dev | Inicia el servidor de desarrollo |
| build | npm run build | Genera la build de producción |
| start | npm start | Previsualiza el resultado del build |
| clean | npm run clean | Elimina la carpeta dist |
| lint | npm run lint | Ejecuta la comprobación de tipos con TypeScript |

---

## 🎨 Diseño Visual y UX

El proyecto usa una estética de atlas antiguo, con elementos que evocan pergamino, madera, remaches metálicos y una paleta cálida.

### Características visuales

- Fondo de pergamino y textura radial.
- Botones con estilo de madera y borde oscuro.
- Tarjetas con remaches decorativos.
- Animaciones suaves en la mascota y el temporizador.
- Diseño adaptativo para móvil y escritorio.

### Paleta principal

- Marrón madera: #7d562d
- Verde esmeralda: #0f5238
- Azul marino: #31486b
- Rojo alerta: #ba1a1a
- Dorado estrella: #ffca98
- Pergamino claro: #fff8ef

---

## 🔀 Flujo de Pantallas

```text
MapScreen
  └─ LevelsScreen
       └─ QuizScreen
            └─ regreso a LevelsScreen
```

Además, desde el mapa se puede abrir el modal de ajustes, y desde la pantalla de niveles se puede volver al mapa o iniciar un quiz.

---

## 🖼️ Assets e Imágenes

Las imágenes de la experiencia se guardan en src/assets/images y se importan desde src/data.ts.

Archivos principales:

- duck_sailor_mascot_*.jpg
- fantasy_world_map_*.jpg
- tropical_forest_level_*.jpg
- amazon_river_level_*.jpg
- mountain_trail_level_*.jpg

Estas imágenes se usan para la mascota, el mapa, y los fondos de los niveles.

---
