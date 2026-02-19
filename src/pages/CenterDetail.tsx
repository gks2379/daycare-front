import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Container, Badge, Stars, PageEnter } from '../styles/shared';

const MOCK_CENTER = {
    id: 1, name: '행복한 돌봄센터', location: '서울 강남구', address: '강남대로 123, 2층',
    rating: 4.8, reviews: 128, price: '월 120만원~', tags: ['치매 전문', '물리치료'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
    phone: '02-1234-5678', hours: '평일 08:00 - 18:00',
    description: '행복한 돌봄센터는 어르신 한 분, 한 분의 건강 상태와 필요에 맞춘 맞춤형 돌봄 서비스를 제공합니다. 치매 전문 프로그램과 물리치료를 통해 어르신의 일상 회복을 돕고 있으며, 경험 풍부한 전문 요양보호사가 상주하고 있습니다.',
    programs: ['인지 활동 프로그램', '물리치료 / 재활운동', '미술치료 / 음악치료', '건강 체조', '여가 활동 (영화, 원예 등)', '영양사 관리 식사 (3식 + 간식)'],
    facilities: ['물리치료실', '프로그램실', '식당', '휴게실', '목욕실', '산책 정원'],
};

const MOCK_REVIEWS = [
    { id: 1, author: '김○○', rating: 5, date: '2026.02.10', content: '어머니가 매일 가시는 걸 즐거워하세요. 선생님들이 정말 친절하시고 프로그램도 다양해요.' },
    { id: 2, author: '이○○', rating: 5, date: '2026.01.28', content: '치매 전문이라 믿고 맡길 수 있어요. 물리치료도 잘 해주시고 가족 상담도 정기적으로 해주셔서 안심됩니다.' },
    { id: 3, author: '박○○', rating: 4, date: '2026.01.15', content: '시설이 깨끗하고 넓어서 좋아요. 가격이 조금 있지만 그만큼 서비스 질이 좋습니다.' },
];

const HeroImg = styled.div`
  position: relative; height: 360px; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
  @media (max-width: 768px) { height: 240px; }
`;

const Overlay = styled.div`
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  padding: 40px 0 30px; color: white;
  h1 { font-size: 1.8rem; margin: 8px 0 6px; }
  p { opacity: 0.9; }
`;

const Grid = styled.div`
  display: grid; grid-template-columns: 1fr 360px; gap: 32px; padding: 40px 0;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Section = styled.section`
  margin-bottom: 40px;
  h2 { font-size: 1.3rem; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid ${theme.colors.primaryBg}; }
`;

const Desc = styled.p`font-size: 1rem; line-height: 1.8; color: ${theme.colors.textSecondary};`;

const ProgramList = styled.ul`
  li { padding: 10px 0; border-bottom: 1px solid ${theme.colors.borderLight}; font-size: 0.95rem; }
`;

const FacilitiesGrid = styled.div`
  display: grid; grid-template-columns: repeat(3,1fr); gap: 12px;
  @media (max-width: 768px) { grid-template-columns: repeat(2,1fr); }
`;

const FacilityItem = styled.div`
  background: ${theme.colors.bgSection}; padding: 14px; border-radius: ${theme.radius.sm};
  font-size: 0.9rem; text-align: center;
`;

const ReviewCard = styled.div`
  background: ${theme.colors.bgSection}; padding: 20px; border-radius: ${theme.radius.md}; margin-bottom: 16px;
  p { font-size: 0.95rem; line-height: 1.7; color: ${theme.colors.textSecondary}; }
`;

const ReviewHeader = styled.div`
  display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
`;

const Author = styled.span`font-weight: 600;`;
const ReviewDate = styled.span`font-size: 0.85rem; color: ${theme.colors.textLight}; margin-left: auto;`;
const ReviewCount = styled.span`font-size: 0.9rem; color: ${theme.colors.textLight}; font-weight: 400;`;

const Sidebar = styled.div`
  background: ${theme.colors.bgCard}; border-radius: ${theme.radius.md};
  padding: 28px; box-shadow: ${theme.shadows.md};
  position: sticky; top: calc(${theme.headerHeight} + 24px);
`;

const SidebarRating = styled.div`display: flex; align-items: center; gap: 8px; margin-bottom: 16px;`;
const RatingNum = styled.span`font-size: 1.4rem; font-weight: 700;`;
const RatingReviews = styled.span`font-size: 0.85rem; color: ${theme.colors.textLight};`;

const SidebarPrice = styled.div`
  font-size: 1.3rem; font-weight: 700; color: ${theme.colors.primary};
  margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid ${theme.colors.border};
`;

const SidebarInfo = styled.div`
  margin-bottom: 24px;
  p { font-size: 0.9rem; margin-bottom: 10px; color: ${theme.colors.textSecondary}; }
`;

const ReserveBtn = styled(Link)`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; padding: 16px 36px; border-radius: ${theme.radius.sm}; font-weight: 600; font-size: 1.05rem;
  background: ${theme.colors.primary}; color: ${theme.colors.textInverse};
  transition: all ${theme.transition.base};
  &:hover { background: ${theme.colors.primaryLight}; transform: translateY(-2px); box-shadow: ${theme.shadows.hover}; }
`;

const PhoneBtn = styled.button`
  display: inline-flex; align-items: center; justify-content: center;
  width: 100%; padding: 12px 28px; border-radius: ${theme.radius.sm}; font-weight: 600; font-size: 0.95rem;
  background: ${theme.colors.bgCard}; color: ${theme.colors.primary}; border: 2px solid ${theme.colors.primary};
  margin-top: 10px; transition: all ${theme.transition.base};
  &:hover { background: ${theme.colors.primaryBg}; }
`;

const Tags = styled.div`display: flex; gap: 6px; margin-bottom: 4px; flex-wrap: wrap;`;

export default function CenterDetail() {
    const { id } = useParams();
    const center = MOCK_CENTER;
    const renderStars = (r: number) => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '☆' : '');

    return (
        <PageEnter>
            <HeroImg>
                <img src={center.image} alt={center.name} />
                <Overlay>
                    <Container>
                        <Tags>{center.tags.map(t => <Badge key={t}>{t}</Badge>)}</Tags>
                        <h1>{center.name}</h1>
                        <p>📍 {center.address}, {center.location}</p>
                    </Container>
                </Overlay>
            </HeroImg>
            <Container>
                <Grid>
                    <div>
                        <Section><h2>센터 소개</h2><Desc>{center.description}</Desc></Section>
                        <Section><h2>프로그램</h2><ProgramList>{center.programs.map((p, i) => <li key={i}>✅ {p}</li>)}</ProgramList></Section>
                        <Section><h2>시설 안내</h2><FacilitiesGrid>{center.facilities.map((f, i) => <FacilityItem key={i}>🏠 {f}</FacilityItem>)}</FacilitiesGrid></Section>
                        <Section>
                            <h2>이용 후기 <ReviewCount>({center.reviews})</ReviewCount></h2>
                            {MOCK_REVIEWS.map(review => (
                                <ReviewCard key={review.id}>
                                    <ReviewHeader><Author>{review.author}</Author><Stars>{renderStars(review.rating)}</Stars><ReviewDate>{review.date}</ReviewDate></ReviewHeader>
                                    <p>{review.content}</p>
                                </ReviewCard>
                            ))}
                        </Section>
                    </div>
                    <aside>
                        <Sidebar>
                            <SidebarRating><Stars style={{ fontSize: '1.3rem' }}>{renderStars(center.rating)}</Stars><RatingNum>{center.rating}</RatingNum><RatingReviews>{center.reviews}개 리뷰</RatingReviews></SidebarRating>
                            <SidebarPrice>{center.price}</SidebarPrice>
                            <SidebarInfo><p>📞 {center.phone}</p><p>🕐 {center.hours}</p><p>📍 {center.address}</p></SidebarInfo>
                            <ReserveBtn to={`/reservation/${id}`}>예약 상담 신청 →</ReserveBtn>
                            <PhoneBtn>📞 전화 문의</PhoneBtn>
                        </Sidebar>
                    </aside>
                </Grid>
            </Container>
        </PageEnter>
    );
}
