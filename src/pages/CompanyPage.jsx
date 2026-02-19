import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import usePageMeta from "../hooks/usePageMeta";

const histories = [
  { year: "2012", text: "에코가드 설립 및 산업용 공조 필터 라인 구축" },
  { year: "2017", text: "반도체 클린룸 고성능 필터 공급망 확대" },
  { year: "2021", text: "공항 대형 공조 프로젝트 납품 체계 고도화" },
  { year: "2025", text: "유지보수 통합 서비스 표준 프로세스 운영" }
];

export default function CompanyPage() {
  usePageMeta("회사소개", "ecogad의 미션과 비전, 연혁, 생산 설비를 확인하세요.");

  return (
    <>
      <PageHero
        title="회사소개"
        description="정밀한 공조 기술과 안정적인 제조 역량으로 산업 현장의 청정 환경을 지원합니다."
        imageUrl="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1800&q=80"
        imageAlt="산업 설비가 배치된 생산 공장 내부"
      />

      <section className="section container" aria-labelledby="mission-vision-title">
        <SectionHeader
          eyebrow="MISSION & VISION"
          title="미션과 비전"
          description="에코가드는 공정 안정성을 높이는 공기 품질 솔루션을 제공합니다."
        />
        <div className="split-grid" id="mission-vision-title">
          <article className="card">
            <h3>Mission</h3>
            <p>
              고청정 산업 환경에서 요구되는 공기 품질 기준을 안정적으로 달성할 수 있도록
              신뢰 가능한 필터와 유지보수 서비스를 제공합니다.
            </p>
          </article>
          <article className="card">
            <h3>Vision</h3>
            <p>
              산업용 공조 필터 분야에서 기술 신뢰도를 기반으로 고객 운영 효율을 높이는
              장기 파트너가 됩니다.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="history-title">
        <div className="container">
          <SectionHeader
            eyebrow="HISTORY"
            title="기업 연혁"
            description="현장 기반 기술을 축적하며 산업별 공급 역량을 확장해 왔습니다."
          />
          <ol className="timeline" id="history-title">
            {histories.map((item) => (
              <li key={item.year}>
                <span>{item.year}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container" aria-labelledby="facility-title">
        <SectionHeader
          eyebrow="FACILITY"
          title="공장 및 설비"
          description="대형 필터 생산과 성능 검증을 위한 설비 인프라를 운영합니다."
        />
        <div className="image-grid" id="facility-title">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
            alt="클린룸 환경에서 작업 중인 엔지니어"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
            alt="산업용 장비가 배치된 시설 내부"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
