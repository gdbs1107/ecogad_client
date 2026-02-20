import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta("페이지를 찾을 수 없음", "요청한 페이지를 찾을 수 없습니다.");

  return (
    <section className="section container not-found" aria-labelledby="not-found-title">
      <h1 id="not-found-title">페이지를 찾을 수 없습니다</h1>
      <p>입력한 주소를 확인하거나 아래 버튼을 통해 홈으로 이동하세요.</p>
      <Link to="/" className="btn btn-primary">
        홈으로 이동
      </Link>
    </section>
  );
}
