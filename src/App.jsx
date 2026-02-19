import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import CeoGreetingPage from "./pages/CeoGreetingPage";
import BusinessAreaPage from "./pages/BusinessAreaPage";
import ProductsPage from "./pages/ProductsPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import InquiryPage from "./pages/InquiryPage";
import NoticeListPage from "./pages/NoticeListPage";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/ceo-greeting" element={<CeoGreetingPage />} />
        <Route path="/company/business-area" element={<BusinessAreaPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:categorySlug" element={<ProductCategoryPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/notices" element={<NoticeListPage />} />
        <Route path="/notices/:noticeId" element={<NoticeDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
