import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import usePageMeta from "../hooks/usePageMeta";

const industries = [
  {
    code: "AIR",
    title: "공항",
    description: "대규모 터미널 공조 환경에서 안정적인 여과 성능과 운영 효율을 지원합니다."
  },
  {
    code: "SEMI",
    title: "반도체 클린룸",
    description: "미세입자 관리 기준이 엄격한 생산 라인을 위한 고청정 필터링을 제공합니다."
  },
  {
    code: "PHAR",
    title: "제약 산업",
    description: "의약품 제조 환경의 위생 기준 준수를 위한 정밀 공조 솔루션을 제안합니다."
  },
  {
    code: "HVAC",
    title: "산업용 공조 시스템",
    description: "공정 특성에 맞는 필터 구성과 유지보수 주기로 시스템 안정성을 높입니다."
  }
];

export default function BusinessAreaPage() {
  usePageMeta("사업분야", "에코가드의 산업별 적용 분야를 확인하세요.");

  return (
    <>
      <PageHero
        title="사업분야"
        description="산업별 공정 특성과 운영 환경에 맞춘 공조 필터 솔루션을 제공합니다."
        imageUrl="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1800&q=80"
        imageAlt="산업 시설에서 장비를 점검하는 엔지니어"
      />

      <section className="section container" aria-labelledby="business-area-title">
        <SectionHeader
          eyebrow="INDUSTRIES"
          title="적용 산업"
          description="고객 현장의 공조 요구사항에 맞춰 설계·제조·유지보수를 통합 제공합니다."
        />

        <ul className="card-grid two-column" id="business-area-title">
          {industries.map((item) => (
            <li key={item.title} className="card business-card">
              <div className="industry-icon" aria-hidden="true">
                {item.code}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
