import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { fetchNoticeById } from "../services/api/notices";

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
      <div className="container section notice-state-wrap">
        <p className="body-text">공지사항을 불러오는 중입니다...</p>
      </div>
    );
  }

  if (!notice) {
    return (
      <div className="container section notice-state-wrap">
        <h2 className="heading-2">존재하지 않는 게시글입니다.</h2>
        <Link to="/notices" className="btn btn-primary notice-state-button">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="notice-detail-page">
      <PageHero
        title="Notice & News"
        subtitle="에코가드의 최신 소식을 상세히 확인하세요."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="공지사항 상세 페이지"
      />

      <section className="section container">
        <article className="notice-content-area">
          <header className="notice-header">
            <span className="notice-badge notice-badge-header">에코가드 공식 공지</span>
            <h1 className="heading-1">{notice.title}</h1>
            <div className="notice-meta">
              <span>작성일: {notice.publishedAt}</span>
              <span>작성자: 에코가드 운영팀</span>
              <span>조회수: 1,245</span>
            </div>
          </header>

          <div className="notice-body">
            {notice.content.split("\n").map((line, index) => (
              <p key={`${notice.id}-${index}`}>{line}</p>
            ))}
          </div>

          <footer className="notice-footer">
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => navigate("/notices")}
            >
              목록으로
            </button>
            <div className="notice-footer-actions" aria-label="이전 다음 게시글 버튼">
              <button type="button" className="btn btn-outline" disabled>
                이전글
              </button>
              <button type="button" className="btn btn-outline" disabled>
                다음글
              </button>
            </div>
          </footer>
        </article>
      </section>
    </div>
  );
};

export default NoticeDetailPage;
