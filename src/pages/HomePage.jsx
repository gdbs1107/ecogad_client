import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import SectionHeader from "../components/common/SectionHeader";

const strengths = [
  {
    title: "초정밀 여과 기술",
    description: "산업 현장 요구치에 맞춘 고성능 필터 설계와 안정적 품질 관리"
  },
  {
    title: "대형 현장 납품 경험",
    description: "공항, 반도체 공장, 클린룸 프로젝트 중심의 납품 및 운영 레퍼런스"
  },
  {
    title: "맞춤 엔지니어링",
    description: "현장 환경 분석을 기반으로 규격, 압손, 유지보수 조건을 최적화"
  },
  {
    title: "유지보수 대응력",
    description: "클린룸 유지보수와 필터 교체 주기 컨설팅을 단일 창구로 제공"
  }
];

const businessAreas = [
  "공항 환기 시스템",
  "반도체 클린룸",
  "제약 산업",
  "산업용 공조 시스템"
];

export default function HomePage() {
  usePageMeta(
    "산업용 공조 필터 전문 기업",
    "ecogad는 공항, 반도체 공장, 클린룸 등 고청정 산업 환경을 위한 공조 필터 솔루션을 제공합니다."
  );

  return (
    <>
      <section className="hero" aria-label="에코가드 메인 비주얼">
        <img
          src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1920&q=80"
          alt="대형 공조 설비가 설치된 산업용 실내 공간"
          loading="eager"
        />
        <div className="hero-content container">
          <p className="hero-eyebrow">Industrial Air Filtration Partner</p>
          <h1>정밀 공조 필터링으로 산업 현장의 공기를 관리합니다</h1>
          <p>
            ecogad는 대형 고성능 필터 제조와 클린 환경 유지보수 기술을 결합해
            공정 안정성과 운영 신뢰성을 높입니다.
          </p>
          <div className="hero-cta">
            <Link to="/products" className="btn btn-primary">
              제품 보기
            </Link>
            <Link to="/inquiry" className="btn btn-secondary">
              견적 문의
            </Link>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="strength-title">
        <SectionHeader
          eyebrow="WHY ECOGAD"
          title="핵심 강점"
          description="현장 중심 기술 대응으로 고청정 환경 유지에 필요한 핵심 역량을 제공합니다."
        />
        <ul className="card-grid four-column" id="strength-title">
          {strengths.map((item) => (
            <li key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section-tint" aria-labelledby="business-summary-title">
        <div className="container">
          <SectionHeader
            eyebrow="BUSINESS FOCUS"
            title="주요 사업 영역"
            description="산업별 공조 환경 특성에 맞춰 설계·제조·유지보수를 제공합니다."
          />
          <ul className="pill-grid" id="business-summary-title">
            {businessAreas.map((area) => (
              <li key={area} className="pill-item">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
