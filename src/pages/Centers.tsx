import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { Container, Badge, Stars, PageEnter, SectionTitle, SectionSubtitle } from '../styles/shared';

interface Center {
    id: number; name: string; location: string; address: string; rating: number;
    reviews: number; price: string; tags: string[]; image: string; capacity: string;
}

const MOCK_CENTERS: Center[] = [
    { id: 1, name: '행복한 돌봄센터', location: '서울 강남구', address: '강남대로 123', rating: 4.8, reviews: 128, price: '월 120만원~', tags: ['치매 전문', '물리치료'], image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=260&fit=crop', capacity: '정원 30명' },
    { id: 2, name: '은빛 주간보호센터', location: '서울 서초구', address: '서초대로 456', rating: 4.9, reviews: 95, price: '월 100만원~', tags: ['재활 프로그램', '식사 제공'], image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=260&fit=crop', capacity: '정원 25명' },
    { id: 3, name: '따뜻한 손길 데이케어', location: '서울 송파구', address: '올림픽로 789', rating: 4.7, reviews: 67, price: '월 90만원~', tags: ['방문 돌봄', '야간 보호'], image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=260&fit=crop', capacity: '정원 20명' },
    { id: 4, name: '효도 케어센터', location: '서울 마포구', address: '마포대로 321', rating: 4.6, reviews: 89, price: '월 110만원~', tags: ['인지 치료', '물리치료'], image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=260&fit=crop', capacity: '정원 35명' },
    { id: 5, name: '한마음 돌봄센터', location: '서울 용산구', address: '한강대로 654', rating: 4.5, reviews: 52, price: '월 95만원~', tags: ['주간 보호', '식사 제공'], image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=260&fit=crop', capacity: '정원 28명' },
    { id: 6, name: '금빛 요양센터', location: '서울 영등포구', address: '영등포로 987', rating: 4.8, reviews: 110, price: '월 130만원~', tags: ['24시 간호', '치매 전문'], image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=260&fit=crop', capacity: '정원 40명' },
];

const Page = styled(PageEnter)`padding: 40px 0 80px;`;
const Header = styled.div`text-align: center; margin-bottom: 40px;`;

const Filters = styled.div`
  background: ${theme.colors.bgCard}; border-radius: ${theme.radius.md};
  padding: 24px; box-shadow: ${theme.shadows.sm}; margin-bottom: 24px;
`;

const SearchBox = styled.div`
  position: relative; margin-bottom: 16px;
  span { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-size: 1.1rem; }
  input { padding-left: 44px; height: 48px; }
`;

const TagFilters = styled.div`display: flex; gap: 8px; flex-wrap: wrap;`;

const TagBtn = styled.button<{ $active: boolean }>`
  padding: 8px 18px; border-radius: 20px; font-size: 0.85rem; font-weight: 500;
  border: 1px solid ${p => p.$active ? theme.colors.primary : theme.colors.border};
  background: ${p => p.$active ? theme.colors.primary : theme.colors.bgSection};
  color: ${p => p.$active ? 'white' : theme.colors.textSecondary};
  &:hover { border-color: ${theme.colors.primary}; color: ${theme.colors.primary}; }
`;

const ResultsCount = styled.p`font-size: 0.9rem; color: ${theme.colors.textSecondary}; margin-bottom: 20px;`;

const List = styled.div`display: flex; flex-direction: column; gap: 16px;`;

const ListCard = styled(Link)`
  display: flex; background: ${theme.colors.bgCard}; border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadows.sm}; overflow: hidden; cursor: pointer;
  transition: all ${theme.transition.base};
  &:hover { box-shadow: ${theme.shadows.md}; transform: translateY(-4px); }
  &:hover img { transform: scale(1.05); }
  @media (max-width: 768px) { flex-direction: column; }
`;

const CardImage = styled.div`
  width: 280px; min-height: 200px; flex-shrink: 0; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
  @media (max-width: 768px) { width: 100%; min-height: 180px; }
`;

const CardInfo = styled.div`
  padding: 24px; flex: 1; display: flex; flex-direction: column;
  h3 { font-size: 1.2rem; margin-bottom: 6px; }
`;

const Tags = styled.div`display: flex; gap: 6px; margin-bottom: 10px; flex-wrap: wrap;`;
const Location = styled.p`font-size: 0.9rem; color: ${theme.colors.textSecondary}; margin-bottom: 10px;`;
const Meta = styled.div`display: flex; align-items: center; gap: 6px; margin-bottom: 8px;`;
const Rating = styled.span`font-weight: 700; font-size: 0.95rem;`;
const Reviews = styled.span`font-size: 0.85rem; color: ${theme.colors.textLight};`;

const Bottom = styled.div`
  margin-top: auto; display: flex; justify-content: space-between; align-items: center;
  padding-top: 12px; border-top: 1px solid ${theme.colors.borderLight};
`;
const Price = styled.span`font-size: 1rem; font-weight: 600; color: ${theme.colors.primary};`;
const Capacity = styled.span`font-size: 0.85rem; color: ${theme.colors.textLight};`;

export default function Centers() {
    const [search, setSearch] = useState('');
    const [selectedTag, setSelectedTag] = useState('전체');
    const allTags = ['전체', ...new Set(MOCK_CENTERS.flatMap(c => c.tags))];
    const filtered = MOCK_CENTERS.filter(c => {
        const matchSearch = c.name.includes(search) || c.location.includes(search);
        const matchTag = selectedTag === '전체' || c.tags.includes(selectedTag);
        return matchSearch && matchTag;
    });
    const renderStars = (r: number) => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '☆' : '');

    return (
        <Page>
            <Container>
                <Header><SectionTitle>돌봄 센터 찾기</SectionTitle><SectionSubtitle>우리 부모님께 맞는 돌봄 센터를 찾아보세요</SectionSubtitle></Header>
                <Filters>
                    <SearchBox><span>🔍</span><input type="text" placeholder="센터명 또는 지역으로 검색" value={search} onChange={e => setSearch(e.target.value)} /></SearchBox>
                    <TagFilters>{allTags.map(tag => <TagBtn key={tag} $active={selectedTag === tag} onClick={() => setSelectedTag(tag)}>{tag}</TagBtn>)}</TagFilters>
                </Filters>
                <ResultsCount>총 <strong>{filtered.length}</strong>개의 센터를 찾았습니다</ResultsCount>
                <List>
                    {filtered.map(center => (
                        <ListCard to={`/centers/${center.id}`} key={center.id}>
                            <CardImage><img src={center.image} alt={center.name} /></CardImage>
                            <CardInfo>
                                <Tags>{center.tags.map(t => <Badge key={t}>{t}</Badge>)}</Tags>
                                <h3>{center.name}</h3>
                                <Location>📍 {center.address}, {center.location}</Location>
                                <Meta><Stars>{renderStars(center.rating)}</Stars><Rating>{center.rating}</Rating><Reviews>({center.reviews}개 리뷰)</Reviews></Meta>
                                <Bottom><Price>{center.price}</Price><Capacity>{center.capacity}</Capacity></Bottom>
                            </CardInfo>
                        </ListCard>
                    ))}
                </List>
            </Container>
        </Page>
    );
}
