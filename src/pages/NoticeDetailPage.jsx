import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { fetchNoticeById } from '../services/api/notices';

const NoticeDetailPage = () => {
  const { noticeId } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadNotice() {
      try {
        const response = await fetchNoticeById(noticeId);
        setNotice(response);
      } catch (error) {
        console.error("Failed to fetch notice:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadNotice();
  }, [noticeId]);

  if (isLoading) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <p className="body-text">공지사항을 불러오는 중입니다...</p>
      </div>
    );
  }

  if (!notice) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2 className="heading-2">존재하지 않는 게시글입니다.</h2>
        <Link to="/notices" className="btn btn-primary" style={{ marginTop: '24px' }}>목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div>
      <PageHero 
        title="Notice & News" 
        subtitle="에코가드의 최신 소식을 상세히 확인하세요."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="section container">
        <article className="notice-content-area">
          <header className="notice-header">
            <span className="notice-badge" style={{ marginBottom: '16px' }}>에코가드 공식 공지</span>
            <h1 className="heading-1">{notice.title}</h1>
            <div className="notice-meta">
              <span>작성일: {notice.publishedAt}</span>
              <span>작성자: 에코가드 운영팀</span>
              <span>조회수: 1,245</span>
            </div>
          </header>

          <div className="notice-body">
            {/* Split content by newlines to render as paragraphs for better readability */}
            {notice.content.split('\n').map((line, idx) => (
              <p key={idx} style={{ marginBottom: '24px' }}>{line}</p>
            ))}
          </div>

          <footer className="notice-footer">
            <button 
              className="btn btn-outline" 
              onClick={() => navigate('/notices')}
              style={{ padding: '12px 32px' }}
            >
              목록으로
            </button>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-outline" disabled style={{ opacity: 0.5 }}>이전글</button>
              <button className="btn btn-outline" disabled style={{ opacity: 0.5 }}>다음글</button>
            </div>
          </footer>
        </article>
      </section>
    </div>
  );
};

export default NoticeDetailPage;
