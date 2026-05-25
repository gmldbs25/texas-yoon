# Texas Trace Tasks

## Phase 0. Redesign Documentation

- [x] PRD.md를 프레젠테이션형 UX로 수정
- [x] TRD.md를 Next/Prev 기반 구조로 수정
- [x] TASKS.md를 새 개발 흐름으로 수정
- [x] AGENT.md에 스크롤 구조 금지 원칙 추가

## Phase 1. Reset Existing UI

- [x] 기존 스크롤형 UI 제거 계획 수립
- [x] sticky map 구조 제거
- [x] 긴 journey card list 제거
- [x] IntersectionObserver 기반 activeStep 제거
- [x] 기존 데이터 파일은 보존
- [x] 기존 지도/사진 fallback 로직 중 재사용 가능한 부분 식별

## Phase 2. Presentation Stage

- [x] fullscreen stage layout 구현
- [x] map stage 구현
- [x] topbar step counter 구현
- [x] bottom info panel 구현
- [x] photo preview panel 구현
- [x] Prev/Next controls 구현
- [x] progress dots 또는 compact timeline 구현

## Phase 3. Step Navigation

- [x] currentStepIndex/currentStepId 상태 구현
- [x] previousStepId 상태 구현
- [x] Next 이동 구현
- [x] Prev 이동 구현
- [x] dot/timeline 클릭 이동 구현
- [x] step 정보 렌더링
- [x] progress 업데이트
- [x] keyboard arrow navigation 검토

## Phase 4. Data Adapter

- [x] stepId 기반 journeyStep lookup 구현
- [x] step에서 location resolve 구현
- [x] step에서 mediaGroup resolve 구현
- [x] previousStepId/currentStepId 기반 routeLink 찾기 구현
- [x] routeLink가 없을 때 fake route를 만들지 않는 fallback 구현
- [x] presentation 필드 fallback 설계 적용

## Phase 5. Map Interaction

- [x] Leaflet map stage 초기화
- [x] CARTO Dark tile layer 1개만 로드
- [x] currentStep marker 강조
- [x] visited marker 스타일 구현
- [x] unvisited marker 스타일 구현
- [x] step 이동 시 map 중심 이동
- [x] routeLinks 기반 전체 route graph 은은하게 표시
- [x] current routeLink 강조
- [x] route trace animation 기본 구현
- [x] flight/local/long-drive route 스타일 구분

## Phase 6. Photos

- [x] step별 photo preview 구현
- [x] photoLimit 적용 또는 fallback 구현
- [x] thumb 우선 로딩
- [x] thumb 실패 시 full fallback
- [x] fullscreen lightbox 구현
- [x] modal에서는 클릭한 full 이미지만 로드
- [x] 이미지 없는 경우 fallback 처리

## Phase 7. Polish

- [x] cinematic minimal design 적용
- [x] map-as-stage 시각 구조 완성
- [x] bottom panel 정보 밀도 최소화
- [x] large typography 적용
- [x] warm trace line polish
- [x] subtle marker pulse 적용
- [ ] PC presentation check

## Phase 8. Performance

- [x] full 이미지 mass preload 없음 확인
- [x] preview lazy loading 확인
- [x] 지도 tile layer 중복 로딩 없음 확인
- [x] scroll 기반 상태 로직 없음 확인
- [x] route animation 성능 확인
- [ ] GitHub Pages 배포 후 로딩 체감 확인

## Phase 9. Later Enhancements

- [ ] 더 정교한 route drawing animation
- [ ] keyboard arrow navigation
- [ ] More detail panel
- [ ] optional full gallery
- [ ] thumbnail auto-generation script
- [ ] optional video support 검토
- [ ] mobile-specific layout 검토
