import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';

const InquiryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    // API Call Simulate
    console.log('Sending Inquiry:', formData);
    alert('문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');
  };

  const inputStyle = {
    width: '100%',
    padding: '16px',
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-sm)',
    fontSize: '1rem',
    outline: 'none',
    marginBottom: '24px'
  };

  return (
    <div>
      <PageHero 
        title="Get a Quote" 
        subtitle="프로젝트 규모와 요구사항을 남겨주시면 전문가가 상세한 견적을 제안드립니다."
        bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section container">
        <SectionHeader 
          eyebrow="CONTACT US" 
          title="견적 문의" 
          description="빠른 시일 내에 이메일 또는 유선으로 회신 드리겠습니다." 
        />

        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-navy-50)', padding: '60px', borderRadius: 'var(--radius-md)' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label className="body-text" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>이름 *</label>
                <input type="text" name="name" required style={inputStyle} onChange={handleChange} />
              </div>
              <div>
                <label className="body-text" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>회사명</label>
                <input type="text" name="company" style={inputStyle} onChange={handleChange} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label className="body-text" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>연락처 *</label>
                <input type="tel" name="phone" required style={inputStyle} onChange={handleChange} />
              </div>
              <div>
                <label className="body-text" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>이메일 *</label>
                <input type="email" name="email" required style={inputStyle} onChange={handleChange} />
              </div>
            </div>

            <div>
              <label className="body-text" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>문의내용 *</label>
              <textarea name="message" required rows="5" style={{ ...inputStyle, resize: 'vertical' }} onChange={handleChange}></textarea>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
              <input type="checkbox" name="agree" id="agree" checked={formData.agree} onChange={handleChange} style={{ width: '20px', height: '20px', marginRight: '12px' }} />
              <label htmlFor="agree" className="body-text" style={{ fontSize: '0.9rem' }}>
                [필수] 개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }}>
              문의 접수하기
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default InquiryPage;
