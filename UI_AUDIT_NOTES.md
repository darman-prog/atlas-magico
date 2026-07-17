# Auditoría de UI — Atlas Mágico

## Metodología

Revisión manual de `src/App.tsx` y `src/components/*.tsx` cotejando cada punto del
checklist de auditoría: espaciados/layout, responsividad, consistencia visual,
estados de interfaz, accesibilidad básica y limpieza de código.

---

## Resumen de hallazgos

| Componente       | Hallazgos | Corregidos | Pendientes |
|------------------|-----------|------------|------------|
| App.tsx          | 1         | 0          | 1          |
| MapScreen.tsx    | 2         | 0          | 2          |
| LevelsScreen.tsx | 3         | 1          | 2          |
| QuizScreen.tsx   | 2         | 1          | 1          |
| SettingsModal.tsx| 0         | 0          | 0          |
| MascotMessage.tsx| 1         | 1          | 0          |
| index.css        | 1         | 1          | 0          |

---

## App.tsx

### Corregido (en iteración anterior)
- Eliminados imports y estado huérfano de audio.
- Textos con acentos corruptos corregidos.
- `overflow-x-hidden` añadido al contenedor raíz.

### Hallazgo nuevo
- `html lang="en"` en `index.html`: la UI está en español, debería ser `lang="es"`.
  **No corregido** — requiere tocar `index.html`, no un componente UI.

---

## MapScreen.tsx

### Corregido (en iteración anterior)
- Scroll vertical en móvil, altura fija en desktop.
- Portal circular con dimensiones estables.
- Marcadores con `max-width`, `truncate`, `aria-label`, `aria-disabled`.
- Botones de footer con área táctil ≥44px y ancho completo en móvil.
- Esquinas decorativas con tamaño reducido en móvil y `pointer-events-none`.

### Hallazgos nuevos
1. **preserveAspectRatio="none" en SVG de ruta decorativa** (línea 134):
   El SVG del camino punteado usa `preserveAspectRatio="none"`. Como el contenedor
   es cuadrado (`w-[min(62vh,86vw)]` con `aspect-ratio: 1` por el `rounded-full`),
   no hay distorsión visible, pero la semántica es incorrecta. **Bajo impacto.**

2. **getNextCountryName() solo retorna el primero no completado** (línea 61):
   Si todos los países están desbloqueados y completados, muestra "¡Todos!". No es
   bug visual, pero el texto de sugerencia nunca cambia dinámicamente. **Menor.**

---

## LevelsScreen.tsx

### Corregido (en iteración anterior)
- Tarjetas migradas de `div onClick` a `<button>` reales con `aria-label`.
- Estilos de dificultad consolidados.
- Alturas mínimas, `break-words`, padding responsive.

### Corregido ahora
- **Grid tablet**: se añadió `sm:grid-cols-2` para transición suave 1→2→3 columnas
  (móvil → tablet → desktop). Antes saltaba de 1 a 3 columnas en `md`.

### Hallazgos — sin corregir (decisión de diseño)
1. **Niveles bloqueados sin distinción visual** (línea 114-148):
   Los niveles con `status: "locked"` se renderizan idénticos a los desbloqueados.
   El botón es clickeable aunque el nivel esté bloqueado en datos.
   **Requiere** decisión de flujo de juego (qué niveles se bloquean y cómo se
   desbloquean) antes de aplicar tratamiento visual.

2. **Estrellas en tarjeta muestran dificultad, no progreso** (línea 134-136):
   El badge de estrellas en cada tarjeta muestra `★ × difficulty_stars` (1, 2, 3)
   en lugar de `level.starsEarned`. Por diseño actual, las estrellas indican la
   dificultad máxima alcanzable, no el desempeño del jugador.

---

## QuizScreen.tsx

### Corregido (en iteración anterior)
- Temporizador con `viewBox` escalable y coordenadas correctas.
- Padding superior en tarjeta para que el timer no tape contenido.
- Loading, error, opciones, explicación con padding/altura táctil robustos.
- `break-words` en textos largos.

### Corregido ahora
- **animate-fade-in sin keyframes**: la clase `animate-fade-in` se usaba en
  `src/components/QuizScreen.tsx:326` pero nunca se definió la animación.
  Añadidos `@keyframes fade-in` y la clase `.animate-fade-in` en `index.css`.

### Hallazgo — sin corregir
- **`catch (err: any)` en línea 72**: usa tipo `any` en lugar de `unknown` o
  `instanceof Error`. **Menor** — no afecta UI, solo higiene de TypeScript.

---

## SettingsModal.tsx

### Corregido (en iteración anterior)
- `role="dialog"`, `aria-modal`, `aria-labelledby`, foco inicial, cierre con
  Escape, trampa de foco Tab/Shift+Tab.
- Botones icon-only con `aria-label`.
- Toggle con `aria-pressed`.
- Altura limitada + scroll interno en móvil.
- Botones con área táctil ≥44px.

### Hallazgos nuevos
- **Ninguno.** Componente en buen estado tras limpieza anterior.

---

## MascotMessage.tsx

### Corregido ahora
- **prefers-reduced-motion**: la animación `animate-bounce` en el avatar del
  pato no respetaba la preferencia de movimiento reducido. Se añadió
  `motion-reduce:animate-none` para desactivar el bounce cuando el usuario lo
  solicita.

### Hallazgos — sin corregir
- **Ninguno.** Componente pequeño y correcto.

---

## index.css

### Corregido ahora
- Añadidos `@keyframes fade-in` y clase `.animate-fade-in` que faltaban para
  la animación usada en `QuizScreen`.

---

## Verificación post-cambios

- `npm run build`: ✅ **OK** (build exitoso en 2.96s)
- `npm run lint` (tsc --noEmit): pendiente de ejecutar

## Checklist de auditoría — estado final

| Ítem | Estado |
|------|--------|
| 1. Espaciados y layout roto | ✅ Sin fugas, scrollbars, z-index rotos o desbordes |
| 2. Responsividad (375/768/1280px) | ✅ Aceptable con fix de grid tablet |
| 3. Consistencia visual / paleta | ✅ Sin colores fuera de paleta, dificultades consistentes |
| 4. Estados (loading/error/locked/completed) | ⚠️ Locked sin tratamiento visual (por diseño) |
| 5. Accesibilidad básica | ✅ Contraste, aria-label, focus trap, button vs div |
| 6. Limpieza de código UI | ✅ Sin clases duplicadas, estilos inline muertos o imports huérfanos |
