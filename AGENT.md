# Texas Trace Agent Guide

## 1. Current Product Direction

`Texas Trace` is a PC-first presentation-style map experience.

It must feel like advancing through a presentation deck: the user clicks `Next` or `Prev`, the current journey point changes, the map moves, the current marker becomes prominent, and the previous-to-current route trace is highlighted or animated.

The map is the stage. Text and photos support the current step, but they must not overwhelm the map.

## 2. Required UX Principles

- Use `Next` / `Prev` based journey navigation.
- Manage UI around `currentStepIndex`, `currentStepId`, and `previousStepId`.
- Treat each journey point like one presentation slide.
- Keep information minimal.
- Show only the current point's essential title, short text, role, route label, and photo preview.
- Use the map as the dominant visual surface.
- Use route trace animation or emphasis to communicate movement.
- Optimize for PC presentation.
- Prioritize stability and performance.

## 3. Explicitly Forbidden UX Regressions

Do not return to:

- Scroll-based journey UX
- Sticky map plus long journey card list
- `IntersectionObserver` as the primary active step mechanism
- Long visible lists of cards
- Blog-style long reading sections
- Dashboard-style place exploration
- Screens filled with dense information
- Full gallery as the primary page structure

If detailed information is needed later, add it behind an intentional control such as `More`, not as always-visible page density.

## 4. Development Principles

- The user is the content author. The AI agent is responsible for implementation.
- Keep data easy for the user to edit.
- Do not mix place, journey, route, role, and photo data into one structure.
- `routeLinks` is separate from `journeySteps`.
- Map connection lines must be drawn only from `routeLinks`.
- Never auto-generate map lines from `journeySteps` order.
- The same `locationId` may be reused by multiple `stepId` values.
- Do not introduce unnecessary frameworks.
- Start with HTML, CSS, and Vanilla JavaScript.
- The project must work directly on GitHub Pages.
- Mobile optimization is not a priority for the initial scope.

## 5. State Management Principles

Core state:

```js
{
  currentStepIndex,
  currentStepId,
  previousStepId
}
```

All controls should update this state through a single navigation path:

- `next()`
- `prev()`
- `goToStep(stepId)`

On state change:

- Resolve the current step from `journeySteps`.
- Resolve the current location from `locations`.
- Resolve photos from `mediaGroups`.
- Find the route between `previousStepId` and `currentStepId` from `routeLinks`.
- Update map, markers, route animation, text, photos, and progress.

Do not use scroll position to change the current step.

## 6. Route Principles

Hard rules:

- Do not create route lines from journey order.
- Do not ignore `routeLinks`.
- Do not hardcode route endpoints in UI code.
- Do not create fake fallback route lines.

Required behavior:

- Render routes from `routeLinks`.
- On step change, find a matching routeLink between previous and current step.
- If a matching routeLink exists, highlight or animate it.
- If no matching routeLink exists, move the map and skip route animation.
- Preserve Houston, Austin local hub, COTA, and return flight route meanings.

## 7. Coordinate Principles

- Coordinates are important to the experience.
- Use `data/texasTraceData.js` fixed `lat` / `lng` values.
- Do not use arbitrary guessed coordinates.
- Do not call runtime geocoding APIs.
- Do not replace missing or uncertain coordinates with Austin city center.
- Keep `coordinateStatus` visible in data and optionally show subtle UI notes for review-needed points.

## 8. Image Principles

- Step photo preview should use representative images, usually 1-3 photos.
- Important places may show up to 3-5 preview photos.
- Use `thumb` first for previews.
- If `thumb` is missing or fails, fall back to `full`.
- In fullscreen/lightbox view, use `full`.
- Do not preload all `full` images.
- Do not build a large gallery-first experience for the main UI.
- Missing images must not break the page.
- Video is excluded from the initial scope.

## 9. Performance Principles

- Treat performance as a top priority.
- High-resolution photos are the biggest bottleneck.
- Keep initial loading light.
- Load one map tile layer by default.
- Avoid heavy map layer recreation during step changes.
- Use lightweight line highlight or dash animation.
- Avoid scroll listeners for app state.
- Do not use `IntersectionObserver` for step progression in the new UX.
- Do not preload full images except the one actively opened by the user.

## 10. Design Principles

- Minimal
- Cinematic
- Presentation-first
- Map as stage
- Dark background
- Warm trace line
- Large typography
- Few but strong elements
- Quiet motion

The screen should not feel busy. Every visible element should help the presenter explain the current journey point.

## 11. Change Management

- Follow `TASKS.md`.
- First reset the existing scroll UI concept.
- Preserve `data/texasTraceData.js` unless a data extension is explicitly requested.
- If presentation fields are added later, add them without deleting existing fields.
- Keep changes small enough to verify in the browser after each phase.
- Reuse useful code only when it fits the new Next/Prev stage model.
- Delete or replace code that exists only to support the old scroll/sticky/card-list experience.
