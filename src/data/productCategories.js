export const productCategories = [
  {
    slug: "ulpa",
    name: "ULPA 필터",
    description: "초고효율 미립자 제어가 필요한 고청정 공정용 필터 솔루션"
  },
  {
    slug: "hepa",
    name: "HEPA 필터",
    description: "산업용 공조 시스템의 고효율 집진 및 청정도 유지에 적합한 필터"
  },
  {
    slug: "medium",
    name: "MEDIUM 필터",
    description: "다단 필터링 공정에서 효율과 경제성을 균형 있게 제공하는 중성능 필터"
  },
  {
    slug: "pre",
    name: "PRE 필터",
    description: "후단 고성능 필터 보호를 위한 1차 포집용 전처리 필터"
  },
  {
    slug: "chemical",
    name: "CHEMICAL 필터",
    description: "유해가스 및 화학 오염 물질 제어를 위한 흡착 기반 필터"
  },
  {
    slug: "clean-equipment",
    name: "CLEAN 장비",
    description: "정밀 공정 환경을 지원하는 클린 장비 라인업"
  },
  {
    slug: "cleanroom-maintenance",
    name: "클린룸 유지보수",
    description: "운영 안정성을 높이는 클린룸 점검·교체·유지보수 서비스"
  },
  {
    slug: "etc",
    name: "기타",
    description: "현장 요구사항에 맞춘 기타 공조/청정 솔루션"
  }
];

export function findCategoryBySlug(slug) {
  return productCategories.find((category) => category.slug === slug);
}
