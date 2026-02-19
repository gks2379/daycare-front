import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { BtnPrimary, BtnKakao, BtnNaver, Divider, FormGroup, PageEnter } from '../styles/shared';

const AuthPage = styled(PageEnter)`
  display: flex; align-items: center; justify-content: center;
  min-height: calc(100vh - ${theme.headerHeight}); padding: 40px 24px;
  background: ${theme.colors.bgSection};
`;

const AuthCard = styled.div`
  width: 100%; max-width: 440px; background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.lg}; padding: 40px; box-shadow: ${theme.shadows.lg};
`;

const AuthHeader = styled.div`
  text-align: center; margin-bottom: 32px;
  h1 { font-size: 1.6rem; margin-bottom: 8px; }
  p { color: ${theme.colors.textSecondary}; font-size: 0.95rem; }
`;

const AuthError = styled.div`
  background: #fef2f2; border: 1px solid #fee2e2; color: ${theme.colors.error};
  padding: 12px 16px; border-radius: ${theme.radius.sm}; font-size: 0.9rem;
  margin-bottom: 20px; text-align: center;
`;

const SocialButtons = styled.div`display: flex; flex-direction: column; gap: 10px;`;

const AuthFooter = styled.p`
  text-align: center; margin-top: 24px; font-size: 0.9rem; color: ${theme.colors.textSecondary};
  a { color: ${theme.colors.primary}; font-weight: 600; &:hover { text-decoration: underline; } }
`;

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(''); setLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || '로그인에 실패했습니다');
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('userName', data.name);
            navigate('/'); window.location.reload();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : '로그인에 실패했습니다');
        } finally { setLoading(false); }
    };

    return (
        <AuthPage>
            <AuthCard>
                <AuthHeader><h1>로그인</h1><p>돌봄마을에 오신 것을 환영합니다</p></AuthHeader>
                {error && <AuthError>{error}</AuthError>}
                <form onSubmit={handleSubmit}>
                    <FormGroup><label htmlFor="email">이메일</label>
                        <input id="email" type="email" placeholder="이메일을 입력하세요" value={email} onChange={e => setEmail(e.target.value)} required /></FormGroup>
                    <FormGroup><label htmlFor="password">비밀번호</label>
                        <input id="password" type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={e => setPassword(e.target.value)} required /></FormGroup>
                    <BtnPrimary type="submit" style={{ width: '100%', padding: '16px 36px', fontSize: '1.05rem' }} disabled={loading}>
                        {loading ? '로그인 중...' : '로그인'}</BtnPrimary>
                </form>
                <Divider>또는</Divider>
                <SocialButtons>
                    <BtnKakao onClick={() => alert('카카오 API 키 설정 후 이용 가능합니다')}>💬 카카오로 로그인</BtnKakao>
                    <BtnNaver onClick={() => alert('네이버 API 키 설정 후 이용 가능합니다')}><strong>N</strong> 네이버로 로그인</BtnNaver>
                </SocialButtons>
                <AuthFooter>아직 계정이 없으신가요? <Link to="/signup">회원가입</Link></AuthFooter>
            </AuthCard>
        </AuthPage>
    );
}
