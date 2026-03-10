# 📋 Daycare Frontend - 작업 기록

## 2026-02-19 / CSS → Emotion 전환

### 전체 스타일 시스템 리팩토링
기존 바닐라 CSS에서 **Emotion (CSS-in-JS)** 으로 전환

### 패키지 추가
- `@emotion/react`
- `@emotion/styled`

### 테마 & 공통 스타일 생성
- `src/styles/theme.ts` — 디자인 토큰 정의
  - 컬러 팔레트 (primary, secondary, 카카오/네이버 등)
  - 그림자, border-radius, transition, 레이아웃 상수
- `src/styles/shared.ts` — 공통 styled-components
  - `Container`, `BtnPrimary`, `BtnSecondary`, `BtnKakao`, `BtnNaver`
  - `Card`, `Badge`, `Stars`, `Divider`
  - `SectionTitle`, `SectionSubtitle`
  - `FormGroup`, `PageEnter` (애니메이션)
- `src/styles/GlobalStyles.tsx` — 글로벌 리셋 & 기본 스타일

### 컴포넌트 Emotion 전환
- `src/components/Header.tsx` — 헤더 (네비게이션, 로고)
- `src/components/Footer.tsx` — 푸터 (브랜드, 링크, 연락처)
- `src/components/Layout.tsx` — 레이아웃 (Header + Outlet + Footer)

### 페이지 Emotion 전환
| 페이지 | 파일 | 주요 내용 |
|--------|------|----------|
| 홈 | `Home.tsx` | 히어로, 이용 과정 4단계, 인기 센터 카드, CTA |
| 로그인 | `Login.tsx` | 이메일/비밀번호 폼, 카카오/네이버 소셜 로그인 |
| 회원가입 | `Signup.tsx` | 회원가입 폼 (이름, 이메일, 비밀번호, 전화번호) |
| 센터 목록 | `Centers.tsx` | 검색/필터, 센터 카드 그리드 |
| 센터 상세 | `CenterDetail.tsx` | 센터 정보, 프로그램, 후기, 예약 버튼 |
| 예약 | `Reservation.tsx` | 날짜/시간 선택, 예약 폼 |
| 마이페이지 | `MyPage.tsx` | 프로필, 예약 내역, 활동 통계 |

### 기존 CSS 파일 제거
- 각 페이지별 `.css` 파일 삭제 → styled-components로 대체

---

## 2026-02-20 / 서비스 소개 페이지 추가

### 신규 페이지 생성
- `src/pages/About.tsx` — 서비스 소개 페이지 신규 생성

### 페이지 구성 (5개 섹션)
1. **히어로** — "어르신의 건강하고 행복한 일상을 함께합니다" 타이틀
2. **핵심 가치** — 전문성 🤝, 신뢰 💚, 따뜻함 🌱, 접근성 🏠 (4개 카드)
3. **서비스 안내** — 주간보호 ☀️, 방문돌봄 🏡, 재활서비스 🏥, 야간보호 🌙 (4개 카드)
4. **이용 과정** — 01~04 스텝 타임라인 (센터 검색 → 상세 비교 → 상담 예약 → 서비스 이용)
5. **CTA** — 센터 찾기 버튼 + 전화 상담 안내

### 라우트 등록
- `src/App.tsx`에 `/about` 라우트 추가
- 기존 `Home.tsx`의 "서비스 알아보기" 버튼 → `/about` 연결
- 기존 `Footer.tsx`의 "서비스 소개" 링크 → `/about` 연결

---

## 현재 프론트엔드 라우트 구조

| 경로 | 페이지 | 파일 |
|------|--------|------|
| `/` | 홈 | `Home.tsx` |
| `/about` | 서비스 소개 | `About.tsx` |
| `/login` | 로그인 | `Login.tsx` |
| `/signup` | 회원가입 | `Signup.tsx` |
| `/centers` | 센터 목록 | `Centers.tsx` |
| `/centers/:id` | 센터 상세 | `CenterDetail.tsx` |
| `/reservation/:centerId` | 예약 | `Reservation.tsx` |
| `/mypage` | 마이페이지 | `MyPage.tsx` |

## 기술 스택

- **React 19** + **TypeScript**
- **Vite 7** (빌드 도구)
- **Emotion** (CSS-in-JS 스타일링)
- **React Router v7** (라우팅)
