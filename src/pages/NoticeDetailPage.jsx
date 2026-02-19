import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import { fetchNoticeById } from "../services/api/notices";
import NotFoundPage from "./NotFoundPage";

export default function NoticeDetailPage() {
  const { noticeId } = useParams();
  const [notice, setNotice] = useState(undefined);

  useEffect(() => {
    let active = true;

    async function loadNotice() {
      const response = await fetchNoticeById(noticeId);
      if (active) {
        setNotice(response);
      }
    }

    loadNotice();
    return () => {
      active = false;
    };
  }, [noticeId]);

  usePageMeta(
    notice ? notice.title : "공지사항 상세",
    notice ? notice.summary : "공지사항 정보를 확인하세요."
  );

  if (notice === undefined) {
    return (
      <section className="section container">
        <p className="status-message">공지 상세를 불러오는 중입니다.</p>
      </section>
    );
  }

  if (!notice) {
    return <NotFoundPage />;
  }

  return (
    <section className="section container" aria-labelledby="notice-title">
      <article className="notice-detail">
        <header>
          <h1 id="notice-title">{notice.title}</h1>
          <time dateTime={notice.publishedAt}>{notice.publishedAt}</time>
        </header>
        <p>{notice.content}</p>
        <Link to="/notices" className="text-link">
          목록으로 이동
        </Link>
      </article>
    </section>
  );
}
