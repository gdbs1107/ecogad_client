import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import EmptyState from "../components/common/EmptyState";
import { categories, getCategoryById } from "../data/categories";

const ProductCategoryPage = () => {
  const { categorySlug } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const currentCategory = getCategoryById(categorySlug);
    setCategory(currentCategory);

    // 향후 어드민 등록 데이터 연동 시 API 조회로 교체
    setProducts([]);
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="container section category-state-wrap">
        <h2 className="heading-2">존재하지 않는 카테고리입니다.</h2>
        <Link to="/products" className="btn btn-primary category-state-button">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="product-category-page">
      <PageHero
        title={category.name}
        subtitle={category.description}
        bgImage="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2574&auto=format&fit=crop"
        imageAlt={`${category.name} 카테고리 대표 이미지`}
      />

      <section className="section container">
        <div className="product-category-tabs" aria-label="제품 카테고리 탭">
          {categories.map((item) => {
            const isActive = item.id === categorySlug;
            return (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className={`btn btn-outline product-category-tab ${isActive ? "active" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id}>{product.name}</div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="등록된 제품이 없습니다"
            message={`현재 '${category.name}' 카테고리에 등록된 제품 정보가 준비 중입니다. 관리자 페이지에서 제품을 등록하면 이곳에 표시됩니다.`}
            actionText="제품 문의하기"
            onAction={() => {
              window.location.href = "/inquiry";
            }}
          />
        )}
      </section>
    </div>
  );
};

export default ProductCategoryPage;
