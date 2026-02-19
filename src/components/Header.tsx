import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const HeaderWrap = styled.header`
  position: fixed; top: 0; left: 0; right: 0;
  height: ${theme.headerHeight};
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${theme.colors.borderLight};
  z-index: 1000;
`;

const Inner = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  height: 100%; max-width: ${theme.maxWidth}; margin: 0 auto; padding: 0 24px;
`;

const Logo = styled(Link)`
  display: flex; align-items: center; gap: 8px;
  font-size: 1.3rem; font-weight: 700; color: ${theme.colors.primary};
`;

const Nav = styled.nav<{ open: boolean }>`
  display: flex; align-items: center; gap: 8px;

  @media (max-width: 768px) {
    position: fixed; top: ${theme.headerHeight}; left: 0; right: 0;
    background: white; flex-direction: column; padding: 24px; gap: 12px;
    box-shadow: ${theme.shadows.lg};
    transform: ${p => p.open ? 'translateY(0)' : 'translateY(-120%)'};
    transition: transform ${theme.transition.base};
  }
`;

const NavLink = styled(Link) <{ $active?: boolean }>`
  padding: 8px 16px; border-radius: ${theme.radius.sm};
  font-weight: ${p => p.$active ? 600 : 500}; font-size: 0.95rem;
  color: ${p => p.$active ? theme.colors.primary : theme.colors.textSecondary};
  transition: all ${theme.transition.fast};
  &:hover { color: ${theme.colors.primary}; background: ${theme.colors.primaryBg}; }
`;

const AuthWrap = styled.div`
  display: flex; gap: 8px; margin-left: 16px;
  @media (max-width: 768px) { margin-left: 0; flex-direction: column; width: 100%; }
`;

const AuthLink = styled(Link) <{ variant?: 'primary' | 'secondary' }>`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 8px 18px; border-radius: ${theme.radius.sm};
  font-size: 0.85rem; font-weight: 600; transition: all ${theme.transition.base};
  background: ${p => p.variant === 'primary' ? theme.colors.primary : theme.colors.bgCard};
  color: ${p => p.variant === 'primary' ? theme.colors.textInverse : theme.colors.primary};
  border: ${p => p.variant === 'primary' ? 'none' : `2px solid ${theme.colors.primary}`};
  &:hover {
    background: ${p => p.variant === 'primary' ? theme.colors.primaryLight : theme.colors.primaryBg};
    transform: translateY(-2px);
  }
  @media (max-width: 768px) { width: 100%; }
`;

const LogoutBtn = styled.button`
  padding: 8px 18px; border-radius: ${theme.radius.sm}; font-size: 0.85rem;
  font-weight: 600; background: ${theme.colors.bgCard}; color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  &:hover { background: ${theme.colors.primaryBg}; }
`;

const Hamburger = styled.button<{ open: boolean }>`
  display: none; flex-direction: column; gap: 5px; background: none; padding: 4px;
  span {
    display: block; width: 24px; height: 2px; background: ${theme.colors.text};
    border-radius: 2px; transition: all ${theme.transition.base};
  }
  span:nth-of-type(1) { transform: ${p => p.open ? 'rotate(45deg) translate(5px,5px)' : 'none'}; }
  span:nth-of-type(2) { opacity: ${p => p.open ? 0 : 1}; }
  span:nth-of-type(3) { transform: ${p => p.open ? 'rotate(-45deg) translate(5px,-5px)' : 'none'}; }
  @media (max-width: 768px) { display: flex; }
`;

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    const isLoggedIn = !!localStorage.getItem('accessToken');

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    };

    return (
        <HeaderWrap>
            <Inner>
                <Logo to="/">
                    <span>🌿</span><span>돌봄마을</span>
                </Logo>
                <Nav open={menuOpen}>
                    <NavLink to="/centers" $active={isActive('/centers')} onClick={() => setMenuOpen(false)}>센터 찾기</NavLink>
                    <NavLink to="/about" $active={isActive('/about')} onClick={() => setMenuOpen(false)}>서비스 소개</NavLink>
                    {isLoggedIn ? (
                        <>
                            <NavLink to="/mypage" $active={isActive('/mypage')} onClick={() => setMenuOpen(false)}>마이페이지</NavLink>
                            <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
                        </>
                    ) : (
                        <AuthWrap>
                            <AuthLink to="/login" variant="secondary" onClick={() => setMenuOpen(false)}>로그인</AuthLink>
                            <AuthLink to="/signup" variant="primary" onClick={() => setMenuOpen(false)}>회원가입</AuthLink>
                        </AuthWrap>
                    )}
                </Nav>
                <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
                    <span /><span /><span />
                </Hamburger>
            </Inner>
        </HeaderWrap>
    );
}
