import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";

const histories = [
  { year: "2025", title: "사업 확장 및 고도화", text: "전국 유지보수 통합 서비스 표준 프로세스 운영 개시" },
  { year: "2021", title: "주요 인프라 수주", text: "인천국제공항 제2터미널 및 반도체 공정용 케미컬 필터 공급" },
  { year: "2018", title: "연구소 설립 및 R&D 강화", text: "부설 기술 연구소 설립 및 초고성능 ULPA 필터 국산화 성공" },
  { year: "2012", title: "법인 설립 및 공장 준공", text: "에코가드 법인 설립 및 경기도 화성 제1공장 가동" }
];

const CompanyPage = () => {
  return (
    <div className="company-page">
      <PageHero
        title="Who We Are"
        subtitle="가장 맑은 숨으로 내일을 여는 기술, 에코가드의 철학입니다."
        bgImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1800&q=80"
        imageAlt="산업 시설 전경"
      />

      <section className="section company-ceo-section">
        <div className="container company-ceo-grid">
          <div>
            <span className="section-eyebrow company-ceo-eyebrow">CEO GREETING</span>
            <h2 className="heading-1 company-ceo-title">
              공정의 안정성과 근로자의 건강을
              <br />
              지키는 가장 완벽한 필터링 기술.
            </h2>
            <div className="body-text company-ceo-body">
              <p>
                안녕하십니까? 에코가드 대표이사 김철수입니다.
                우리가 숨 쉬는 공기는 단순한 환경을 넘어 산업의 품질과 생명에 직결됩니다.
              </p>
              <p>
                캠브리지 필터의 정밀한 엔지니어링 정신을 이어받아, 에코가드는 0.1μm의 입자
                하나까지 놓치지 않는 고성능 필터 국산화에 매진해왔습니다. 반도체, 제약, 의료,
                그리고 대형 공공 인프라에 이르기까지 에코가드의 기술이 닿지 않는 곳이 없습니다.
              </p>
              <p>
                우리는 단순한 필터 제조사를 넘어, 고객사의 공정 안정성을 위한 최적의
                공조 솔루션 파트너가 될 것을 약속드립니다. 언제나 가장 맑은 공기로
                여러분의 비즈니스에 보탬이 되겠습니다.
              </p>
            </div>

            <div className="ceo-signature">
              <span className="signature-line" />
              <span className="company-ceo-role">에코가드 주식회사 대표이사</span>
              <span className="signature-text">Kim Chul Soo</span>
            </div>
          </div>

          <div className="company-ceo-image-wrap">
            <div className="company-ceo-image-bg" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1632&q=80"
              alt="CEO 이미지"
              className="company-ceo-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <SectionHeader
            eyebrow="MANAGEMENT PHILOSOPHY"
            title="기업 이념"
            description="에코가드는 세 가지 핵심 가치를 바탕으로 고객의 신뢰에 보답합니다."
          />
          <div className="philosophy-grid">
            <article className="philosophy-item">
              <span className="philosophy-number">01</span>
              <h3 className="heading-3">Integrity (무결성)</h3>
              <p className="body-text">
                제품의 성능은 곧 신뢰입니다. 타협하지 않는 품질 기준으로 무결점 필터만을 생산합니다.
              </p>
            </article>
            <article className="philosophy-item">
              <span className="philosophy-number">02</span>
              <h3 className="heading-3">Innovation (혁신)</h3>
              <p className="body-text">
                정체된 기술은 도태됩니다. 나노 소재 및 스마트 모니터링 시스템 등 혁신을 선도합니다.
              </p>
            </article>
            <article className="philosophy-item">
              <span className="philosophy-number">03</span>
              <h3 className="heading-3">Sustainability (지속가능성)</h3>
              <p className="body-text">
                환경을 보호하는 필터가 되어야 합니다. 에너지 효율 극대화와 친환경 소재 적용에 앞장섭니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="HISTORY"
            title="연혁"
            description="에코가드는 고객과 함께 정직한 성장의 길을 걸어왔습니다."
          />
          <div className="history-container">
            {histories.map((history) => (
              <article key={history.year} className="history-item">
                <div className="history-year">{history.year}</div>
                <div className="history-dot" />
                <div className="history-content">
                  <h4>{history.title}</h4>
                  <p className="body-text">{history.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-cta-section">
        <div className="container company-cta-container">
          <span className="section-eyebrow company-cta-eyebrow">GLOBAL NETWORK</span>
          <h2 className="heading-2 company-cta-title">한국을 넘어 세계 최고의 공기질 솔루션으로.</h2>
          <p className="body-text company-cta-desc">
            에코가드는 동남아시아 및 중동 시장의 주요 클린룸 프로젝트를 수행하며
            세계적인 기술력을 인정받고 있습니다.
          </p>
          <div className="company-cta-actions">
            <Link to="/products" className="btn btn-primary">
              제품 라인업 확인
            </Link>
            <Link to="/inquiry" className="btn btn-outline btn-outline-light">
              지사 및 네트워크 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
