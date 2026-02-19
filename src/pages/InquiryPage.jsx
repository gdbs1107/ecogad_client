import { useState } from "react";
import PageHero from "../components/common/PageHero";
import usePageMeta from "../hooks/usePageMeta";
import { submitInquiry } from "../services/api/inquiries";

const initialForm = {
  name: "",
  companyName: "",
  phone: "",
  email: "",
  message: "",
  privacyAgreed: false
};

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function InquiryPage() {
  usePageMeta("견적 문의", "에코가드 제품 및 서비스 견적 문의를 접수하세요.");

  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setResultMessage("");
    setErrorMessage("");

    if (!form.name || !form.companyName || !form.phone || !form.email || !form.message) {
      setErrorMessage("필수 항목을 모두 입력해주세요.");
      return;
    }

    if (!validateEmail(form.email)) {
      setErrorMessage("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (!form.privacyAgreed) {
      setErrorMessage("개인정보 처리방침 동의가 필요합니다.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await submitInquiry(form);
      setResultMessage(response.message);
      setForm(initialForm);
    } catch (submitError) {
      setErrorMessage("문의 접수에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        title="견적 문의"
        description="프로젝트 조건을 남겨주시면 담당자가 확인 후 연락드립니다."
        imageUrl="https://images.unsplash.com/photo-1581091870622-2f5de8f6f32b?auto=format&fit=crop&w=1800&q=80"
        imageAlt="기술 문서를 검토하는 엔지니어"
      />

      <section className="section container" aria-labelledby="inquiry-form-title">
        <h2 id="inquiry-form-title">문의 작성</h2>
        <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
          <label>
            이름
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            회사명
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            연락처
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </label>

          <label>
            이메일
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            문의내용
            <textarea name="message" value={form.message} onChange={handleChange} rows={6} required />
          </label>

          <label className="checkbox-row">
            <input
              type="checkbox"
              name="privacyAgreed"
              checked={form.privacyAgreed}
              onChange={handleChange}
            />
            개인정보 처리방침에 동의합니다.
          </label>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "제출 중..." : "제출"}
          </button>

          {resultMessage ? <p className="status-message success">{resultMessage}</p> : null}
          {errorMessage ? <p className="status-message error">{errorMessage}</p> : null}
        </form>
      </section>
    </>
  );
}
