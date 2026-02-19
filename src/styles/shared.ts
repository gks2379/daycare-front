import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { theme } from './theme';

/* Container */
export const Container = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

/* Button base */
const btnBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: ${theme.radius.sm};
  font-weight: 600;
  font-size: 0.95rem;
  transition: all ${theme.transition.base};
  text-decoration: none;
`;

export const BtnPrimary = styled.button`
  ${btnBase}
  background: ${theme.colors.primary};
  color: ${theme.colors.textInverse};
  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.hover};
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none !important; }
`;

export const BtnSecondary = styled.button`
  ${btnBase}
  background: ${theme.colors.bgCard};
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  &:hover {
    background: ${theme.colors.primaryBg};
    transform: translateY(-2px);
  }
`;

export const BtnKakao = styled.button`
  ${btnBase}
  background: ${theme.colors.kakao};
  color: ${theme.colors.kakaoText};
  width: 100%;
  &:hover { background: ${theme.colors.kakaoHover}; transform: translateY(-2px); }
`;

export const BtnNaver = styled.button`
  ${btnBase}
  background: ${theme.colors.naver};
  color: #fff;
  width: 100%;
  &:hover { background: ${theme.colors.naverHover}; transform: translateY(-2px); }
`;

/* Link styled as button */
export const LinkBtnPrimary = styled.a`
  ${btnBase}
  background: ${theme.colors.primary};
  color: ${theme.colors.textInverse};
  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.hover};
  }
`;

export const LinkBtnSecondary = styled.a`
  ${btnBase}
  background: ${theme.colors.bgCard};
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  &:hover {
    background: ${theme.colors.primaryBg};
    transform: translateY(-2px);
  }
`;

/* Card */
export const Card = styled.div`
  background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadows.sm};
  overflow: hidden;
  transition: all ${theme.transition.base};
  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateY(-4px);
  }
`;

/* Section Title */
export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 40px;
`;

/* Badge */
export const Badge = styled.span<{ variant?: 'primary' | 'secondary' }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${p => p.variant === 'secondary' ? '#fff3e0' : theme.colors.primaryBg};
  color: ${p => p.variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
`;

/* Stars */
export const Stars = styled.span`
  color: #f4a261;
  font-size: 1rem;
  letter-spacing: 2px;
`;

/* Divider */
export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
  color: ${theme.colors.textLight};
  font-size: 0.85rem;
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${theme.colors.border};
  }
`;

/* Form */
export const FormGroup = styled.div`
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

/* Page enter animation */
export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageEnter = styled.div`
  animation: ${fadeInUp} 0.5s ease forwards;
`;
