import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmptyState from "../components/common/EmptyState";
import PageHero from "../components/common/PageHero";
import usePageMeta from "../hooks/usePageMeta";
import { fetchProductsByCategory } from "../services/api/products";
import { findCategoryBySlug } from "../data/productCategories";
import NotFoundPage from "./NotFoundPage";

export default function ProductCategoryPage() {
  const { categorySlug } = useParams();
  const category = findCategoryBySlug(categorySlug);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  usePageMeta(
    category ? category.name : "제품 상세",
    category
      ? `${category.name} 카테고리의 제품 및 서비스를 확인하세요.`
      : "존재하지 않는 제품 카테고리입니다."
  );

  useEffect(() => {
    if (!category) {
      return;
    }

    let active = true;

    async function loadProducts() {
      try {
        setIsLoading(true);
        const response = await fetchProductsByCategory(category.slug);
        if (active) {
          setProducts(response);
          setError("");
        }
      } catch (loadError) {
        if (active) {
          setError("제품 정보를 불러오지 못했습니다.");
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      active = false;
    };
  }, [category]);

  if (!category) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHero
        title={category.name}
        description={category.description}
        imageUrl="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1800&q=80"
        imageAlt="산업용 필터 장비를 점검하는 현장"
      />

      <section className="section container" aria-labelledby="product-list-title">
        <h2 id="product-list-title">제품 목록</h2>

        {isLoading ? <p className="status-message">제품 정보를 확인 중입니다.</p> : null}
        {!isLoading && error ? <p className="status-message error">{error}</p> : null}

        {!isLoading && !error && products.length === 0 ? (
          <EmptyState
            title="등록된 제품이 없습니다"
            description="관리자 등록 후 해당 카테고리의 제품 목록이 이 영역에 표시됩니다."
          />
        ) : null}

        {!isLoading && !error && products.length > 0 ? (
          <ul className="card-grid two-column" aria-label="제품 목록">
            {products.map((product) => (
              <li key={product.id} className="card">
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </>
  );
}
