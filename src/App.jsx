import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import ProductsPage from "./pages/ProductsPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import InquiryPage from "./pages/InquiryPage";
import NoticeListPage from "./pages/NoticeListPage"; // Existing file
import NoticeDetailPage from "./pages/NoticeDetailPage"; // Existing file
import NotFoundPage from "./pages/NotFoundPage"; // Existing file

// Simple Footer for completeness
const Footer = () => (
  <footer style={{ background: 'var(--color-navy-900)', color: 'white', padding: '60px 0', marginTop: 'auto' }}>
    <div className="container" style={{ opacity: 0.7 }}>
      <div style={{ marginBottom: '24px', fontWeight: 700, fontSize: '1.2rem' }}>ECOGAD</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', fontSize: '0.9rem' }}>
        <div>
          <p>경기도 화성시 동탄첨단산업1로 27</p>
          <p>대표전화: 031-123-4567 | 팩스: 031-123-4568</p>
          <p>이메일: sales@ecogad.co.kr</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p>Copyright © 2026 ECOGAD. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:categorySlug" element={<ProductCategoryPage />} />
          <Route path="/inquiry" element={<InquiryPage />} />
          <Route path="/notices" element={<NoticeListPage />} />
          <Route path="/notices/:noticeId" element={<NoticeDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
