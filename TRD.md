# Texas Trace TRD

## 1. Technical Overview

`Texas Trace` is a GitHub Pages static web project using HTML, CSS, Vanilla JavaScript, Leaflet, and `data/texasTraceData.js`.

The technical direction is now a presentation-style stage controlled by explicit step navigation. Scroll-driven activation, sticky map layouts, and long journey card lists are removed from the primary architecture.

## 2. Technology Stack

- HTML
- CSS
- Vanilla JavaScript
- Leaflet
- GitHub Pages
- Static data file: `data/texasTraceData.js`

No framework, bundler, server, runtime geocoding, or database should be introduced in the initial implementation.

## 3. New Application Architecture

Primary state:

```js
appState = {
  currentStepIndex: 0,
  currentStepId: 1,
  previousStepId: null
};
```

Primary interaction model:

```text
Page load
↓
Render step 1
↓
User clicks Next
↓
Update currentStep
↓
Find matching routeLink from previous step to current step
↓
Move map to current location
↓
Highlight current marker
↓
Animate or emphasize current routeLink
↓
Update title, short text, route label, photo previews, progress
```

Prev follows the same model in reverse.

## 4. Recommended File Structure

```text
texas-yoon/
  PRD.md
  TRD.md
  TASKS.md
  AGENT.md
  index.html
  assets/
    css/
      styles.css
    js/
      main.js
      dataAdapter.js                  # recommended
      stepController.js               # recommended
      mapController.js
      routeAnimationController.js     # recommended
      photoController.js              # recommended
  data/
    texasTraceData.js
```

If too many files slow down early implementation, `main.js` may coordinate more responsibilities at first. However, the conceptual roles must remain separated.

## 5. Controller Responsibilities

### Data Adapter

Responsibilities:

- Read `window.TEXAS_TRACE_DATA`.
- Provide step lookup by `stepId`.
- Resolve `step -> location`.
- Resolve `step -> mediaGroup`.
- Resolve current route by `(previousStepId, currentStepId)`.
- Never create route lines from `journeySteps` order.

Required route lookup behavior:

```js
findRouteLink(previousStepId, currentStepId) {
  return routeLinks.find(link =>
    (link.from === previousStepId && link.to === currentStepId) ||
    (link.from === currentStepId && link.to === previousStepId)
  );
}
```

If no link exists, return `null`; do not synthesize a route.

### Step Controller

Responsibilities:

- Hold `currentStepIndex`, `currentStepId`, and `previousStepId`.
- Handle `next()`, `prev()`, and `goToStep(stepId)`.
- Clamp navigation between first and last step.
- Emit state changes to map, route animation, photo preview, and UI renderers.
- Optionally support keyboard arrow navigation later.

### Map Controller

Responsibilities:

- Initialize Leaflet.
- Load one default tile layer, preferably CARTO Dark.
- Render markers from `journeySteps` resolved through `locations`.
- Support marker states:
  - current
  - visited
  - unvisited
- Move map to current step location.
- Avoid runtime geocoding.
- Avoid recreating all markers on every step change if possible.

### Route Animation Controller

Responsibilities:

- Render route graph from `routeLinks`.
- Keep all route lines subtle by default.
- Highlight the current movement route when a matching `routeLink` exists.
- Apply a simple trace animation such as dash offset, glow, or stroke reveal.
- Style route types:
  - `flight`: dashed or arc-like visual if feasible
  - `local`: restrained solid line
  - `long-drive`: stronger warm line
  - `return-stop`, `arrival-drive`, `departure-drive`: warm directional trace
- If no current route exists, skip animation without error.

### Photo Controller

Responsibilities:

- Render step-level photo previews from `mediaGroups`.
- Use `thumb` path first:

```text
{basePath}/thumb/{file}
```

- Fallback to `full` path on thumb failure:

```text
{basePath}/full/{file}
```

- Open fullscreen/lightbox with only the clicked `full` image.
- Do not preload all `full` images.
- Show a quiet empty state when no images exist.

## 6. Stage Layout

The page should be a single application-like stage:

```text
body
  app-stage
    topbar
      title
      step counter
    map-stage
      Leaflet map
      route layer
      marker layer
    point-panel
      role badge
      title
      short text
      route label
      photo preview
    controls
      prev button
      progress dots/timeline
      next button
    lightbox
```

