import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { fetchNoticeList } from "../services/api/notices";

const NoticeListPage = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredNotices = notices.filter((notice) => {
    const keyword = searchTerm.toLowerCase();
    return (
      notice.title.toLowerCase().includes(keyword) ||
      notice.summary.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="notice-list-page">
      <PageHero
        title="Notice & News"
        subtitle="에코가드의 최신 기술 소식과 공지사항을 전해드립니다."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="기업 공지사항 관리 화면"
      />

      <section className="section container">
        <header className="notice-list-toolbar">
          <div>
            <span className="section-eyebrow">LATEST UPDATES</span>
            <h2 className="heading-2 notice-list-title">전체 공지사항</h2>
          </div>

          <div className="notice-search-wrap">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="notice-search-input"
              aria-label="공지사항 검색"
            />
            <span className="notice-search-icon" aria-hidden="true">
              검색
            </span>
          </div>
        </header>

        {isLoading ? (
          <div className="notice-loading">데이터를 불러오는 중입니다...</div>
        ) : filteredNotices.length > 0 ? (
          <div className="notice-table-wrap">
            <table className="notice-table">
              <thead>
                <tr>
                  <th className="notice-col-number">No.</th>
                  <th className="notice-col-type">구분</th>
                  <th>제목</th>
                  <th className="notice-col-date">작성일</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotices.map((notice, index) => (
                  <tr
                    key={notice.id}
                    className="notice-row"
                    onClick={() => navigate(`/notices/${notice.id}`)}
                  >
                    <td className="notice-number-cell">{filteredNotices.length - index}</td>
                    <td className="notice-type-cell">
                      <span className={`notice-badge ${index === 0 ? "urgent" : ""}`}>
                        {index === 0 ? "중요" : "공지"}
                      </span>
                    </td>
                    <td className="notice-title-cell">
                      {notice.title}
                      <p className="notice-summary-cell">{notice.summary}</p>
                    </td>
                    <td className="notice-date-cell">{notice.publishedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="notice-empty">
            <p className="body-text">검색 결과가 없습니다.</p>
          </div>
        )}

        <div className="notice-pagination" aria-label="페이지네이션">
          <button type="button" className="btn btn-outline notice-page-button" aria-current="page">
            1
          </button>
        </div>
      </section>
    </div>
  );
};

export default NoticeListPage;
