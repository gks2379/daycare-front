import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Container, PageEnter } from '../styles/shared';

interface Reservation {
    id: number; centerName: string; date: string; time: string;
    elderlyName: string; status: 'pending' | 'confirmed' | 'completed'; statusLabel: string;
}

const MOCK_RESERVATIONS: Reservation[] = [
    { id: 1, centerName: '행복한 돌봄센터', date: '2026-02-25', time: '10:00', elderlyName: '김영숙', status: 'confirmed', statusLabel: '예약 확정' },
    { id: 2, centerName: '은빛 주간보호센터', date: '2026-02-20', time: '14:00', elderlyName: '김영숙', status: 'completed', statusLabel: '상담 완료' },
    { id: 3, centerName: '따뜻한 손길 데이케어', date: '2026-03-01', time: '11:00', elderlyName: '김영숙', status: 'pending', statusLabel: '확인 대기' },
];

const Page = styled(PageEnter)`padding: 40px 0 80px;`;

const Header = styled.div`
  display: flex; align-items: center; gap: 20px; margin-bottom: 40px; padding: 32px;
  background: linear-gradient(135deg, ${theme.colors.primaryBg} 0%, #fff3e0 100%);
  border-radius: ${theme.radius.lg};
  h1 { font-size: 1.4rem; margin-bottom: 4px; }
  p { color: ${theme.colors.textSecondary}; font-size: 0.95rem; }
`;

const Avatar = styled.div`
  width: 64px; height: 64px; background: ${theme.colors.bgCard}; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 2rem;
  box-shadow: ${theme.shadows.sm};
`;

const Grid = styled.div`
  display: grid; grid-template-columns: 1fr 300px; gap: 32px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const MainTitle = styled.h2`font-size: 1.2rem; margin-bottom: 20px;`;

const ResList = styled.div`display: flex; flex-direction: column; gap: 12px;`;

const ResItem = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  background: ${theme.colors.bgCard}; padding: 20px 24px; border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadows.sm}; transition: box-shadow ${theme.transition.base};
  &:hover { box-shadow: ${theme.shadows.md}; }
`;

const statusColors = {
    pending: { bg: '#fff3cd', color: '#856404' },
    confirmed: { bg: '#d4edda', color: '#155724' },
    completed: { bg: '#e2e3e5', color: '#383d41' },
};

const Status = styled.span<{ $status: 'pending' | 'confirmed' | 'completed' }>`
  display: inline-block; padding: 3px 10px; border-radius: 12px;
  font-size: 0.75rem; font-weight: 600; margin-bottom: 6px;
  background: ${p => statusColors[p.$status].bg};
  color: ${p => statusColors[p.$status].color};
`;

const ResName = styled.h3`font-size: 1.05rem; margin-bottom: 6px;`;

const ResDetails = styled.div`
  display: flex; gap: 16px; font-size: 0.85rem; color: ${theme.colors.textSecondary};
  @media (max-width: 768px) { flex-direction: column; gap: 4px; }
`;

const SidebarCard = styled.div`
  background: ${theme.colors.bgCard}; border-radius: ${theme.radius.md};
  padding: 28px; box-shadow: ${theme.shadows.md};
  h3 { font-size: 1rem; margin-bottom: 12px; }
`;

const QuickMenu = styled.nav`
  display: flex; flex-direction: column;
  a {
    padding: 12px 0; border-bottom: 1px solid ${theme.colors.borderLight};
    font-size: 0.9rem; color: ${theme.colors.textSecondary}; transition: color ${theme.transition.fast};
    &:hover { color: ${theme.colors.primary}; }
    &:last-child { border-bottom: none; }
  }
`;

const StatsGrid = styled.div`
  display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; text-align: center;
`;

const StatItem = styled.div`
  display: flex; flex-direction: column; padding: 12px 0;
  strong { font-size: 1.4rem; color: ${theme.colors.primary}; }
  span { font-size: 0.75rem; color: ${theme.colors.textLight}; margin-top: 2px; }
`;

const ActionBtn = styled(Link)`
  display: inline-flex; align-items: center; padding: 8px 18px;
  border-radius: ${theme.radius.sm}; font-size: 0.85rem; font-weight: 600;
  background: ${theme.colors.primary}; color: ${theme.colors.textInverse};
  transition: all ${theme.transition.base};
  &:hover { background: ${theme.colors.primaryLight}; }
`;

const CancelBtn = styled.button`
  padding: 8px 18px; border-radius: ${theme.radius.sm}; font-size: 0.85rem; font-weight: 600;
  background: ${theme.colors.bgCard}; color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  &:hover { background: ${theme.colors.primaryBg}; }
`;

export default function MyPage() {
    const userName = localStorage.getItem('userName') || '보호자';

    return (
        <Page><Container>
            <Header>
                <Avatar>👤</Avatar>
                <div><h1>{userName}님, 안녕하세요!</h1><p>예약 내역과 관심 센터를 확인하세요</p></div>
            </Header>
            <Grid>
                <div>
                    <MainTitle>내 예약 내역</MainTitle>
                    <ResList>
                        {MOCK_RESERVATIONS.map(res => (
                            <ResItem key={res.id}>
                                <div>
                                    <Status $status={res.status}>{res.statusLabel}</Status>
                                    <ResName>{res.centerName}</ResName>
                                    <ResDetails><span>📅 {res.date}</span><span>🕐 {res.time}</span><span>👤 {res.elderlyName}</span></ResDetails>
                                </div>
                                <div>
                                    {res.status === 'pending' && <CancelBtn>취소</CancelBtn>}
                                    {res.status === 'confirmed' && <ActionBtn to={`/centers/${res.id}`}>상세 보기</ActionBtn>}
                                </div>
                            </ResItem>
                        ))}
                    </ResList>
                </div>
                <aside>
                    <SidebarCard>
                        <h3>빠른 메뉴</h3>
                        <QuickMenu>
                            <Link to="/centers">🔍 센터 찾기</Link>
                            <a href="#">📋 내 정보 수정</a>
                            <a href="#">🔔 알림 설정</a>
                            <a href="#">💬 1:1 문의</a>
                        </QuickMenu>
                    </SidebarCard>
                    <SidebarCard style={{ marginTop: 16 }}>
                        <h3>예약 현황</h3>
                        <StatsGrid>
                            <StatItem><strong>{MOCK_RESERVATIONS.filter(r => r.status === 'pending').length}</strong><span>확인 대기</span></StatItem>
                            <StatItem><strong>{MOCK_RESERVATIONS.filter(r => r.status === 'confirmed').length}</strong><span>예약 확정</span></StatItem>
                            <StatItem><strong>{MOCK_RESERVATIONS.filter(r => r.status === 'completed').length}</strong><span>상담 완료</span></StatItem>
                        </StatsGrid>
                    </SidebarCard>
                </aside>
            </Grid>
        </Container></Page>
    );
}
