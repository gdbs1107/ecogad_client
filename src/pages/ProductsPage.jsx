import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import usePageMeta from "../hooks/usePageMeta";
import { productCategories } from "../data/productCategories";

export default function ProductsPage() {
  usePageMeta("제품 및 서비스", "에코가드의 제품 및 서비스 카테고리를 확인하세요.");

  return (
    <>
      <PageHero
        title="제품 및 서비스"
        description="산업 현장별 요구사항에 맞춘 필터 및 유지보수 솔루션을 제공합니다."
        imageUrl="https://images.unsplash.com/photo-1581092786450-7ef25f140997?auto=format&fit=crop&w=1800&q=80"
        imageAlt="산업용 공조 필터 설비가 설치된 현장"
      />

      <section className="section container" aria-labelledby="product-category-title">
        <SectionHeader
          eyebrow="CATEGORIES"
          title="제품 카테고리"
          description="카테고리를 선택하면 각 제품 및 서비스 안내 페이지로 이동합니다."
        />

        <ul className="card-grid two-column" id="product-category-title">
          {productCategories.map((category) => (
            <li key={category.slug} className="card">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Link to={`/products/${category.slug}`} className="text-link">
                상세 보기
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
