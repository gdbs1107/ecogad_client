import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import { fetchNoticeList } from '../services/api/notices';

const NoticeListPage = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadNotices() {
      try {
        const response = await fetchNoticeList();
        setNotices(response || []);
      } catch (error) {
        console.error("Failed to fetch notices:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadNotices();
  }, []);

  const filteredNotices = notices.filter(notice => 
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <PageHero 
        title="Notice & News" 
        subtitle="에코가드의 최신 기술 소식과 공지사항을 전해드립니다."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-eyebrow">LATEST UPDATES</span>
            <h2 className="heading-2" style={{ marginBottom: 0 }}>전체 공지사항</h2>
          </div>
          
          <div style={{ position: 'relative', maxWidth: '300px', width: '100%' }}>
            <input 
              type="text" 
              placeholder="검색어를 입력하세요" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                paddingLeft: '40px',
                border: '1px solid var(--color-gray-200)',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }}>
              🔍
            </span>
          </div>
        </div>

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--color-gray-400)' }}>
            데이터를 불러오는 중입니다...
          </div>
        ) : filteredNotices.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table className="notice-table">
              <thead>
                <tr>
                  <th style={{ width: '80px', textAlign: 'center' }}>No.</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>구분</th>
                  <th>제목</th>
                  <th style={{ width: '150px', textAlign: 'center' }}>작성일</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotices.map((notice, index) => (
                  <tr key={notice.id} className="notice-row" onClick={() => navigate(`/notices/${notice.id}`)}>
                    <td style={{ textAlign: 'center', color: 'var(--color-gray-400)' }}>{filteredNotices.length - index}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`notice-badge ${index === 0 ? 'urgent' : ''}`}>
                        {index === 0 ? '중요' : '공지'}
                      </span>
                    </td>
                    <td className="notice-title-cell">
                      {notice.title}
                      <p style={{ fontWeight: 400, fontSize: '0.9rem', color: 'var(--color-gray-400)', marginTop: '4px' }}>
                        {notice.summary}
                      </p>
                    </td>
                    <td className="notice-date-cell" style={{ textAlign: 'center' }}>
                      {notice.publishedAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '100px 0', background: 'var(--color-navy-50)', borderRadius: 'var(--radius-md)' }}>
            <p className="body-text">검색 결과가 없습니다.</p>
          </div>
        )}

        {/* Mock Pagination */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '60px' }}>
          {[1].map(page => (
            <button key={page} className="btn btn-outline" style={{ padding: '8px 16px', minWidth: '40px', background: 'var(--color-navy-900)', color: 'white' }}>
              {page}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NoticeListPage;
