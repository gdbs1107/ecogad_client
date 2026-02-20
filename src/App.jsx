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
  <footer className="site-footer">
    <div className="container footer-inner">
      <div className="footer-brand">ECOGAD</div>
      <div className="footer-grid">
        <div>
          <p>경기도 화성시 동탄첨단산업1로 27</p>
          <p>대표전화: 031-123-4567 | 팩스: 031-123-4568</p>
          <p>이메일: sales@ecogad.co.kr</p>
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2026 ECOGAD. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
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
