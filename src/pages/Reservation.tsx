import { useState, type FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Container, BtnPrimary, BtnSecondary, FormGroup, PageEnter, SectionTitle, SectionSubtitle } from '../styles/shared';

const Page = styled(PageEnter)`padding: 40px 0 80px;`;
const Header = styled.div`text-align: center; margin-bottom: 40px;`;

const Grid = styled.div`
  display: grid; grid-template-columns: 1fr 340px; gap: 32px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const FormWrap = styled.form`display: flex; flex-direction: column; gap: 24px;`;

const FormSection = styled.div`
  background: ${theme.colors.bgCard}; border-radius: ${theme.radius.md};
  padding: 28px; box-shadow: ${theme.shadows.sm};
  h3 { font-size: 1.1rem; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid ${theme.colors.borderLight}; }
`;

const TextArea = styled.textarea`
  font-family: 'Noto Sans KR', sans-serif; font-size: 1rem; border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm}; padding: 12px 16px; width: 100%; resize: vertical; outline: none;
  transition: border-color ${theme.transition.fast};
  &:focus { border-color: ${theme.colors.primary}; box-shadow: 0 0 0 3px rgba(45,138,110,0.1); }
`;

const TimeSlots = styled.div`display: flex; gap: 8px; flex-wrap: wrap;`;

const TimeSlot = styled.button<{ $active: boolean }>`
  padding: 10px 18px; border: 1px solid ${p => p.$active ? theme.colors.primary : theme.colors.border};
  border-radius: ${theme.radius.sm}; background: ${p => p.$active ? theme.colors.primary : theme.colors.bgCard};
  font-size: 0.9rem; font-weight: 500;
  color: ${p => p.$active ? 'white' : theme.colors.textSecondary};
  &:hover { border-color: ${theme.colors.primary}; color: ${theme.colors.primary}; }
`;

const SidebarCard = styled.div`
  background: ${theme.colors.bgCard}; border-radius: ${theme.radius.md}; padding: 28px;
  box-shadow: ${theme.shadows.md}; position: sticky; top: calc(${theme.headerHeight} + 24px);
`;

const CenterInfo = styled.div`
  margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid ${theme.colors.borderLight};
  h4 { font-size: 1.05rem; margin-bottom: 10px; }
  p { font-size: 0.9rem; color: ${theme.colors.textSecondary}; margin-bottom: 6px; }
`;

const Notice = styled.div`
  h4 { font-size: 0.95rem; margin-bottom: 10px; }
  li {
    font-size: 0.85rem; color: ${theme.colors.textSecondary}; margin-bottom: 8px;
    padding-left: 12px; position: relative;
    &::before { content: '•'; position: absolute; left: 0; color: ${theme.colors.primary}; }
  }
`;

const SuccessCard = styled.div`
  max-width: 520px; margin: 60px auto; background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.lg}; padding: 48px; text-align: center; box-shadow: ${theme.shadows.lg};
  h2 { font-size: 1.4rem; margin-bottom: 12px; }
  & > p { color: ${theme.colors.textSecondary}; margin-bottom: 24px; line-height: 1.7; }
`;

const SuccessIcon = styled.div`font-size: 3rem; margin-bottom: 16px;`;

const SuccessInfo = styled.div`
  background: ${theme.colors.primaryBg}; border-radius: ${theme.radius.sm}; padding: 16px; text-align: left;
  p { font-size: 0.9rem; margin-bottom: 6px; }
`;

export default function Reservation() {
    const { centerId: _centerId } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ date: '', time: '', elderlyName: '', elderlyAge: '', elderlyCondition: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const updateField = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));
    const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

    const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

    if (submitted) {
        return (
            <Page><Container>
                <SuccessCard>
                    <SuccessIcon>✅</SuccessIcon>
                    <h2>예약 상담 신청이 완료되었습니다!</h2>
                    <p>센터에서 확인 후 연락드리겠습니다.<br />영업일 기준 1~2일 내 답변을 받으실 수 있습니다.</p>
                    <SuccessInfo><p>📅 희망 날짜: {form.date}</p><p>🕐 희망 시간: {form.time}</p><p>👤 어르신 성함: {form.elderlyName}</p></SuccessInfo>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
                        <BtnPrimary onClick={() => navigate('/mypage')}>내 예약 확인</BtnPrimary>
                        <BtnSecondary onClick={() => navigate('/')}>홈으로</BtnSecondary>
                    </div>
                </SuccessCard>
            </Container></Page>
        );
    }

    return (
        <Page><Container>
            <Header><SectionTitle>예약 상담 신청</SectionTitle><SectionSubtitle>아래 정보를 입력하시면 센터에서 확인 후 연락드립니다</SectionSubtitle></Header>
            <Grid>
                <FormWrap onSubmit={handleSubmit}>
                    <FormSection>
                        <h3>📅 방문 희망일</h3>
                        <FormGroup><label htmlFor="date">날짜 선택</label><input id="date" type="date" value={form.date} onChange={e => updateField('date', e.target.value)} required /></FormGroup>
                        <FormGroup>
                            <label>시간 선택</label>
                            <TimeSlots>{timeSlots.map(t => <TimeSlot type="button" key={t} $active={form.time === t} onClick={() => updateField('time', t)}>{t}</TimeSlot>)}</TimeSlots>
                        </FormGroup>
                    </FormSection>
                    <FormSection>
                        <h3>👤 어르신 정보</h3>
                        <FormGroup><label htmlFor="elderlyName">성함</label><input id="elderlyName" type="text" placeholder="어르신 성함" value={form.elderlyName} onChange={e => updateField('elderlyName', e.target.value)} required /></FormGroup>
                        <FormGroup><label htmlFor="elderlyAge">나이</label><input id="elderlyAge" type="number" placeholder="나이" value={form.elderlyAge} onChange={e => updateField('elderlyAge', e.target.value)} required /></FormGroup>
                        <FormGroup><label htmlFor="elderlyCondition">건강 상태 / 돌봄 필요 사항</label><TextArea id="elderlyCondition" rows={3} placeholder="예: 치매 초기 단계, 보행 보조 필요" value={form.elderlyCondition} onChange={e => updateField('elderlyCondition', e.target.value)} /></FormGroup>
                    </FormSection>
                    <FormSection>
                        <h3>💬 추가 요청 사항</h3>
                        <FormGroup><TextArea id="message" rows={3} placeholder="센터에 전달하고 싶은 사항이 있으시면 작성해주세요" value={form.message} onChange={e => updateField('message', e.target.value)} /></FormGroup>
                    </FormSection>
                    <BtnPrimary type="submit" style={{ width: '100%', padding: '16px 36px', fontSize: '1.05rem' }}>예약 상담 신청하기 →</BtnPrimary>
                </FormWrap>
                <aside>
                    <SidebarCard>
                        <h3 style={{ marginBottom: 16 }}>예약 센터</h3>
                        <CenterInfo><h4>행복한 돌봄센터</h4><p>📍 서울 강남구 강남대로 123</p><p>📞 02-1234-5678</p><p>🕐 평일 08:00 - 18:00</p></CenterInfo>
                        <Notice><h4>📌 안내 사항</h4><ul><li>예약 신청 후 센터에서 확인 전화를 드립니다</li><li>방문 상담은 무료입니다</li><li>건강보험 장기요양등급 관련 상담도 가능합니다</li></ul></Notice>
                    </SidebarCard>
                </aside>
            </Grid>
        </Container></Page>
    );
}
