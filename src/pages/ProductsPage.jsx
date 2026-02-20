import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { categories } from '../data/categories';

const ProductsPage = () => {
  return (
    <div>
      <PageHero 
        title="Products & Services" 
        subtitle="공항, 반도체, 제약 산업을 위한 고성능 공조 필터 솔루션"
        bgImage="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2574&auto=format&fit=crop"
      />
      
      <section className="section container">
        <div className="section-header">
          <span className="section-eyebrow">Product Lineup</span>
          <h2>산업별 맞춤 필터 솔루션</h2>
          <p>고객사의 환경에 최적화된 다양한 필터 라인업을 확인하세요.</p>
        </div>

        <div className="card-grid">
          {categories.map((category) => (
            <Link to={`/products/${category.id}`} key={category.id} className="product-category-card">
              <div style={{
                padding: '40px 32px',
                border: '1px solid var(--color-gray-200)',
                borderRadius: 'var(--radius-md)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'white',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'var(--color-blue-600)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              >
                <div>
                  <h3 className="heading-3" style={{ color: 'var(--color-blue-600)' }}>{category.name}</h3>
                  <p className="body-text">{category.description}</p>
                </div>
                <div style={{ marginTop: '24px', fontWeight: 600, color: 'var(--color-navy-900)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  View Products 
                  <span style={{ fontSize: '1.2em' }}>→</span>
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
