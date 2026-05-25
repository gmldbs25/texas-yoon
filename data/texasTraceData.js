window.TEXAS_TRACE_DATA = {
  meta: {
    title: "Texas Trace",
    subtitle: "Austin / Houston, Texas Journey Log",
    siteUrl: "https://gmldbs25.github.io/texas-yoon/",
    deployment: "GitHub Pages",
    viewport: "pc-first",
    mobileSupport: "not-prioritized",
    defaultTileLayer: "carto-dark",
    fallbackTileLayers: ["openstreetmap", "carto-light"],
    videoSupport: false,
    initialAnimationScope: "minimal-active-state-only",
    dataPolicy: {
      runtimeGeocoding: false,
      routeSource: "routeLinks-only",
      journeyOrderSource: "journeySteps",
      fullImagePreload: false,
      thumbPreferred: true,
      fullImageRequiredForFullscreen: true
    }
  },

  locations: {
    "incheon-airport": {
      name: "인천공항",
      officialName: "Incheon International Airport",
      address: "Incheon International Airport, Incheon, South Korea",
      lat: 37.463333,
      lng: 126.440002,
      category: "airport",
      country: "KR",
      coordinateStatus: "verified-seed"
    },

    "atlanta-airport": {
      name: "애틀란타 공항",
      officialName: "Hartsfield-Jackson Atlanta International Airport",
      address: "Hartsfield-Jackson Atlanta International Airport, Atlanta, GA, USA",
      lat: 33.640411,
      lng: -84.419853,
      category: "airport",
      country: "US",
      coordinateStatus: "verified-seed"
    },

    "austin-airport": {
      name: "오스틴 공항",
      officialName: "Austin-Bergstrom International Airport",
      address: "Austin-Bergstrom International Airport, Austin, TX, USA",
      lat: 30.194444,
      lng: -97.67,
      category: "airport",
      country: "US",
      coordinateStatus: "verified-seed"
    },

    "austin-lodging": {
      name: "오스틴 숙소",
      officialName: "The Vaughan",
      address: "12601 Innovar Cir, Austin, TX 78754",
      lat: 30.37951,
      lng: -97.62759,
      category: "lodging",
      country: "US",
      coordinateStatus: "seed-review-recommended"
    },

    "bjs-restaurant": {
      name: "BJ's Restaurant",
      officialName: "BJ's Restaurant & Brewhouse - Arbor Walk",
      address: "10515 MoPac Expy, Austin, TX 78759",
      lat: 30.39219,
      lng: -97.732409,
      category: "meal",
      country: "US",
      coordinateStatus: "seed-review-recommended"
    },

    "the-domain": {
      name: "The Domain",
      officialName: "The Domain",
      address: "11410 Century Oaks Terrace, Austin, TX 78758",
      lat: 30.402025,
      lng: -97.726006,
      category: "shopping",
      country: "US",
      coordinateStatus: "verified-seed"
    },

    "mueller-lake-park": {
      name: "Mueller Lake Park",
      officialName: "Mueller Lake Park",
      address: "4550 Mueller Blvd, Austin, TX 78723",
      lat: 30.296934,
      lng: -97.706987,
      category: "nature",
      country: "US",
      coordinateStatus: "seed-review-recommended"
    },

    "stiles-switch-bbq": {
      name: "Stiles Switch BBQ",
      officialName: "Stiles Switch BBQ & Brew",
      address: "6610 N Lamar Blvd, Austin, TX 78752",
      lat: 30.334575,
      lng: -97.721445,
      category: "meal",
      country: "US",
      coordinateStatus: "seed-review-recommended"
    },

    "space-center-houston": {
      name: "휴스턴 스페이스 센터",
      officialName: "Space Center Houston",
      address: "1601 NASA Parkway, Houston, TX 77058",
      lat: 29.551811,
      lng: -95.098228,
      category: "space",
      country: "US",
      coordinateStatus: "verified-seed"
    },

    "houston-museum-natural-science": {
      name: "Houston Museum of Natural Science",
      officialName: "Houston Museum of Natural Science",
      address: "5555 Hermann Park Dr, Houston, TX 77030",
      lat: 29.722013,
      lng: -95.389633,
      category: "museum",
      country: "US",
      coordinateStatus: "verified-seed"
    },

    "buc-ees-waller": {
      name: "Buc-ee's",
      officialName: "Buc-ee's Waller",
      address: "40900 US-290, Waller, TX 77484",
      lat: 30.0599,
      lng: -95.9269,
      category: "return-stop",
      country: "US",
      coordinateStatus: "needs-review"
    },

    "ut-austin-coop": {
      name: "UT Austin Co-op",
      officialName: "University Co-op",
      address: "2246 Guadalupe St, Austin, TX 78705",
      lat: 30.286165,
      lng: -97.74192,
      category: "shopping",
      country: "US",
      coordinateStatus: "verified-seed"
    },

    "cota": {
      name: "Circuit of The Americas",
      officialName: "Circuit of The Americas",
      address: "9201 Circuit of The Americas Blvd, Austin, TX 78617",
      lat: 30.133883,
      lng: -97.641144,
      category: "race",
      country: "US",
      coordinateStatus: "verified-seed"
    },

    "texas-capitol": {
      name: "Texas Capitol",
      officialName: "Texas State Capitol",
      address: "1100 Congress Ave, Austin, TX 78701",
      lat: 30.274623,
      lng: -97.740415,
      category: "landmark",
      country: "US",
      coordinateStatus: "seed-review-recommended"
    },

    "yard-house": {
      name: "Yard House",
      officialName: "Yard House - Domain Northside",
      address: "11800 Domain Blvd Suite 700, Austin, TX 78758",
      lat: 30.404352,
      lng: -97.721483,
      category: "meal",
      country: "US",
      coordinateStatus: "seed-review-recommended"
    },

    "total-wine-mueller": {
      name: "Total Wine & More",
      officialName: "Total Wine & More Mueller",
      address: "1201 Barbara Jordan Blvd Suite 900, Austin, TX 78723",
      lat: 30.30636,
      lng: -97.7069,
      category: "shopping",
      country: "US",
      coordinateStatus: "needs-review"
    },

    "minneapolis-airport": {
      name: "미니애폴리스 공항",
      officialName: "Minneapolis-Saint Paul International Airport",
      address: "Minneapolis-Saint Paul International Airport, MN, USA",
      lat: 44.883333,
      lng: -93.220833,
      category: "airport",
      country: "US",
      coordinateStatus: "verified-seed"
    }
  },

  journeySteps: [
    {
      stepId: 1,
      locationId: "incheon-airport",
      title: "인천공항",
      subtitle: "텍사스 여정의 시작",
      role: "departure",
      storyType: "flight-start",
      summary: "한국에서 텍사스로 향하는 긴 여정의 출발점.",
      mediaGroupId: "incheon-airport-departure"
    },
    {
      stepId: 2,
      locationId: "atlanta-airport",
      title: "애틀란타 공항",
      subtitle: "미국 입국과 환승",
      role: "flight-transfer",
      storyType: "flight-transfer",
      summary: "미국 본토에 도착해 오스틴으로 갈아타는 환승 지점.",
      mediaGroupId: "atlanta-airport"
    },
    {
      stepId: 3,
      locationId: "austin-airport",
      title: "오스틴 공항",
      subtitle: "Austin 도착",
      role: "arrival",
      storyType: "arrival",
      summary: "텍사스 오스틴에 도착한 첫 순간.",
      mediaGroupId: "austin-airport-arrival"
    },
    {
      stepId: 4,
      locationId: "austin-lodging",
      title: "오스틴 숙소",
      subtitle: "Austin Local Hub",
      role: "lodging-hub",
      storyType: "basecamp",
      summary: "오스틴에서의 이동 중심이 되는 숙소.",
      mediaGroupId: "austin-lodging"
    },
    {
      stepId: 5,
      locationId: "bjs-restaurant",
      title: "BJ's Restaurant",
      subtitle: "첫 로컬 식사 경험",
      role: "meal",
      storyType: "local-meal",
      summary: "오스틴에서 들른 레스토랑.",
      mediaGroupId: "bjs-restaurant"
    },
    {
      stepId: 6,
      locationId: "the-domain",
      title: "The Domain",
      subtitle: "Austin Shopping Area",
      role: "shopping",
      storyType: "local-shopping",
      summary: "오스틴 북쪽의 대표 쇼핑/라이프스타일 공간.",
      mediaGroupId: "the-domain"
    },
    {
      stepId: 7,
      locationId: "mueller-lake-park",
      title: "Mueller Lake Park",
      subtitle: "Austin의 여유로운 공원",
      role: "nature",
      storyType: "local-nature",
      summary: "호수와 산책로가 있는 오스틴의 여유로운 장소.",
      mediaGroupId: "mueller-lake-park"
    },
    {
      stepId: 8,
      locationId: "stiles-switch-bbq",
      title: "Stiles Switch BBQ",
      subtitle: "Texas BBQ",
      role: "meal",
      storyType: "bbq",
      summary: "텍사스 바비큐를 경험한 장소.",
      mediaGroupId: "stiles-switch-bbq"
    },
    {
      stepId: 9,
      locationId: "space-center-houston",
      title: "Space Center Houston",
      subtitle: "NASA와 우주 경험",
      role: "space",
      storyType: "space-center",
      summary: "이번 텍사스 여정에서 가장 강하게 기억에 남은 장소.",
      mediaGroupId: "space-center-houston"
    },
    {
      stepId: 10,
      locationId: "houston-museum-natural-science",
      title: "Houston Museum of Natural Science",
      subtitle: "자연사 박물관",
      role: "museum",
      storyType: "museum",
      summary: "휴스턴에서 방문한 대형 자연사 박물관.",
      mediaGroupId: "houston-museum-natural-science"
    },
    {
      stepId: 11,
      locationId: "buc-ees-waller",
      title: "Buc-ee's",
      subtitle: "Houston에서 Austin으로 돌아오는 길",
      role: "return-stop",
      storyType: "road-trip-stop",
      summary: "장거리 운전 중 들른 텍사스식 대형 휴게소.",
      mediaGroupId: "buc-ees-waller"
    },
    {
      stepId: 12,
      locationId: "ut-austin-coop",
      title: "UT Austin Co-op",
      subtitle: "University of Texas Austin",
      role: "shopping",
      storyType: "campus",
      summary: "UT Austin 캠퍼스와 굿즈를 경험한 장소.",
      mediaGroupId: "ut-austin-coop"
    },
    {
      stepId: 13,
      locationId: "cota",
      title: "Circuit of The Americas",
      subtitle: "COTA",
      role: "race",
      storyType: "race",
      summary: "F1 서킷과 고카팅 경험이 연결되는 장소.",
      mediaGroupId: "cota"
    },
    {
      stepId: 14,
      locationId: "texas-capitol",
      title: "Texas Capitol",
      subtitle: "텍사스 주 의사당",
      role: "landmark",
      storyType: "capital",
      summary: "텍사스의 상징적인 주 의사당.",
      mediaGroupId: "texas-capitol"
    },
    {
      stepId: 15,
      locationId: "yard-house",
      title: "Yard House",
      subtitle: "Domain Northside",
      role: "meal",
      storyType: "local-meal",
      summary: "오스틴에서 들른 Domain 인근 레스토랑.",
      mediaGroupId: "yard-house"
    },
    {
      stepId: 16,
      locationId: "total-wine-mueller",
      title: "Total Wine & More",
      subtitle: "Mueller Shopping Stop",
      role: "shopping",
      storyType: "local-shopping",
      summary: "오스틴에서 들른 쇼핑 장소.",
      mediaGroupId: "total-wine-mueller"
    },
    {
      stepId: 17,
      locationId: "austin-airport",
      title: "오스틴 공항",
      subtitle: "Austin 출국",
      role: "departure",
      storyType: "departure",
      summary: "텍사스 여정을 마치고 돌아가는 출발점.",
      mediaGroupId: "austin-airport-departure"
    },
    {
      stepId: 18,
      locationId: "minneapolis-airport",
      title: "미니애폴리스 공항",
      subtitle: "귀국편 환승",
      role: "flight-transfer",
      storyType: "flight-transfer",
      summary: "인천행 비행기로 갈아타는 귀국 환승 지점.",
      mediaGroupId: "minneapolis-airport"
    },
    {
      stepId: 19,
      locationId: "incheon-airport",
      title: "인천공항",
      subtitle: "여정의 끝",
      role: "arrival-home",
      storyType: "return-home",
      summary: "텍사스 여정을 마치고 한국으로 돌아온 마지막 지점.",
      mediaGroupId: "incheon-airport-return"
    }
  ],

  routeLinks: [
    { from: 1, to: 2, type: "flight", label: "ICN -> ATL", importance: "primary" },
    { from: 2, to: 3, type: "flight", label: "ATL -> AUS", importance: "primary" },
    { from: 3, to: 4, type: "arrival-drive", label: "AUS -> Austin Lodging", importance: "primary" },

    { from: 4, to: 5, type: "local", label: "Lodging <-> BJ's Restaurant", importance: "secondary" },
    { from: 4, to: 6, type: "local", label: "Lodging <-> The Domain", importance: "secondary" },
    { from: 4, to: 7, type: "local", label: "Lodging <-> Mueller Lake Park", importance: "secondary" },
    { from: 4, to: 8, type: "local", label: "Lodging <-> Stiles Switch BBQ", importance: "secondary" },

    { from: 4, to: 9, type: "long-drive", label: "Austin -> Space Center Houston", importance: "primary" },
    { from: 9, to: 10, type: "houston-local", label: "Space Center Houston -> HMNS", importance: "primary" },
    { from: 10, to: 11, type: "return-stop", label: "HMNS -> Buc-ee's", importance: "primary" },
    { from: 11, to: 4, type: "long-drive", label: "Buc-ee's -> Austin Lodging", importance: "primary" },

    { from: 4, to: 12, type: "local", label: "Lodging <-> UT Austin Co-op", importance: "secondary" },
    { from: 12, to: 13, type: "local-story", label: "UT Austin Co-op -> COTA", importance: "primary" },
    { from: 13, to: 4, type: "local", label: "COTA -> Lodging", importance: "secondary" },

    { from: 4, to: 14, type: "local", label: "Lodging <-> Texas Capitol", importance: "secondary" },
    { from: 4, to: 15, type: "local", label: "Lodging <-> Yard House", importance: "secondary" },
    { from: 4, to: 16, type: "local", label: "Lodging <-> Total Wine & More", importance: "secondary" },

    { from: 4, to: 17, type: "departure-drive", label: "Austin Lodging -> AUS", importance: "primary" },
    { from: 17, to: 18, type: "flight", label: "AUS -> MSP", importance: "primary" },
    { from: 18, to: 19, type: "flight", label: "MSP -> ICN", importance: "primary" }
  ],

  mediaGroups: {
    "incheon-airport-departure": {
      basePath: "assets/images/places/incheon-airport",
      images: []
    },
    "atlanta-airport": {
      basePath: "assets/images/places/atlanta-airport",
      images: []
    },
    "austin-airport-arrival": {
      basePath: "assets/images/places/austin-airport",
      images: []
    },
    "austin-lodging": {
      basePath: "assets/images/places/austin-lodging",
      images: []
    },
    "bjs-restaurant": {
      basePath: "assets/images/places/bjs-restaurant",
      images: []
    },
    "the-domain": {
      basePath: "assets/images/places/the-domain",
      images: []
    },
    "mueller-lake-park": {
      basePath: "assets/images/places/mueller-lake-park",
      images: []
    },
    "stiles-switch-bbq": {
      basePath: "assets/images/places/stiles-switch-bbq",
      images: []
    },
    "space-center-houston": {
      basePath: "assets/images/places/space-center-houston",
      images: [
        { file: "01.jpg", caption: "Space Center Houston" }
      ]
    },
    "houston-museum-natural-science": {
      basePath: "assets/images/places/houston-museum-natural-science",
      images: []
    },
    "buc-ees-waller": {
      basePath: "assets/images/places/buc-ees-waller",
      images: []
    },
    "ut-austin-coop": {
      basePath: "assets/images/places/ut-austin-coop",
      images: []
    },
    "cota": {
      basePath: "assets/images/places/cota",
      images: []
    },
    "texas-capitol": {
      basePath: "assets/images/places/texas-capitol",
      images: []
    },
    "yard-house": {
      basePath: "assets/images/places/yard-house",
      images: []
    },
    "total-wine-mueller": {
      basePath: "assets/images/places/total-wine-mueller",
      images: []
    },
    "austin-airport-departure": {
      basePath: "assets/images/places/austin-airport",
      images: []
    },
    "minneapolis-airport": {
      basePath: "assets/images/places/minneapolis-airport",
      images: []
    },
    "incheon-airport-return": {
      basePath: "assets/images/places/incheon-airport",
      images: []
    }
  }
};
