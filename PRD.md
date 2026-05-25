# Texas Trace PRD

## 1. Product Definition

`Texas Trace` is a PC-first interactive map presentation for the May 2026 Austin / Houston / Texas journey.

It is not a scrolling travel blog, dashboard, or long-form page. It should feel closer to a presentation deck: the presenter advances the journey one point at a time with `Next` and `Prev`, and the map becomes the main stage where the route unfolds.

One sentence definition:

`Texas Trace` is a presentation-style web experience where the audience follows each journey point through map movement, trace animation, minimal text, and focused photo previews.

## 2. Project Basics

- Project name: `texas-yoon` / `Texas Trace`
- Deployment URL: `https://gmldbs25.github.io/texas-yoon/`
- Deployment: GitHub Pages
- Web type: static website
- Backend: none
- Tech baseline: HTML, CSS, Vanilla JavaScript
- Build tools: none for the initial version
- Map library: Leaflet
- Primary viewport: PC presentation screen
- Mobile optimization: excluded from the initial scope

## 3. New Product Direction

The user experience must be redesigned around a single presentation stage:

- The map is the main visual surface.
- The presenter uses `Next` / `Prev` to move through the 19 journey points.
- Each step behaves like a slide.
- The screen shows only essential information for the current point.
- The previous-to-current movement trace is highlighted or animated.
- Photos support the current point, but the map and movement remain the main experience.

The experience should communicate:

- The long journey from Incheon to Austin.
- The Austin local base around lodging.
- The long drive to Houston.
- NASA, museum, Buc-ee's, UT Austin, COTA, Capitol, and local Austin memories.
- The return route through Minneapolis to Incheon.

## 4. UX Principles

- Presentation-first: the page should work well while a presenter controls it on a PC.
- Stage-first: avoid long scrolling sections and dense lists.
- Minimal information: each step shows only the title, subtitle, 1-3 short lines, role, route label, and preview photos.
- Strong map focus: map movement, active marker, and trace line are the primary experience.
- Controlled progression: the user intentionally advances with `Next` / `Prev`.
- Quiet motion: use subtle map panning, line drawing, route glow, and marker pulse. Avoid flashy or heavy animation.
- Photo as memory accent: show representative photos for the current step, not a large gallery wall.

## 5. Required Stage Layout

The initial implementation should use a fullscreen or near-fullscreen stage.

Recommended structure:

```text
Top bar:
  Texas Trace                         03 / 19

Main stage:
  Large Leaflet map
  Current marker emphasis
  Previous-to-current trace emphasis / animation

Bottom panel:
  Point title
  1-3 line summary
  role badge / route label
  photo preview strip

Controls:
  Prev
  progress dots or simple horizontal timeline
  Next
```

Alternative acceptable structure:

```text
Fullscreen map background
Bottom translucent info panel
Right-side photo preview
Left/right Prev/Next controls
Top step counter
```

## 6. Core Features

- Fullscreen presentation stage
- Leaflet map as the main surface
- `Next` / `Prev` journey navigation
- Current step counter, such as `03 / 19`
- Progress dots or compact timeline
- Dot/timeline click to jump to a specific step if feasible
- Current point marker emphasis
- Visited/unvisited marker states
- Current route segment emphasis
- Previous-to-current trace animation when a matching `routeLink` exists
- Step-level photo preview, usually 1-3 images
- Fullscreen/lightbox modal for clicked photos
- Graceful fallback when photos are missing
- Final step or closing state that feels like the end of a presentation

## 7. Removed Or Deferred UX

The following previous design direction is removed from the core product:

- One-page scrolling journey UX
- Sticky map plus long card list
- `IntersectionObserver`-based active step changes
- Step changes caused by scrolling
- Long text cards visible all at once
- Dashboard-style place exploration
- Blog-style long sections
- Large full gallery as a primary section

The following are deferred:

- Full gallery browsing
- More/detail drawer
- Keyboard navigation, unless simple to add
- Complex route animation
- Video
- Mobile optimization
- Slideshow mode beyond basic `Next` / `Prev`

## 8. Data Principles

The existing data separation remains required:

- `locations`: actual reusable places and fixed coordinates
- `journeySteps`: presentation order and step identity
- `routeLinks`: explicit map connection source
- `mediaGroups`: photo group data
- `role`, `storyType`, `coordinateStatus`: semantic UI and behavior data

Map route lines must be based only on `routeLinks`.

`journeySteps` provides presentation order, but it must not be used to auto-create map lines.

Runtime geocoding must not be used. Coordinates must come from `data/texasTraceData.js`.

## 9. Presentation Data Extension

The current data can be extended later without deleting existing fields.

Recommended optional addition to each `journeySteps` item:

```js
presentation: {
  headline: "Austin 도착",
  shortText: "긴 비행 끝에 텍사스의 첫 공기를 만난 순간.",
  focusZoom: 11,
  photoLimit: 3,
  mood: "arrival"
}
```

Rules:

- Existing fields must not be removed.
- Presentation fields should be optional.
- UI must fall back to existing `title`, `subtitle`, and `summary` when presentation fields are missing.

## 10. Photo Policy

- Each step should show representative photo previews, usually 1-3 images.
- Important places may show 3-5 preview images.
- Clicking a photo opens a fullscreen/lightbox modal using the `full` image.
- Initial preview should prefer `thumb`.
- If `thumb` is missing or fails, fallback to `full`.
- Do not preload all `full` images.
- Do not load a large full gallery by default.
- Missing photos must not break the page.

## 11. Excluded Scope

- Video
- Server/backend
- Login
- Database
- Mobile optimization
- Long scrolling story UI
- Sticky map and long card list
- Heavy dashboard UI
- Complex 3D animation
- Full-image mass preload
- Frameworks such as React, Vite, or Next.js unless explicitly requested later

## 12. Success Criteria

- GitHub Pages serves the project as a static web page.
- The initial view feels like a presentation stage, not a blog or dashboard.
- `Next` and `Prev` move through the 19 steps.
- The current step counter updates correctly.
- The current location is emphasized on the map.
- Visited and unvisited markers are visually distinct.
- Route lines are created only from `routeLinks`.
- When moving between steps, the matching `routeLink` is found and emphasized if present.
- If no matching `routeLink` exists, the map still moves and no fake line is created.
- Step information is concise and readable.
- Step photo previews use `thumb` first and `full` fallback.
- Lightbox uses `full` only for the clicked image.
- Full images are not mass-preloaded during initial load.
- The experience is stable on PC presentation screens.
