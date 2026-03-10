import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Container, SectionTitle, SectionSubtitle, PageEnter } from '../styles/shared';

/* ===== Data ===== */
const VALUES = [
    { icon: '🤝', title: '전문성', desc: '검증된 돌봄 전문가와 체계적인 프로그램으로 어르신의 건강과 행복을 책임집니다.' },
    { icon: '💚', title: '신뢰', desc: '투명한 정보 공개와 실제 이용 후기를 통해 신뢰할 수 있는 센터를 추천합니다.' },
    { icon: '🌱', title: '따뜻함', desc: '가족처럼 따뜻한 마음으로 어르신 한 분 한 분에게 맞춤 돌봄을 제공합니다.' },
    { icon: '🏠', title: '접근성', desc: '전국 어디서나 가까운 곳에서 필요한 돌봄 서비스를 쉽게 이용할 수 있습니다.' },
];

const SERVICES = [
    { icon: '☀️', title: '주간보호', desc: '낮 시간 동안 전문 시설에서 어르신을 돌보는 서비스. 다양한 프로그램과 식사를 제공합니다.', tags: ['인지 활동', '물리치료', '식사 제공'] },
    { icon: '🏡', title: '방문돌봄', desc: '전문 돌봄사가 가정을 방문하여 일상생활 지원 및 정서적 케어 서비스를 제공합니다.', tags: ['가사 지원', '외출 동행', '정서 케어'] },
    { icon: '🏥', title: '재활서비스', desc: '물리치료, 작업치료 등 전문 재활 프로그램을 통해 어르신의 신체 기능 회복을 돕습니다.', tags: ['물리치료', '작업치료', '언어치료'] },
    { icon: '🌙', title: '야간보호', desc: '야간에도 안전하게 돌봄을 받을 수 있는 서비스. 24시간 전문 케어를 제공합니다.', tags: ['야간 케어', '안전 관리', '응급 대응'] },
];

const STEPS = [
    { step: '01', title: '센터 검색', desc: '지역, 서비스 종류, 예산에 맞는 돌봄 센터를 검색하세요.' },
    { step: '02', title: '상세 비교', desc: '프로그램, 시설, 비용, 후기를 꼼꼼히 비교해보세요.' },
    { step: '03', title: '상담 예약', desc: '마음에 드는 센터에 무료 상담을 신청하세요.' },
    { step: '04', title: '서비스 이용', desc: '상담 후 맞춤 돌봄 서비스를 시작하세요.' },
];

/* ===== Styled Components ===== */
const Hero = styled.section`
  position: relative;
  padding: 100px 0 80px;
  overflow: hidden;
  background: linear-gradient(135deg, #e8f5f0 0%, #f5f3ee 50%, #fff3e0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  top: -80px;
  right: -80px;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(45,138,110,0.08) 0%, transparent 70%);
`;

const HeroBg2 = styled.div`
  position: absolute;
  bottom: -120px;
  left: -60px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(244,162,97,0.06) 0%, transparent 70%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const HeroBadge = styled.span`
  display: inline-block;
  padding: 8px 20px;
  background: white;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${theme.colors.primary};
  margin-bottom: 24px;
  box-shadow: ${theme.shadows.sm};
`;

const HeroH1 = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 20px;
  @media (max-width: 768px) { font-size: 2rem; }
`;

const Highlight = styled.span`
  color: ${theme.colors.primary};
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    height: 12px;
    background: rgba(45,138,110,0.15);
    border-radius: 4px;
    z-index: -1;
  }
`;

const HeroDesc = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: 0;
`;

/* === Values Section === */
const ValuesSection = styled.section`
  padding: 80px 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
`;

const ValueCard = styled.div`
  background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.md};
  padding: 36px 24px;
  text-align: center;
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transition.base};
  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.md};
  }
`;

const ValueIcon = styled.div`
  font-size: 2.8rem;
  margin-bottom: 16px;
`;

const ValueTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ValueDesc = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
`;

/* === Services Section === */
const ServicesSection = styled.section`
  padding: 80px 0;
  background: ${theme.colors.bgSection};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const ServiceCard = styled.div`
  background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.md};
  padding: 32px;
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transition.base};
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.md};
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
`;

const ServiceIcon = styled.div`
  font-size: 2.2rem;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primaryBg};
  border-radius: ${theme.radius.sm};
  flex-shrink: 0;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const ServiceDesc = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 16px;
`;

const ServiceTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const ServiceTag = styled.span`
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${theme.colors.primaryBg};
  color: ${theme.colors.primary};
`;

/* === Steps Section === */
const StepsSection = styled.section`
  padding: 80px 0;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const StepCard = styled.div`
  text-align: center;
  padding: 0 20px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 28px;
    right: 0;
    width: 50%;
    height: 2px;
    background: ${theme.colors.border};
    @media (max-width: 768px) { display: none; }
  }

  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 0;
    width: 50%;
    height: 2px;
    background: ${theme.colors.border};
    @media (max-width: 768px) { display: none; }
  }
`;

const StepNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryLight});
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const StepDesc = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
`;

/* === CTA Section === */
const CTASection = styled.section`
  padding: 0 0 80px;
`;

const CTACard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  border-radius: ${theme.radius.lg};
  padding: 60px;
  text-align: center;
  color: white;
  @media (max-width: 768px) { padding: 40px 24px; }
  h2 { font-size: 1.8rem; margin-bottom: 12px; }
  p { font-size: 1.05rem; opacity: 0.9; margin-bottom: 32px; line-height: 1.8; }
`;

const CTAActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const CTABtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 36px;
  border-radius: ${theme.radius.sm};
  font-weight: 600;
  font-size: 1.05rem;
  background: white;
  color: ${theme.colors.primary};
  transition: all ${theme.transition.base};
  &:hover { background: #f0f0f0; transform: translateY(-2px); }
`;

const CTAPhone = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

/* ===== Component ===== */
export default function About() {
    return (
        <PageEnter>
            {/* Hero */}
            <Hero>
                <HeroBg />
                <HeroBg2 />
                <Container>
                    <HeroContent>
                        <HeroBadge>🌿 돌봄마을 소개</HeroBadge>
                        <HeroH1>
                            어르신의 <Highlight>건강하고 행복한</Highlight><br />
                            일상을 함께합니다
                        </HeroH1>
                        <HeroDesc>
                            돌봄마을은 신뢰할 수 있는 돌봄 센터 정보를 제공하고,<br />
                            어르신과 보호자 모두가 안심할 수 있는 돌봄 환경을 만들어갑니다.
                        </HeroDesc>
                    </HeroContent>
                </Container>
            </Hero>

            {/* 핵심 가치 */}
            <ValuesSection>
                <Container>
                    <SectionTitle style={{ textAlign: 'center' }}>우리의 핵심 가치</SectionTitle>
                    <SectionSubtitle style={{ textAlign: 'center' }}>
                        돌봄마을이 가장 소중하게 생각하는 가치입니다
                    </SectionSubtitle>
                    <ValuesGrid>
                        {VALUES.map((v, i) => (
                            <ValueCard key={i}>
                                <ValueIcon>{v.icon}</ValueIcon>
                                <ValueTitle>{v.title}</ValueTitle>
                                <ValueDesc>{v.desc}</ValueDesc>
                            </ValueCard>
                        ))}
                    </ValuesGrid>
                </Container>
            </ValuesSection>

            {/* 서비스 안내 */}
            <ServicesSection>
                <Container>
                    <SectionTitle style={{ textAlign: 'center' }}>제공하는 돌봄 서비스</SectionTitle>
                    <SectionSubtitle style={{ textAlign: 'center' }}>
                        어르신의 상태와 필요에 맞는 다양한 서비스를 제공합니다
                    </SectionSubtitle>
                    <ServicesGrid>
                        {SERVICES.map((s, i) => (
                            <ServiceCard key={i}>
                                <ServiceHeader>
                                    <ServiceIcon>{s.icon}</ServiceIcon>
                                    <ServiceTitle>{s.title}</ServiceTitle>
                                </ServiceHeader>
                                <ServiceDesc>{s.desc}</ServiceDesc>
                                <ServiceTags>
                                    {s.tags.map(t => (
                                        <ServiceTag key={t}>{t}</ServiceTag>
                                    ))}
                                </ServiceTags>
                            </ServiceCard>
                        ))}
                    </ServicesGrid>
                </Container>
            </ServicesSection>

            {/* 이용 과정 */}
            <StepsSection>
                <Container>
                    <SectionTitle style={{ textAlign: 'center' }}>이용 과정</SectionTitle>
                    <SectionSubtitle style={{ textAlign: 'center' }}>
                        간편한 4단계로 어르신께 맞는 돌봄을 시작하세요
                    </SectionSubtitle>
                    <StepsGrid>
                        {STEPS.map((s, i) => (
                            <StepCard key={i}>
                                <StepNumber>{s.step}</StepNumber>
                                <StepTitle>{s.title}</StepTitle>
                                <StepDesc>{s.desc}</StepDesc>
                            </StepCard>
                        ))}
                    </StepsGrid>
                </Container>
            </StepsSection>

            {/* CTA */}
            <CTASection>
                <Container>
                    <CTACard>
                        <h2>지금 바로 돌봄을 시작하세요</h2>
                        <p>
                            어떤 돌봄 서비스가 필요한지 잘 모르시겠다면,<br />
                            전문 상담사가 1:1로 맞춤 추천해드립니다.
                        </p>
                        <CTAActions>
                            <CTABtn to="/centers">센터 찾기 →</CTABtn>
                            <CTAPhone>📞 1588-0000</CTAPhone>
                        </CTAActions>
                    </CTACard>
                </Container>
            </CTASection>
        </PageEnter>
    );
}
