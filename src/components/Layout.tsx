import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import { theme } from '../styles/theme';

const Main = styled.main`
  padding-top: ${theme.headerHeight};
  min-height: 100vh;
`;

export default function Layout() {
    return (
        <>
            <Header />
            <Main><Outlet /></Main>
            <Footer />
        </>
    );
}
