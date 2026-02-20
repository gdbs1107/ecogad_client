import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';

const HomePage = () => {
  return (
    <div>
      {/* 1. Majestic Hero Section - Cambridge style depth */}
      <section style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        color: 'white',
        marginTop: '-80px',
        overflow: 'hidden'
      }}>
        {/* Background with subtle zoom animation or static high-res */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1581092786450-7ef25f140997?auto=format&fit=crop&w=1800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--color-cyan-500)', fontSize: '1.1rem', letterSpacing: '0.3em', marginBottom: '24px', display: 'block' }}>
              ENGINEERING PURITY SINCE 2012
            </span>
            <h1 className="display-1" style={{ marginBottom: '32px', color: 'white', fontSize: '4.5rem', lineHeight: '1.1' }}>
              The Standard of<br />
              <span style={{ color: 'var(--color-blue-600)' }}>Industrial Purity.</span>
            </h1>
            <p className="body-text" style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '48px', fontWeight: 300 }}>
              반도체 클린룸에서 공항까지, 에코가드의 초정밀 필터 솔루션은<br /> 
              산업의 품질과 생명을 지키는 가장 완벽한 기준이 됩니다.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/products" className="btn btn-primary" style={{ padding: '18px 48px', borderRadius: '0' }}>
                EXPLORE SOLUTIONS
              </Link>
              <Link to="/company" className="btn" style={{ 
                padding: '18px 48px', 
                border: '1px solid rgba(255,255,255,0.3)', 
                color: 'white',
                borderRadius: '0'
              }}>
                ABOUT ECOGAD
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom scroll indicator */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, opacity: 0.5 }}>
          <div style={{ width: '1px', height: '60px', background: 'white', margin: '0 auto' }}></div>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', marginTop: '10px', display: 'block' }}>SCROLL</span>
        </div>
      </section>

      {/* 2. Technical Expertise - Cambridge Style Philosophy Grid */}
      <section className="section bg-gray">
        <div className="container">
          <SectionHeader 
            eyebrow="TECHNICAL EXCELLENCE" 
            title="숫자로 증명하는 압도적 기술력" 
            description="캠브리지 필터의 정밀 엔지니어링 정신을 계승하여, 에코가드는 오직 성능으로만 말합니다." 
          />
          <div className="philosophy-grid">
            {[
              { num: "99.999%", title: "ULPA Performance", desc: "0.1μm 입자까지 완벽하게 제어하는 초고성능 여과 기술" },
              { num: "35% Lower", title: "Energy Efficient", desc: "독자적인 저압손 설계를 통한 송풍기 전력 소모 혁신적 절감" },
              { num: "ISO Class 1", title: "Cleanliness Certified", desc: "최첨단 반도체 공정에 적합한 세계 최고 수준의 청정도 보장" }
            ].map((item, idx) => (
              <div key={idx} className="philosophy-item">
                <span className="philosophy-number" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{item.num}</span>
                <h3 className="heading-3" style={{ color: 'var(--color-navy-900)' }}>{item.title}</h3>
                <p className="body-text" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Business Areas - Large Scale Visuals */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginBottom: '100px' }}>
          <div>
            <span className="section-eyebrow" style={{ color: 'var(--color-blue-600)' }}>SEMICONDUCTOR & PHARMA</span>
            <h2 className="heading-2" style={{ fontSize: '2.5rem' }}>고청정 산업의 핵심 파트너</h2>
            <p className="body-text" style={{ marginBottom: '32px' }}>
              미세한 오염 물질 하나가 수조 원의 손실로 이어지는 반도체와 제약 공정. 
              에코가드는 완벽한 기밀 유지와 케미컬 제거 기술로 가장 안전한 생산 환경을 구축합니다.
            </p>
            <ul style={{ marginBottom: '40px' }}>
              {['반도체/디스플레이 클린룸', '제약/바이오 무균실', '병원 음압 병동 시스템'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-blue-600)' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/products" className="text-link">솔루션 상세 보기</Link>
          </div>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80" 
              alt="Cleanroom Technology" 
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', order: 2 }}>
            <img 
              src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=2670&auto=format&fit=crop" 
              alt="Modern Airport Infrastructure Ventilation" 
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div style={{ order: 1 }}>
            <span className="section-eyebrow" style={{ color: 'var(--color-blue-600)' }}>PUBLIC INFRASTRUCTURE</span>
            <h2 className="heading-2" style={{ fontSize: '2.5rem' }}>대형 인프라 공조의 표준</h2>
            <p className="body-text" style={{ marginBottom: '32px' }}>
              인천공항 등 대규모 유동인구가 발생하는 공공시설의 실내 공기질은 에코가드가 책임집니다. 
              에너지 효율을 극대화한 대형 프리/미디움 필터 라인업을 통해 쾌적한 환경을 선사합니다.
            </p>
            <Link to="/products" className="text-link">공조 시스템 보기</Link>
          </div>
        </div>
      </section>

      {/* 4. Global Vision CTA (Cambridge Dark Style) */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy-900)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-2" style={{ color: 'white', fontSize: '3rem', marginBottom: '24px' }}>가장 정밀한 공기로,<br />산업의 내일을 설계합니다.</h2>
          <p className="body-text" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto 48px', fontSize: '1.2rem' }}>
            에코가드의 기술 지원 팀은 귀사의 공조 설비 효율을 분석하여<br /> 
            최적의 유지보수 플랜을 제안해 드립니다.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/inquiry" className="btn btn-primary" style={{ padding: '20px 60px' }}>지금 견적 문의하기</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
