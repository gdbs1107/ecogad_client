import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import EmptyState from '../components/common/EmptyState';
import { categories, getCategoryById } from '../data/categories';

const ProductCategoryPage = () => {
  const { categorySlug } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]); // Currently empty, mimicking no DB connection yet

  useEffect(() => {
    // 1. Fetch category metadata (Simulated)
    const currentCategory = getCategoryById(categorySlug);
    setCategory(currentCategory);
    
    // 2. Fetch products for this category (Simulated API call)
    // In the future, this will be: api.get(`/products?category=${categorySlug}`)
    setProducts([]); // Intentionally empty as per requirement
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2>존재하지 않는 카테고리입니다.</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div>
      <PageHero 
        title={category.name} 
        subtitle={category.description}
        bgImage="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2574&auto=format&fit=crop"
      />
      
      <section className="section container">
        {/* Breadcrumb & Navigation (Optional for UX) */}
        <div style={{ marginBottom: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {categories.map(c => (
            <Link 
              key={c.id} 
              to={`/products/${c.id}`}
              className={`btn btn-outline ${c.id === categorySlug ? 'active' : ''}`}
              style={{ 
                padding: '8px 16px', 
                fontSize: '0.9rem',
                background: c.id === categorySlug ? 'var(--color-navy-900)' : 'white',
                color: c.id === categorySlug ? 'white' : 'var(--color-navy-900)',
                borderColor: c.id === categorySlug ? 'var(--color-navy-900)' : 'var(--color-gray-200)'
              }}
            >
              {c.name}
            </Link>
          ))}
        </div>

        {/* Dynamic Content Area */}
        {products.length > 0 ? (
          <div className="product-grid">
            {/* Future Product Card Component will go here */}
            {products.map(product => (
              <div key={product.id}>{product.name}</div>
            ))}
          </div>
        ) : (
          /* The Core Requirement: Empty State UI */
          <EmptyState 
            title="등록된 제품이 없습니다"
            message={`현재 '${category.name}' 카테고리에 등록된 제품 정보가 준비 중입니다. 관리자 페이지에서 제품을 등록하면 이곳에 표시됩니다.`}
            actionText="제품 문의하기"
            onAction={() => window.location.href = '/inquiry'}
          />
        )}
      </section>
    </div>
  );
};

export default ProductCategoryPage;
