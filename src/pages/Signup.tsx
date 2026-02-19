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

export default function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '', passwordConfirm: '', name: '', phone: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const updateField = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        if (form.password !== form.passwordConfirm) { setError('비밀번호가 일치하지 않습니다'); return; }
        if (form.password.length < 8) { setError('비밀번호는 8자 이상이어야 합니다'); return; }
        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: form.email, password: form.password, name: form.name, phone: form.phone }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || '회원가입에 실패했습니다');
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('userName', data.name);
            navigate('/'); window.location.reload();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : '회원가입에 실패했습니다');
        } finally { setLoading(false); }
    };

    return (
        <AuthPage>
            <AuthCard>
                <AuthHeader><h1>회원가입</h1><p>돌봄마을과 함께 시작하세요</p></AuthHeader>
                {error && <AuthError>{error}</AuthError>}
                <form onSubmit={handleSubmit}>
                    <FormGroup><label htmlFor="name">이름 (보호자)</label>
                        <input id="name" type="text" placeholder="이름을 입력하세요" value={form.name} onChange={e => updateField('name', e.target.value)} required /></FormGroup>
                    <FormGroup><label htmlFor="email">이메일</label>
                        <input id="email" type="email" placeholder="이메일을 입력하세요" value={form.email} onChange={e => updateField('email', e.target.value)} required /></FormGroup>
                    <FormGroup><label htmlFor="phone">연락처</label>
                        <input id="phone" type="tel" placeholder="010-0000-0000" value={form.phone} onChange={e => updateField('phone', e.target.value)} required /></FormGroup>
                    <FormGroup><label htmlFor="password">비밀번호</label>
                        <input id="password" type="password" placeholder="8자 이상 입력하세요" value={form.password} onChange={e => updateField('password', e.target.value)} required /></FormGroup>
                    <FormGroup><label htmlFor="passwordConfirm">비밀번호 확인</label>
                        <input id="passwordConfirm" type="password" placeholder="비밀번호를 다시 입력하세요" value={form.passwordConfirm} onChange={e => updateField('passwordConfirm', e.target.value)} required /></FormGroup>
                    <BtnPrimary type="submit" style={{ width: '100%', padding: '16px 36px', fontSize: '1.05rem' }} disabled={loading}>
                        {loading ? '가입 중...' : '회원가입'}</BtnPrimary>
                </form>
                <Divider>또는</Divider>
                <SocialButtons>
                    <BtnKakao onClick={() => alert('카카오 API 키 설정 후 이용 가능합니다')}>💬 카카오로 시작하기</BtnKakao>
                    <BtnNaver onClick={() => alert('네이버 API 키 설정 후 이용 가능합니다')}><strong>N</strong> 네이버로 시작하기</BtnNaver>
                </SocialButtons>
                <AuthFooter>이미 계정이 있으신가요? <Link to="/login">로그인</Link></AuthFooter>
            </AuthCard>
        </AuthPage>
    );
}
