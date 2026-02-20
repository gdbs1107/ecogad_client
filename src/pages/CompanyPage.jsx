import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';

const histories = [
  { year: "2025", title: "사업 확장 및 고도화", text: "전국 유지보수 통합 서비스 표준 프로세스 운영 개시" },
  { year: "2021", title: "주요 인프라 수주", text: "인천국제공항 제2터미널 및 반도체 공정용 케미컬 필터 공급" },
  { year: "2018", title: "연구소 설립 및 R&D 강화", text: "부설 기술 연구소 설립 및 초고성능 ULPA 필터 국산화 성공" },
  { year: "2012", title: "법인 설립 및 공장 준공", text: "에코가드 법인 설립 및 경기도 화성 제1공장 가동" }
];

const CompanyPage = () => {
  return (
    <div>
      <PageHero 
        title="Who We Are" 
        subtitle="가장 맑은 숨으로 내일을 여는 기술, 에코가드의 철학입니다."
        bgImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1800&q=80"
      />

      {/* 1. CEO Greeting Section - Cambridge Style Framing */}
      <section className="section" style={{ backgroundColor: '#fff', position: 'relative' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="section-eyebrow" style={{ color: 'var(--color-blue-600)' }}>CEO GREETING</span>
            <h2 className="heading-1" style={{ fontSize: '2.75rem', lineHeight: '1.3', marginBottom: '32px' }}>
              공정의 안정성과 근로자의 건강을<br />
              지키는 가장 완벽한 필터링 기술.
            </h2>
            <div className="body-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '24px' }}>
                안녕하십니까? 에코가드 대표이사 김철수입니다.<br />
                우리가 숨 쉬는 공기는 단순한 환경을 넘어 산업의 품질과 생명에 직결됩니다.
              </p>
              <p style={{ marginBottom: '24px' }}>
                캠브리지 필터의 정밀한 엔지니어링 정신을 이어받아, 에코가드는 0.1µm의 입자 하나까지 놓치지 않는 고성능 필터 국산화에 매진해왔습니다. 반도체, 제약, 의료, 그리고 대형 공공 인프라에 이르기까지 에코가드의 기술이 닿지 않는 곳이 없습니다.
              </p>
              <p>
                우리는 단순한 필터 제조사를 넘어, 고객사의 공정 안정성을 위한 최적의 '공조 솔루션 파트너'가 될 것을 약속드립니다. 언제나 가장 맑은 공기로 여러분의 비즈니스에 보탬이 되겠습니다.
              </p>
            </div>
            
            <div className="ceo-signature">
              <span className="signature-line"></span>
              <span style={{ fontWeight: 600, color: 'var(--color-navy-900)' }}>에코가드 주식회사 대표이사</span>
              <span className="signature-text">Kim Chul Soo</span>
            </div>
          </div>
          
          <div style={{ position: 'relative', height: '100%', minHeight: '500px' }}>
            {/* Subtle background rectangle for the image */}
            <div style={{ 
              position: 'absolute', top: '40px', left: '40px', right: '-40px', bottom: '-40px',
              background: 'var(--color-navy-50)', zIndex: 1, borderRadius: 'var(--radius-md)'
            }}></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1632&q=80" 
              alt="CEO Signature Pose" 
              style={{ width: '100%', height: '500px', objectFit: 'cover', position: 'relative', zIndex: 2, borderRadius: 'var(--radius-md)', filter: 'grayscale(30%) contrast(1.1)' }}
            />
          </div>
        </div>
      </section>

      {/* 2. Philosophy / Vision - Cambridge Style Grid */}
      <section className="section bg-gray">
        <div className="container">
          <SectionHeader 
            eyebrow="MANAGEMENT PHILOSOPHY" 
            title="기업 이념" 
            description="에코가드는 세 가지 핵심 가치를 바탕으로 고객의 신뢰에 보답합니다." 
          />
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <span className="philosophy-number">01</span>
              <h3 className="heading-3">Integrity (무결성)</h3>
              <p className="body-text" style={{ fontSize: '0.95rem' }}>제품의 성능은 곧 신뢰입니다. 타협하지 않는 품질 기준으로 무결점 필터만을 생산합니다.</p>
            </div>
            <div className="philosophy-item">
              <span className="philosophy-number">02</span>
              <h3 className="heading-3">Innovation (혁신)</h3>
              <p className="body-text" style={{ fontSize: '0.95rem' }}>정체된 기술은 도태됩니다. 나노 소재 및 스마트 모니터링 시스템 등 혁신을 선도합니다.</p>
            </div>
            <div className="philosophy-item">
              <span className="philosophy-number">03</span>
              <h3 className="heading-3">Sustainability (지속가능성)</h3>
              <p className="body-text" style={{ fontSize: '0.95rem' }}>환경을 보호하는 필터가 되어야 합니다. 에너지 효율 극대화와 친환경 소재 적용에 앞장섭니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. History Section - Minimalistic Line Timeline */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="HISTORY" title="연혁" description="에코가드는 고객과 함께 정직한 성장의 길을 걸어왔습니다." />
          <div className="history-container">
            {histories.map((h, idx) => (
              <div key={idx} className="history-item">
                <div className="history-year">{h.year}</div>
                <div className="history-dot"></div>
                <div className="history-content">
                  <h4 style={{ color: 'var(--color-blue-600)' }}>{h.title}</h4>
                  <p className="body-text">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Vision Call to Action (Cambridge Style) */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy-900)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--color-cyan-500)' }}>GLOBAL NETWORK</span>
          <h2 className="heading-2" style={{ color: 'white', marginBottom: '24px' }}>한국을 넘어 세계 최고의 공기질 솔루션으로.</h2>
          <p className="body-text" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 40px' }}>
            에코가드는 이미 동남아시아 및 중동 시장의 주요 클린룸 프로젝트를 성공적으로 수행하며 세계적인 기술력을 인정받고 있습니다.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => window.location.href='/products'}>제품 라인업 확인</button>
            <button className="btn btn-outline" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.4)' }} onClick={() => window.location.href='/inquiry'}>지사 및 네트워크 문의</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
