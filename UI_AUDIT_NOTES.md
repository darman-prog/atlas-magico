# UI Audit Notes

## Alcance

Revisión de `src/App.tsx` y `src/components/*.tsx` enfocada en layout, responsividad, consistencia visual, estados básicos, accesibilidad y limpieza de UI. No se modificó la lógica de puntuación, temporizador, selección de preguntas ni navegación principal.

## Hipótesis De Layout

Varias pantallas usaban `h-[92vh]` junto con `overflow-hidden`. En móvil o con textos largos, esa combinación podía cortar contenido, ocultar barras inferiores o dejar explicaciones del quiz fuera del área visible. Se cambió a `min-h-[92svh]` con scroll vertical en pantallas pequeñas y altura fija solo en desktop.

## App.tsx

Corregido:
- Se eliminaron imports, estado y efecto sin uso relacionados con audio/background music.
- Se corrigieron textos visibles con acentos corruptos en alertas y confirmaciones.
- Se agregó `overflow-x-hidden` al contenedor raíz para evitar desplazamiento horizontal por elementos decorativos.
- Se limpió una aserción `as any` heredada en el estado de nivel.

Pendiente:
- La app inicia con todos los países desbloqueados en `gameState.unlockedCountries`; por eso el estado visual de país bloqueado casi no puede observarse sin cambiar datos iniciales o progresión.

## MapScreen

Corregido:
- El contenedor principal ahora permite scroll en móvil y conserva el encuadre fijo en desktop.
- El portal circular usa dimensiones más estables en móvil (`svh`/`vw`) y no debería cortarse en anchos de 375px.
- Los marcadores de país tienen `max-width`, `truncate`, `aria-label` y `aria-disabled` para evitar que nombres largos desborden.
- Los botones del footer tienen área táctil mínima de 44px y ancho completo en móvil.
- Se redujo el tamaño de esquinas decorativas en móvil y se marcó decoración como `pointer-events-none`.
- Se corrigieron textos visibles con acentos corruptos y alt text del mapa.

Pendiente:
- Las estrellas de países siguen siendo decorativas (`☆☆☆`) y no reflejan progreso real por país. Corregirlo requiere conectar `MapScreen` a los datos vivos de `countries`, no solo a `COUNTRIES`.

## LevelsScreen

Corregido:
- Las tarjetas de nivel pasaron de `div onClick` a botones reales con `aria-label` y foco visible.
- Se consolidaron estilos repetidos de las tres dificultades, manteniendo colores: Fácil verde, Medio azul, Difícil rojo.
- Se agregaron alturas mínimas, `break-words`, padding responsive y grid estable `1 columna -> 3 columnas`.
- Los botones de volver y continuar cumplen área táctil mínima.
- Se corrigieron textos/alt con acentos corruptos.

Pendiente:
- El estado `locked` de niveles está definido en datos, pero la pantalla previa forzaba todos los niveles como jugables para pruebas. Aplicar bloqueo real cambiaría el flujo de juego y debe decidirse junto con la regla de desbloqueo.

## QuizScreen

Corregido:
- El aro del temporizador ahora tiene `viewBox` y coordenadas escalables; antes podía renderizarse fuera de escala.
- La tarjeta de pregunta tiene padding superior suficiente para que el temporizador no tape contenido.
- Loading, error, opciones, explicación y botón continuar tienen padding/altura táctil más robustos.
- Textos largos de pregunta, opciones, `funFact` y consejo usan `break-words`.
- Se corrigieron textos visibles con acentos corruptos y alt text de la mascota.
- Se eliminaron imports no usados.

Pendiente:
- El loading mantiene un delay simulado de 600ms. Es visualmente útil, pero si se quiere una UI instantánea al usar banco local, requiere decisión de producto.

## SettingsModal

Corregido:
- Se agregó `role="dialog"`, `aria-modal`, `aria-labelledby`, foco inicial, cierre con Escape y trampa básica de foco con Tab/Shift+Tab.
- Botones icon-only tienen `aria-label`.
- Toggle de efectos tiene `aria-pressed`.
- El modal ahora limita altura y permite scroll interno en pantallas pequeñas.
- Botones cumplen área táctil mínima.
- Se corrigieron textos visibles con acentos corruptos.

Pendiente:
- No se agregó cierre al hacer click fuera del modal para evitar cambiar comportamiento accidentalmente.

## MascotMessage

Corregido:
- Se hizo responsive el layout de avatar + texto.
- El mensaje ahora tiene `break-words` y `min-w-0` para evitar desbordes.
- Se corrigió el alt text de la mascota.

## Verificación

- `npm.cmd run lint`: OK.
- `npm.cmd run build`: OK fuera del sandbox; dentro del sandbox esbuild recibió `Acceso denegado` al leer rutas padre.
- `npm.cmd run dev -- --host 127.0.0.1`: OK fuera del sandbox, servido en `http://127.0.0.1:5173/`.
