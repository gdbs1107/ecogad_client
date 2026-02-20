import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/common/SectionHeader";

const strengths = [
  {
    num: "99.999%",
    title: "ULPA Performance",
    desc: "0.1μm 입자까지 완벽하게 제어하는 초고성능 여과 기술"
  },
  {
    num: "35% Lower",
    title: "Energy Efficient",
    desc: "독자적인 저압손 설계를 통한 송풍기 전력 소모 혁신적 절감"
  },
  {
    num: "ISO Class 1",
    title: "Cleanliness Certified",
    desc: "최첨단 반도체 공정에 적합한 세계 최고 수준의 청정도 보장"
  }
];

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="home-hero" aria-label="메인 소개">
        <div
          className="home-hero-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581092786450-7ef25f140997?auto=format&fit=crop&w=1800&q=80)"
          }}
          aria-hidden="true"
        />

        <div className="container home-hero-content">
          <span className="section-eyebrow home-hero-eyebrow">ENGINEERING PURITY SINCE 2012</span>
          <h1 className="display-1 home-hero-title">
            The Standard of
            <br />
            <span>Industrial Purity.</span>
          </h1>
          <p className="body-text home-hero-desc">
            반도체 클린룸에서 공항까지, 에코가드의 초정밀 필터 솔루션은
            <br className="desktop-only" />
            산업의 품질과 생명을 지키는 가장 완벽한 기준이 됩니다.
          </p>
          <div className="home-hero-actions">
            <Link to="/products" className="btn btn-primary">
              EXPLORE SOLUTIONS
            </Link>
            <Link to="/company" className="btn btn-ghost-light">
              ABOUT ECOGAD
            </Link>
          </div>
        </div>

        <div className="home-scroll-indicator" aria-hidden="true">
          <div className="home-scroll-line" />
          <span>SCROLL</span>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <SectionHeader
            eyebrow="TECHNICAL EXCELLENCE"
            title="숫자로 증명하는 압도적 기술력"
            description="캠브리지 필터의 정밀 엔지니어링 정신을 계승하여, 에코가드는 오직 성능으로만 말합니다."
          />

          <div className="philosophy-grid">
            {strengths.map((item) => (
              <article key={item.title} className="philosophy-item home-philosophy-item">
                <span className="philosophy-number home-philosophy-number">{item.num}</span>
                <h3 className="heading-3">{item.title}</h3>
                <p className="body-text">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="home-split-grid">
          <div className="home-split-text">
            <span className="section-eyebrow home-split-eyebrow">SEMICONDUCTOR & PHARMA</span>
            <h2 className="heading-2 home-split-heading">고청정 산업의 핵심 파트너</h2>
            <p className="body-text">
              미세한 오염 물질 하나가 수조 원의 손실로 이어지는 반도체와 제약 공정.
              에코가드는 완벽한 기밀 유지와 케미컬 제거 기술로 가장 안전한 생산 환경을 구축합니다.
            </p>

            <ul className="home-check-list" aria-label="적용 분야">
              {[
                "반도체/디스플레이 클린룸",
                "제약/바이오 무균실",
                "병원 음압 병동 시스템"
              ].map((item) => (
                <li key={item}>
                  <span className="check-mark" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/products" className="text-link">
              솔루션 상세 보기
            </Link>
          </div>

          <div className="home-split-image">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
              alt="반도체 클린룸 공정"
              className="home-split-image-el"
              loading="lazy"
            />
          </div>
        </div>

        <div className="home-split-grid home-split-grid-reverse">
          <div className="home-split-image home-split-image-right">
            <img
              src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=2670&auto=format&fit=crop"
              alt="대형 공항 환기 인프라"
              className="home-split-image-el"
              loading="lazy"
            />
          </div>

          <div className="home-split-text home-split-text-left">
            <span className="section-eyebrow home-split-eyebrow">PUBLIC INFRASTRUCTURE</span>
            <h2 className="heading-2 home-split-heading">대형 인프라 공조의 표준</h2>
            <p className="body-text">
              인천공항 등 대규모 유동인구가 발생하는 공공시설의 실내 공기질은 에코가드가 책임집니다.
              에너지 효율을 극대화한 대형 프리/미디움 필터 라인업을 통해 쾌적한 환경을 선사합니다.
            </p>
            <Link to="/products" className="text-link">
              공조 시스템 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-cta-section">
        <div className="container home-cta-container">
          <h2 className="heading-2 home-cta-title">
            가장 정밀한 공기로,
            <br />
            산업의 내일을 설계합니다.
          </h2>
          <p className="body-text home-cta-desc">
            에코가드의 기술 지원 팀은 귀사의 공조 설비 효율을 분석하여
            <br className="desktop-only" />
            최적의 유지보수 플랜을 제안해 드립니다.
          </p>
          <div className="home-cta-actions">
            <Link to="/inquiry" className="btn btn-primary">
              지금 견적 문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
