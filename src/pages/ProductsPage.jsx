import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { categories } from "../data/categories";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <PageHero
        title="Products & Services"
        subtitle="공항, 반도체, 제약 산업을 위한 고성능 공조 필터 솔루션"
        bgImage="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2574&auto=format&fit=crop"
        imageAlt="산업용 필터 장비"
      />

      <section className="section container">
        <div className="section-header">
          <span className="section-eyebrow">Product Lineup</span>
          <h2>산업별 맞춤 필터 솔루션</h2>
          <p>고객사의 환경에 최적화된 다양한 필터 라인업을 확인하세요.</p>
        </div>

        <div className="card-grid product-card-grid">
          {categories.map((category) => (
            <Link to={`/products/${category.id}`} key={category.id} className="product-category-card">
              <div className="product-category-card-body">
                <div>
                  <h3 className="heading-3 product-category-title">{category.name}</h3>
                  <p className="body-text">{category.description}</p>
                </div>

                <div className="product-category-link">
                  View Products
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
