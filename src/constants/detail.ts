export interface WorkType {
  id: number;
  category: string;
  title: string;
  englishTitle: string;
  siteLink: string;
  description: string;
  testAccount?: {
    id: string;
    password: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  techStackImage?: string;
  trobleShooting?: {
    title: string;
    problem: string;
    solution: string;
  }[];
  links: {
    github: string;
    notion?: string;
    UTReport?: string;
  };
}

export const WORK_DATA: WorkType[] = [
  {
    id: 1,
    category: "Publishing",
    title: "나응식의 묘집합",
    englishTitle: "Naeungsic's Living Space",
    siteLink: "https://erinmzo.github.io/naeungsic/",
    description:
      "가구 브랜드 레어로우와 고양이 수의사 나응식이 협업하여 제작된 공간을 소개하는 웹 리플릿입니다.\n감각적인 공간 스타일링과 가구들의 조화로운 배치를 통해 새로운 라이프스타일을 제안합니다.",
    features: [
      {
        title: "공간 스타일링",
        description:
          "▸ 레어로우의 시그니처 제품들로 구성된 오피스 공간을 소개합니다.\n▸ 각 공간마다 특별히 선정된 가구들의 배치와 스타일링을 통해 실용적이면서도 감각적인 공간 구성을 보여줍니다.",
      },
      {
        title: "제품 상세 정보",
        description:
          "▸ 공간에 배치된 레어로우 가구들의 상세 정보를 확인할 수 있습니다. \n▸ 각 제품의 사이즈, 소재, 컬러 등 디테일한 정보부터 공간 속 활용 방법까지 자세히 소개합니다.",
      },
      {
        title: "반응형 디자인",
        description:
          "▸ 모바일과 데스크톱 환경에서 최적화된 뷰를 제공합니다. \n▸ 다양한 디바이스에서도 편리하게 공간을 둘러볼 수 있도록 설계되어 있습니다.\n▸ 고해상도 이미지를 통해 섬세한 디테일까지 확인할 수 있습니다.",
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/erinmzo/naeungsic",
    },
  },
  {
    id: 2,
    category: "Publishing",
    title: "장인성의 말랑한 오피스",
    englishTitle: "Insung Chang's Soft Office",
    siteLink: "https://erinmzo.github.io/insungchang/",
    description:
      "철제 가구 브랜드 레어로우와 협업하여 제작된 웹 리플릿 프로젝트입니다.\n레어로우의 가구들로 스타일링된 오피스 공간을 소개하며,\n마케팅 전문가의 업무 공간에 어울리는 감각적인 공간을 제안합니다.",
    features: [
      {
        title: "공간 스타일링",
        description:
          "▸ 레어로우의 시그니처 제품들로 구성된 오피스 공간을 소개합니다. \n▸ 각 공간마다 특별히 선정된 가구들의 배치와 스타일링을 통해 실용적이면서도 감각적인 공간 구성을 보여줍니다.",
      },
      {
        title: "제품 상세 정보",
        description:
          "▸ 공간에 배치된 레어로우 가구들의 상세 정보를 확인할 수 있습니다.\n▸ 각 제품의 사이즈, 소재, 컬러 등 디테일한 정보부터 공간 속 활용 방법까지 자세히 소개합니다.",
      },
      {
        title: "반응형 디자인",
        description:
          "▸ 모바일과 데스크톱 환경에서 최적화된 뷰를 제공합니다. \n▸ 다양한 디바이스에서도 편리하게 공간을 둘러볼 수 있도록 설계되어 있습니다.\n▸ 고해상도 이미지를 통해 섬세한 디테일까지 확인할 수 있습니다.",
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/erinmzo/insungchang",
    },
  },
  {
    id: 3,
    category: "Frontend",
    title: "혼자살때",
    englishTitle: "Living Alone",
    siteLink: "https://livingalone.vercel.app/",
    description:
      "혼자살때는 설레이는 첫 자취를 시작한 자취생의 걱정을 덜어주는 커뮤니티 웹서비스입니다.\n자취를 시작하는 사람들을 위한 필수템 리뷰와 공동구매 정보를 제공하는 커뮤니티 웹사이트입니다.\n\n회원들은 자취에 필요한 다양한 아이템을 추천하고,\n 특가 상품 공동구매를 통해 저렴하게 필요한 물품을 구입할 수 있으며,\n 회원가입을 통해 맞춤형 서비스와 편리한 기능을 이용할 수 있습니다.",
    testAccount: {
      id: "test@test.com",
      password: "q1w2e3r4!!",
    },
    features: [
      {
        title: "구해줘 자취템",
        description:
          "▸ 자취 필수템 커뮤니티 서비스에서는 자취생들이 실제로 사용해본 생활용품들의 상세한 리뷰와 평가를 공유할 수 있습니다. \n▸ 사용자들은 제품의 장단점, 가격 대비 성능, 실제 사용 후기 등을 작성하고 조회할 수 있으며, 다른 사용자들의 리뷰에 댓글을 달거나 '찜하기' 기능을 통해 관심 상품을 저장할 수 있습니다.\n▸ 특히 초보 자취생들에게 실질적인 도움이 되는 정보를 제공하는 것을 목표로 합니다.",
      },
      {
        title: "같이 사 공구템",
        description:
          "▸ 자취템 공동구매 서비스를 통해 사용자들은 생활용품을 보다 저렴한 가격에 구매할 수 있습니다.\n▸ 공동구매 주최자는 상품 정보, 가격, 공구 기간, 최소 인원 등을 설정하여 공구를 열 수 있습니다.\n▸ 참여자들과 실시간 채팅을 통해 소통할 수 있습니다.",
      },
      {
        title: "랜덤박스 구매",
        description:
          "▸ 랜덤박스 상품 결제 서비스는 자취 필수템들을 묶어 패키지로 제공하는 특별한 쇼핑 경험을 제공합니다. \n▸ 포트원 결제 시스템을 통해 안전한 결제가 가능하며, 배송 조회와 구매 내역 확인 기능을 제공합니다.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "TanStack Query", "Zustand", "Tailwind CSS"],
    techStackImage: "/images/tech-stack/livingalone.png",
    trobleShooting: [
      {
        title: "01. 구글 로그인 유지 문제",
        problem:
          "구글 로그인을 하면 새로고침이 되면서 전역 상태 관리에 유저 정보가 저장되지 않고 넘어가는 문제가 있었습니다. 또한 구글 로그인 유저는 회원가입을 하지 않아 profile 테이블에 유저 정보가 저장 되지 않는 문제가 있었습니다.",
        solution:
          "getUser Promise 함수에 then을 사용하여 응답값이 바로 저장되도록 수정했습니다. 또한 로그인과 동시에 유저 정보가 profile 테이블에 추가 되도록 하였습니다.",
      },
      {
        title: "02. Supabase Storage Egress 트래픽 초과",
        problem:
          "Supabase에서 Storage Egress 트래픽이 많이 발생되는 문제가 있었습니다. 데이터 베이스도 많이 차지하지만 이미지가 필수인 우리 사이트에서는 이미지 트래픽 용량이 중요했습니다.",
        solution:
          "이미지 첨부 시 자동으로 이미지를 압축하여 이미지 용량을 1mb 이하로 조정하였으며, 이미지 로더를 설정하여 트래픽을 30%정도 개선할 수 있었습니다.",
      },
    ],
    links: {
      github: "https://github.com/erinmzo/livingalone",
      notion: "https://teamsparta.notion.site/A06-cd19dc2ae7cc4e6eb55e9387e868db22",
      UTReport:
        "https://file.notion.so/f/f/83c75a39-3aba-4ba4-a792-7aefe4b07895/79b749ff-5723-44af-915d-b18c6d4ded6e/%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BCUT.pdf?table=block&id=cd19dc2a-e7cc-4e6e-b55e-9387e868db22&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&expirationTimestamp=1735567200000&signature=uBjNlF3HIJhgYKJewO38lOSCUtS-NOjbvD4VL0gKGiQ&downloadName=UT+%EA%B2%B0%EA%B3%BC+%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf",
    },
  },
  {
    id: 4,
    category: "Frontend",
    title: "혼자살때 시즌2",
    englishTitle: "Living Alone Season 2",
    siteLink: "",
    description:
      "혼자살때는 설레이는 첫 자취를 시작한 자취생의 걱정을 덜어주는 커뮤니티 웹서비스입니다.\n리팩토링을 통해 코드 품질과 성능을 개선하고, 사용자 경험을 향상시켰습니다.\n더욱 안정적이고 효율적인 서비스를 제공하기 위해 기존 기능들을 최적화하고 개선했습니다.",
    testAccount: {
      id: "test@test.com",
      password: "123123",
    },
    features: [
      {
        title: "기존 기능 개선",
        description:
          "▸ 구해줘 자취템과 같이 사 공구템, 랜덤박스 구매 등 기존 기능들의 성능과 안정성을 개선했습니다.\n▸ 특히 찜하기 기능의 캐싱 처리를 최적화하여 더욱 안정적인 상태 관리가 가능해졌습니다.\n▸ 이미지 업로드 컴포넌트를 재사용 가능한 형태로 개선하여 코드의 재사용성과 유지보수성을 높였습니다.",
      },
      {
        title: "코드 구조화",
        description:
          "▸ 컴포넌트 구조를 개선하고 API 레이어를 분리하여 더 체계적인 코드 관리가 가능해졌습니다.\n▸ 기존의 복잡한 컴포넌트들을 더 작은 단위로 분리하고, 공통 로직을 custom hook으로 추출하여 코드의 가독성과 재사용성을 높였습니다.\n▸ 또한 API 호출 로직을 중앙화하여 일관된 에러 처리와 로딩 상태 관리가 가능해졌습니다.",
      },
      {
        title: "성능 최적화",
        description:
          "▸ 이미지 최적화를 통해 로딩 속도를 개선하고, React Query의 캐싱 전략을 재설계하여 데이터 fetching 효율성을 높였습니다.\n▸ 특히 이미지 업로드 시 자동 압축 기능을 도입하여 스토리지 사용량을 줄이고, 페이지 로딩 속도를 개선했습니다. \n▸ 또한 무한 스크롤과 지연 로딩을 적용하여 초기 로딩 시간을 단축하고 사용자 경험을 개선했습니다.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "TanStack Query", "Zustand", "Tailwind CSS"],
    techStackImage: "/images/tech-stack/livingalone-s2.png",
    trobleShooting: [
      {
        title: "01. 찜하기 useQuery 캐싱 오류",
        problem:
          "찜하기가 0인 상태로 변해도 활성화 컬러가 되어있음. 여러번 누르면 잘 되다가 갑자기 한번 더 추가되거나 오류가 발생했습니다.",
        solution:
          "useWishStatus와 useWishCount 훅을 두가지로 분리하고, WishButton과 WishCount 컴포넌트도 분리하여 해결했습니다. 분리 후 mutation 내 캐싱처리가 중복되지 않고 잘 진행되는 것을 확인했습니다.",
      },
      {
        title: "02. 이미지 업로드 컴포넌트 타입 충돌 문제",
        problem:
          "자취템 게시판과 공구템 게시판의 이미지 업로드 로직을 컴포넌트로 분리했으나, 각 페이지의 오류 메세지 타입이 달라 프롭스를 전달할 때 타입 충돌이 발생했습니다.",
        solution:
          "컴포넌트에 제네릭 타입을 적용하여 각 글쓰기 페이지에서 필요한 오류 타입을 유연하게 처리할 수 있도록 수정하여 문제를 해결했습니다.",
      },
    ],
    links: {
      github: "https://github.com/solpark16/livingalone-season2",
    },
  },
  {
    id: 5,
    category: "Frontend",
    title: "펫데이지",
    englishTitle: "Pet Daisy",
    siteLink: "https://pet-daisy.vercel.app/",
    description:
      "펫데이지는 소중한 반려동물의 건강 여정을 함께하는 똑똑한 건강 관리 플랫폼입니다.\n체중 변화부터 병원 진료 기록, 예방접종 일정까지 한눈에 확인할 수 있어 더욱 건강한 반려생활을 도와드립니다.\n또한 일상의 특별한 순간들을 사진과 함께 기록할 수 있어, 반려동물과의 소중한 추억을 오래도록 간직할 수 있습니다.",
    testAccount: {
      id: "test@test.com",
      password: "123123123",
    },
    features: [
      {
        title: "몸무게 기록",
        description:
          "▸ 반려동물의 체중 변화를 시각적인 그래프로 한눈에 파악할 수 있습니다. \n▸ 시간대별 체중 추이를 분석하여 건강 상태를 모니터링할 수 있으며, 급격한 체중 변화도 쉽게 확인할 수 있습니다. \n▸ 체중 기록을 날짜별로 관리하여 장기적인 건강 관리가 가능합니다.",
      },
      {
        title: "진료 기록",
        description:
          "▸ 병원 방문 기록과 진단 내용, 처방 내역을 체계적으로 기록하고 관리할 수 있습니다. \n▸ 진료비, 병원명, 진단명 등 상세한 정보를 저장할 수 있어 추후 병원 방문 시 참고하기 용이합니다. \n▸ 특히 만성 질환이나 정기 검진의 경우, 이전 진료 내역을 토대로 건강 상태의 변화를 추적할 수 있습니다.",
      },
      {
        title: "예방 접종 기록",
        description:
          "▸ 반려동물의 예방접종 이력을 종류별로 구분하여 체계적으로 관리할 수 있습니다. \n▸ 종합백신, 광견병, 코로나 등 각종 예방접종의 접종 날짜와 병원 정보를 기록할 수 있으며, 다음 접종 예정일도 함께 관리할 수 있습니다. \n▸ 특히 반려동물의 연령대에 따른 필수 예방접종을 누락 없이 관리할 수 있습니다.",
      },
      {
        title: "관찰 기록",
        description:
          "▸ 반려동물의 일상적인 건강 상태와 특이사항을 사진과 함께 상세히 기록할 수 있습니다.\n▸ 식사량, 배변 상태, 활동량 등 일상적인 건강 지표부터 특이 행동이나 증상까지 모든 관찰 사항을 날짜별로 기록할 수 있습니다.\n▸ 사진 첨부 기능을 통해 피부 상태나 상처 등의 시각적인 변화도 효과적으로 기록하고 관리할 수 있습니다.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "React Hook Form",
      "browser-image-compression",
      "react-paginate",
    ],
    techStackImage: "/images/tech-stack/petdaisy.png",
    trobleShooting: [
      {
        title: "01. 이미지 업로드 상태 관리 개선",
        problem:
          "이미지 업로드 중에도 폼 제출이 가능한 문제와 사용자가 업로드 진행 상태를 알기 어려웠으며, 중복 제출 가능성이 존재했습니다.",
        solution:
          "blob URL과 실제 업로드된 URL 개수 비교로 진행 상태를 확인하고, 이미지 업로드 중에는 버튼을 비활성화하며, 업로드 중 상태를 버튼 텍스트로 표시하여 해결했습니다.",
      },
      {
        title: "02. 반려동물 삭제 후 상태 관리",
        problem:
          "반려동물 삭제 후 프로필 데이터가 남아있어 오류가 발생하고, 사용자에게 적절한 UI가 표시되지 않는 문제가 있었습니다.",
        solution:
          "TanStack Query의 쿼리 캐시 리셋과 Zustand의 상태 초기화를 통해 삭제 후의 상태를 깔끔하게 정리하고, 적절한 UI를 보여주도록 개선했습니다.",
      },
      {
        title: "03. 이미지 업로드 동기화 문제 해결",
        problem:
          "이미지 업로드가 완료되기 전에 등록하기 버튼을 클릭할 경우, 이미지 URL이 빈 값으로 저장되는 문제가 발생했습니다. 이는 이미지 업로드의 비동기 처리와 폼 제출 타이밍이 맞지 않아 발생하는 이슈였습니다.",
        solution:
          "이미지 업로드 상태를 추적하기 위해 blob URL과 실제 업로드된 URL의 개수를 비교하는 로직을 구현했습니다. 이미지 업로드가 진행 중일 때는 등록하기 버튼을 비활성화하고, 버튼 텍스트를 '이미지 업로드 중'으로 변경하여 사용자에게 현재 상태를 명확히 알려주도록 개선했습니다. 모든 이미지 업로드가 완료된 후에만 폼 제출이 가능하도록 하여 데이터 일관성을 보장했습니다.",
      },
    ],
    links: {
      github: "https://github.com/hyorimhan/PetDaisy",
      notion: "https://swanky-find-76e.notion.site/162f0495803c80cba576f4a816e219be?pvs=4",
    },
  },
];
