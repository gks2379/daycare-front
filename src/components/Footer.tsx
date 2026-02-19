import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const FooterWrap = styled.footer`
  background: #2c2c2c; color: #ccc; padding: 60px 0 24px; margin-top: 80px;
`;

const Inner = styled.div`
  max-width: ${theme.maxWidth}; margin: 0 auto; padding: 0 24px;
`;

const Grid = styled.div`
  display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 30px; }
`;

const Brand = styled.div`
  h3 { color: #fff; font-size: 1.3rem; margin-bottom: 12px; }
  p { font-size: 0.9rem; line-height: 1.7; }
`;

const Links = styled.div`
  h4 { color: #fff; font-size: 0.95rem; margin-bottom: 16px; }
  a, p { display: block; font-size: 0.9rem; margin-bottom: 10px; color: #aaa; transition: color 0.2s; }
  a:hover { color: ${theme.colors.primaryLight}; }
`;

const Bottom = styled.div`
  border-top: 1px solid #444; padding-top: 20px;
  text-align: center; font-size: 0.85rem; color: #777;
`;

export default function Footer() {
    return (
        <FooterWrap>
            <Inner>
                <Grid>
                    <Brand>
                        <h3>🌿 돌봄마을</h3>
                        <p>어르신을 위한 따뜻한 돌봄 서비스.<br />믿을 수 있는 돌봄 센터를 쉽고 빠르게 찾아보세요.</p>
                    </Brand>
                    <Links>
                        <h4>서비스</h4>
                        <a href="/centers">센터 찾기</a>
                        <a href="/about">서비스 소개</a>
                        <a href="/signup">회원가입</a>
                    </Links>
                    <Links>
                        <h4>고객 지원</h4>
                        <a href="#">자주 묻는 질문</a>
                        <a href="#">이용약관</a>
                        <a href="#">개인정보처리방침</a>
                    </Links>
                    <Links>
                        <h4>연락처</h4>
                        <p>📞 1588-0000</p>
                        <p>📧 help@dolbom.kr</p>
                        <p>🕐 평일 09:00 - 18:00</p>
                    </Links>
                </Grid>
                <Bottom><p>© 2026 돌봄마을. All rights reserved.</p></Bottom>
            </Inner>
        </FooterWrap>
    );
}
