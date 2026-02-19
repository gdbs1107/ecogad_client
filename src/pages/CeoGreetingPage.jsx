import usePageMeta from "../hooks/usePageMeta";
import PageHero from "../components/common/PageHero";

export default function CeoGreetingPage() {
  usePageMeta("CEO 인사말", "에코가드 CEO 인사말을 확인하세요.");

  return (
    <>
      <PageHero
        title="CEO 인사말"
        description="정밀한 기술과 책임 있는 품질로 고객의 신뢰를 지켜가겠습니다."
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
        imageAlt="회의실에서 산업 프로젝트를 검토하는 장면"
      />

      <section className="section container ceo-message" aria-labelledby="ceo-message-title">
        <h2 id="ceo-message-title">고객과 함께 성장하는 기술 파트너가 되겠습니다</h2>
        <p>
          ecogad는 산업 현장에서 요구되는 공기 품질 기준을 정확히 이해하고, 설계부터 제조,
          운영 지원까지 일관된 품질 체계를 제공하기 위해 노력해 왔습니다.
        </p>
        <p>
          앞으로도 고객 공정의 안정성과 생산성을 높일 수 있도록 기술 검증과 현장 대응을
          지속적으로 고도화하겠습니다.
        </p>

        <div className="signature-box" aria-label="CEO 서명 이미지 자리">
          <span>CEO Signature Placeholder</span>
        </div>
      </section>
    </>
  );
}
