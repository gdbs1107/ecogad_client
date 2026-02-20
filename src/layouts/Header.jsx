import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '회사소개', path: '/company' },
    { name: '제품 및 서비스', path: '/products' },
    { name: '견적 문의', path: '/inquiry' },
    { name: '공지사항', path: '/notices' },
  ];

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: scrolled ? '1px solid var(--color-gray-200)' : '1px solid transparent',
    transition: 'all 0.3s ease',
    height: 'var(--header-height)',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {/* Logo */}
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-900)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', background: 'var(--color-blue-600)', borderRadius: '4px' }}></div>
          ECOGAD
        </Link>

        {/* Navigation */}
        <nav>
          <ul style={{ display: 'flex', gap: '32px' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: location.pathname.startsWith(link.path) ? 'var(--color-blue-600)' : 'var(--color-gray-600)',
                    position: 'relative',
                    padding: '8px 0',
                  }}
                >
                  {link.name}
                  {location.pathname.startsWith(link.path) && (
                    <span style={{
                      position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: 'var(--color-blue-600)'
                    }}></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
