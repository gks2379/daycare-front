import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { globalStyles } from './styles/GlobalStyles';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Centers from './pages/Centers';
import CenterDetail from './pages/CenterDetail';
import Reservation from './pages/Reservation';
import MyPage from './pages/MyPage';

export default function App() {
  return (
    <BrowserRouter>
      {globalStyles}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/centers/:id" element={<CenterDetail />} />
          <Route path="/reservation/:centerId" element={<Reservation />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