The layout should avoid:

- Long vertical scroll as the primary interaction.
- Sticky map layout.
- A long visible list of journey cards.
- Dense dashboard panels.
- Full gallery as the main page experience.

## 7. Data Model Usage

Source of truth remains:

```js
window.TEXAS_TRACE_DATA = {
  meta: {},
  locations: {},
  journeySteps: [],
  routeLinks: [],
  mediaGroups: {}
};
```

Usage:

- `locations`: fixed coordinates and place identity.
- `journeySteps`: ordered presentation steps.
- `routeLinks`: only route line source.
- `mediaGroups`: photo previews and lightbox source.
- `role`: badge, marker state color, and route styling hints.
- `storyType`: optional mood or content styling.
- `coordinateStatus`: subtle note or warning if needed.

## 8. Optional Presentation Data

Additive presentation fields are allowed in a later data update:

```js
presentation: {
  headline: "Austin 도착",
  shortText: "긴 비행 끝에 텍사스의 첫 공기를 만난 순간.",
  focusZoom: 11,
  photoLimit: 3,
  mood: "arrival"
}
```

Fallback rules:

- `presentation.headline` fallback: `step.title`
- `presentation.shortText` fallback: `step.summary`
- `presentation.focusZoom` fallback: role-based default zoom
- `presentation.photoLimit` fallback: 3

## 9. Next / Prev Event Flow

Next:

```text
click Next
↓
StepController.next()
↓
previousStepId = currentStepId
currentStepIndex += 1
currentStepId = journeySteps[currentStepIndex].stepId
↓
DataAdapter resolves current step, location, media, and routeLink
↓
MapController moves map and updates marker states
↓
RouteAnimationController highlights matching routeLink if present
↓
PhotoController renders current preview images
↓
UI updates counter, progress, title, short text, role, route label
```

Prev:

```text
click Prev
↓
StepController.prev()
↓
same render pipeline
```

Dot/timeline click:

```text
click dot
↓
StepController.goToStep(stepId)
↓
same render pipeline
```

Keyboard:

- Arrow key navigation is optional.
- If implemented, it should call the same StepController methods.

## 10. Map And Route Rules

Hard rules:

- Do not generate route lines from `journeySteps`.
- Render route graph only from `routeLinks`.
- On step change, find the route between previous and current step from `routeLinks`.
- If no route exists, do not create a fallback line.
- Use coordinates from `locations`.
- Do not call geocoding APIs.

Marker visibility recommendation:

- Current point: strongest marker and subtle pulse.
- Visited points: visible but quiet.
- Unvisited points: dim or hidden.
- Lodging hub may stay visible as a contextual anchor.

Route visibility recommendation:

- Full route graph: optional, very subtle.
- Visited route: quiet warm line.
- Current route: strongest line with simple draw/glow animation.
- Future route: hidden or very dim.

## 11. Image Performance Policy

- Full images must not be mass-preloaded.
- Preview uses `thumb` first.
- If `thumb` fails, fallback to `full`.
- Fullscreen modal uses only the clicked `full` image.
- Use `loading="lazy"` for preview images where useful.
- Current and next step thumb preloading may be considered later, but full image preload remains prohibited.
- Missing image files must not break the app.

## 12. General Performance Policy

- Keep JavaScript small and framework-free.
- Keep CSS simple and presentation-focused.
- Use one Leaflet tile layer by default.
- Do not use scroll listeners for app state.
- Do not use `IntersectionObserver` for step state in the new UX.
- Do not recreate expensive map layers unnecessarily.
- Route animation should be CSS/SVG/Leaflet-polyline based and lightweight.

## 13. Verification Checklist

- Page loads directly from `index.html`.
- `Next` and `Prev` update the current step.
- Step counter updates.
- Dot/timeline updates and optionally supports direct jump.
- Current marker updates.
- Visited/unvisited marker states update.
- Current route is found from `routeLinks`.
- No fake route is created when no routeLink exists.
- Photo preview uses thumb first and full fallback.
- Lightbox opens the clicked full image.
- No full-image mass preload occurs.
- There is no scroll-based active step behavior.
- There is no sticky map plus long card list.
