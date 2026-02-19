import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";

const navItems = [
  { to: "/company", label: "회사소개" },
  { to: "/products", label: "제품 및 서비스" },
  { to: "/inquiry", label: "견적 문의" },
  { to: "/notices", label: "공지사항" }
];

export default function AppLayout() {
  useEffect(() => {
    const scriptId = "organization-jsonld";
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ecogad",
      url: "https://www.ecogad.com",
      description: "산업용 대형 공조 필터 제조 및 클린룸 유지보수 전문 기업"
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand" aria-label="ecogad 홈으로 이동">
            ecogad
          </NavLink>
          <nav className="global-nav" aria-label="메인 메뉴">
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} ecogad. All rights reserved.</p>
          <p>산업용 공조 필터 제조 및 클린룸 유지보수 전문</p>
        </div>
      </footer>
    </div>
  );
}
