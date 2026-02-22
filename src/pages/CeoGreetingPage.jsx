import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/common/PageHero";

export default function CeoGreetingPage() {
  usePageMeta("CEO 인사말", "ECO GOD 대표이사 인사말을 확인하세요.");

  return (
    <>
      <PageHero
        title="CEO 인사말"
        description="산업용 필터 성능과 현장 신뢰를 최우선으로, 고객의 생산 환경을 안정적으로 지원하겠습니다."
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
        imageAlt="회의실에서 산업 프로젝트를 검토하는 장면"
      />

      <section className="section container ceo-message" aria-labelledby="ceo-message-title">
        <h2 id="ceo-message-title">고객 현장의 요구에 끝까지 답하는 파트너가 되겠습니다</h2>
        <p>
          안녕하십니까, ECO GOD 대표이사 전철환입니다. 저희는 산업 현장에서 요구되는
          공기 품질 기준을 정확히 반영한 필터 설계와 제조를 핵심 가치로 삼고 있습니다.
        </p>
        <p>
          화력발전소, 방전가공기, 집진기, 수처리 등 다양한 운전 환경에서 검증된 제품과
          신속한 기술 지원으로 고객 설비의 안정성과 생산성을 높이겠습니다.
        </p>

        <div className="signature-box" aria-label="CEO 서명 영역">
          <strong>전철환</strong>
          <span>ECO GOD Co.,Ltd. 대표이사</span>
        </div>
      </section>
    </>
  );
}
