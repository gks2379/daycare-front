import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Container, Badge, Stars, PageEnter, SectionTitle, SectionSubtitle } from '../styles/shared';

const MOCK_CENTERS = [
    { id: 1, name: '행복한 돌봄센터', location: '서울 강남구', rating: 4.8, reviews: 128, price: '월 120만원~', tags: ['치매 전문', '물리치료'], image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=260&fit=crop' },
    { id: 2, name: '은빛 주간보호센터', location: '서울 서초구', rating: 4.9, reviews: 95, price: '월 100만원~', tags: ['재활 프로그램', '식사 제공'], image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=260&fit=crop' },
    { id: 3, name: '따뜻한 손길 데이케어', location: '서울 송파구', rating: 4.7, reviews: 67, price: '월 90만원~', tags: ['방문 돌봄', '야간 보호'], image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=260&fit=crop' },
];

const FEATURES = [
    { icon: '🔍', title: '센터 검색', desc: '지역별, 서비스별로 최적의 돌봄 센터를 찾아보세요' },
    { icon: '📋', title: '상세 정보', desc: '프로그램, 비용, 후기를 한눈에 확인하세요' },
    { icon: '📅', title: '간편 예약', desc: '원하는 날짜와 시간을 선택해 바로 예약하세요' },
    { icon: '💬', title: '상담 연결', desc: '전문 상담사와 1:1 상담으로 맞춤 추천을 받으세요' },
];

/* ===== Styled Components ===== */
const Hero = styled.section`
  position: relative; padding: 100px 0 80px; overflow: hidden;
  background: linear-gradient(135deg, #e8f5f0 0%, #f5f3ee 50%, #fff3e0 100%);
`;

const HeroBg = styled.div`
  position: absolute; top: -100px; right: -100px; width: 500px; height: 500px;
  border-radius: 50%; background: radial-gradient(circle, rgba(45,138,110,0.08) 0%, transparent 70%);
`;

const HeroText = styled.div`max-width: 640px; position: relative; z-index: 1;`;

const HeroBadge = styled.span`
  display: inline-block; padding: 8px 20px; background: white; border-radius: 30px;
  font-size: 0.9rem; font-weight: 500; color: ${theme.colors.primary};
  margin-bottom: 24px; box-shadow: ${theme.shadows.sm};
`;

const HeroH1 = styled.h1`
  font-size: 3rem; font-weight: 700; line-height: 1.3; margin-bottom: 20px;
  @media (max-width: 768px) { font-size: 2rem; }
`;

const Highlight = styled.span`
  color: ${theme.colors.primary}; position: relative;
  &::after {
    content: ''; position: absolute; bottom: 4px; left: 0; right: 0;
    height: 12px; background: rgba(45,138,110,0.15); border-radius: 4px; z-index: -1;
  }
`;

const HeroDesc = styled.p`font-size: 1.1rem; color: ${theme.colors.textSecondary}; margin-bottom: 32px; line-height: 1.8;`;

const HeroActions = styled.div`display: flex; gap: 12px; margin-bottom: 48px; flex-wrap: wrap;`;

const HeroLink = styled(Link) <{ variant?: 'primary' | 'secondary' }>`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 16px 36px; border-radius: ${theme.radius.sm}; font-weight: 600; font-size: 1.05rem;
  transition: all ${theme.transition.base};
  background: ${p => p.variant === 'secondary' ? theme.colors.bgCard : theme.colors.primary};
  color: ${p => p.variant === 'secondary' ? theme.colors.primary : theme.colors.textInverse};
  border: ${p => p.variant === 'secondary' ? `2px solid ${theme.colors.primary}` : 'none'};
  &:hover { transform: translateY(-2px); box-shadow: ${theme.shadows.hover}; }
`;

const HeroStats = styled.div`display: flex; gap: 40px; @media (max-width: 768px) { gap: 24px; }`;
const Stat = styled.div`display: flex; flex-direction: column;`;
const StatValue = styled.strong`font-size: 1.6rem; color: ${theme.colors.primary}; font-weight: 700;`;
const StatLabel = styled.span`font-size: 0.85rem; color: ${theme.colors.textLight}; margin-top: 2px;`;

const FeaturesSection = styled.section`padding: 80px 0;`;
const FeaturesGrid = styled.div`
  display: grid; grid-template-columns: repeat(4,1fr); gap: 24px;
  @media (max-width: 768px) { grid-template-columns: repeat(2,1fr); }
`;
const FeatureCard = styled.div`
  background: ${theme.colors.bgCard}; border-radius: ${theme.radius.md};
  padding: 32px 24px; text-align: center; box-shadow: ${theme.shadows.sm};
  position: relative; transition: all ${theme.transition.base};
  &:hover { transform: translateY(-6px); box-shadow: ${theme.shadows.md}; }
  h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 8px; }
  p { font-size: 0.9rem; color: ${theme.colors.textSecondary}; line-height: 1.6; }
`;
const FeatureIcon = styled.div`font-size: 2.5rem; margin-bottom: 16px;`;
const FeatureStep = styled.div`
  position: absolute; top: 16px; right: 16px; font-size: 0.7rem; font-weight: 700;
  color: ${theme.colors.primary}; background: ${theme.colors.primaryBg}; padding: 2px 10px; border-radius: 12px;
`;

const PopularSection = styled.section`padding: 80px 0; background: ${theme.colors.bgSection};`;
const PopularHeader = styled.div`display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px;`;
const CentersGrid = styled.div`
  display: grid; grid-template-columns: repeat(3,1fr); gap: 24px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;
const CenterCard = styled(Link)`
  background: ${theme.colors.bgCard}; border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadows.sm}; overflow: hidden; cursor: pointer;
  transition: all ${theme.transition.base};
  &:hover { box-shadow: ${theme.shadows.md}; transform: translateY(-4px); }
  &:hover img { transform: scale(1.05); }
`;
const CenterImage = styled.div`height: 200px; overflow: hidden; img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }`;
const CenterInfo = styled.div`padding: 20px;`;
const Tags = styled.div`display: flex; gap: 6px; margin-bottom: 10px; flex-wrap: wrap;`;
const CenterName = styled.h3`font-size: 1.15rem; font-weight: 600; margin-bottom: 6px;`;
const CenterLocation = styled.p`font-size: 0.9rem; color: ${theme.colors.textSecondary}; margin-bottom: 10px;`;
const CenterMeta = styled.div`display: flex; align-items: center; gap: 6px; margin-bottom: 8px;`;
const Rating = styled.span`font-weight: 700; font-size: 0.95rem;`;
const Reviews = styled.span`font-size: 0.85rem; color: ${theme.colors.textLight};`;
const Price = styled.p`font-size: 1rem; font-weight: 600; color: ${theme.colors.primary};`;

const CTASection = styled.section`padding: 80px 0;`;
const CTACard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  border-radius: ${theme.radius.lg}; padding: 60px; text-align: center; color: white;
  @media (max-width: 768px) { padding: 40px 24px; }
  h2 { font-size: 1.8rem; margin-bottom: 12px; }
  p { font-size: 1.05rem; opacity: 0.9; margin-bottom: 32px; line-height: 1.8; }
`;
const CTAActions = styled.div`display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap;`;
const CTABtn = styled(Link)`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 16px 36px; border-radius: ${theme.radius.sm}; font-weight: 600; font-size: 1.05rem;
  background: white; color: ${theme.colors.primary}; transition: all ${theme.transition.base};
  &:hover { background: #f0f0f0; transform: translateY(-2px); }
`;
const CTAPhone = styled.span`font-size: 1.1rem; font-weight: 600;`;

const ViewAllBtn = styled(Link)`
  display: inline-flex; align-items: center; padding: 12px 28px; border-radius: ${theme.radius.sm};
  font-weight: 600; font-size: 0.95rem; flex-shrink: 0;
  background: ${theme.colors.bgCard}; color: ${theme.colors.primary}; border: 2px solid ${theme.colors.primary};
  transition: all ${theme.transition.base};
  &:hover { background: ${theme.colors.primaryBg}; transform: translateY(-2px); }
`;

export default function Home() {
    const renderStars = (rating: number) => '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '☆' : '');

    return (
        <PageEnter>
            <Hero>
                <HeroBg />
                <Container>
                    <HeroText>
                        <HeroBadge>🌿 신뢰할 수 있는 돌봄 서비스</HeroBadge>
                        <HeroH1>부모님을 위한<br /><Highlight>따뜻한 돌봄</Highlight>을 찾아보세요</HeroH1>
                        <HeroDesc>전국 500+ 돌봄 센터의 프로그램, 비용, 후기를 비교하고<br />우리 부모님께 딱 맞는 돌봄 서비스를 예약하세요.</HeroDesc>
                        <HeroActions>
                            <HeroLink to="/centers">센터 찾기 →</HeroLink>
                            <HeroLink to="/about" variant="secondary">서비스 알아보기</HeroLink>
                        </HeroActions>
                        <HeroStats>
                            <Stat><StatValue>500+</StatValue><StatLabel>등록 센터</StatLabel></Stat>
                            <Stat><StatValue>12,000+</StatValue><StatLabel>이용 후기</StatLabel></Stat>
                            <Stat><StatValue>98%</StatValue><StatLabel>만족도</StatLabel></Stat>
                        </HeroStats>
                    </HeroText>
                </Container>
            </Hero>

            <FeaturesSection>
                <Container>
                    <SectionTitle style={{ textAlign: 'center' }}>이렇게 이용하세요</SectionTitle>
                    <SectionSubtitle style={{ textAlign: 'center' }}>간편한 4단계로 최적의 돌봄 서비스에 연결됩니다</SectionSubtitle>
                    <FeaturesGrid>
                        {FEATURES.map((f, i) => (
                            <FeatureCard key={i}>
                                <FeatureIcon>{f.icon}</FeatureIcon>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                                <FeatureStep>STEP {i + 1}</FeatureStep>
                            </FeatureCard>
                        ))}
                    </FeaturesGrid>
                </Container>
            </FeaturesSection>

            <PopularSection>
                <Container>
                    <PopularHeader>
                        <div>
                            <SectionTitle>인기 돌봄 센터</SectionTitle>
                            <SectionSubtitle style={{ marginBottom: 0 }}>보호자분들이 가장 많이 선택한 센터예요</SectionSubtitle>
                        </div>
                        <ViewAllBtn to="/centers">전체 보기 →</ViewAllBtn>
                    </PopularHeader>
                    <CentersGrid>
                        {MOCK_CENTERS.map(center => (
                            <CenterCard to={`/centers/${center.id}`} key={center.id}>
                                <CenterImage><img src={center.image} alt={center.name} /></CenterImage>
                                <CenterInfo>
                                    <Tags>{center.tags.map(t => <Badge key={t}>{t}</Badge>)}</Tags>
                                    <CenterName>{center.name}</CenterName>
                                    <CenterLocation>📍 {center.location}</CenterLocation>
                                    <CenterMeta>
                                        <Stars>{renderStars(center.rating)}</Stars>
                                        <Rating>{center.rating}</Rating>
                                        <Reviews>({center.reviews}개 리뷰)</Reviews>
                                    </CenterMeta>
                                    <Price>{center.price}</Price>
                                </CenterInfo>
                            </CenterCard>
                        ))}
                    </CentersGrid>
                </Container>
            </PopularSection>

            <CTASection>
                <Container>
                    <CTACard>
                        <h2>무료 상담을 신청해보세요</h2>
                        <p>어떤 돌봄 서비스가 필요한지 잘 모르시겠다면,<br />전문 상담사가 맞춤으로 추천해드립니다.</p>
                        <CTAActions>
                            <CTABtn to="/signup">무료 상담 신청 →</CTABtn>
                            <CTAPhone>📞 1588-0000</CTAPhone>
                        </CTAActions>
                    </CTACard>
                </Container>
            </CTASection>
        </PageEnter>
    );
}
