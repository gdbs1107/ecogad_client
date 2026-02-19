import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PageHero from "../components/common/PageHero";
import usePageMeta from "../hooks/usePageMeta";
import { fetchNoticeList } from "../services/api/notices";

export default function NoticeListPage() {
  usePageMeta("공지사항", "에코가드의 최신 공지사항을 확인하세요.");
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadNotices() {
      const response = await fetchNoticeList();
      if (active) {
        setNotices(response);
        setIsLoading(false);
      }
    }

    loadNotices();
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <PageHero
        title="공지사항"
        description="서비스 및 운영 관련 주요 안내를 확인하세요."
        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
        imageAlt="산업 인프라와 네트워크를 표현한 야경 이미지"
      />

      <section className="section container" aria-labelledby="notice-list-title">
        <h2 id="notice-list-title">게시글 목록</h2>
        {isLoading ? (
          <p className="status-message">공지사항을 불러오는 중입니다.</p>
        ) : (
          <ul className="notice-list">
            {notices.map((notice) => (
              <li key={notice.id}>
                <article>
                  <h3>
                    <Link to={`/notices/${notice.id}`}>{notice.title}</Link>
                  </h3>
                  <p>{notice.summary}</p>
                  <time dateTime={notice.publishedAt}>{notice.publishedAt}</time>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
