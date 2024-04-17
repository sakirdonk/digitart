import './App.css';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import News from './pages/News';
import { ThemeProvider } from 'styled-components';
import theme from './utils/constants/theme';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import MyReport from './pages/My_Report';
import Report from './pages/Report';
import Chat from './pages/Chat';
import About from './pages/About';
import Consult from './pages/Consult';
import PayConsult from './pages/Pay_Consult';
import LoginPage from './pages/Login_Page';
import RegisterPage from './pages/Register_Page';
import ForgotPass from './pages/Forgot_Pass';
import DashboardLogin from './pages/Dashboard_Login';
import CommunityLogin from './pages/Community_Login';
import ConsultLogin from './pages/Consult_Login';
import AboutLogin from './pages/About_Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/consult" element={<Consult />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/forgot_pass" element={<ForgotPass />}></Route>

          <Route path="/login/dashboard" element={<DashboardLogin />}></Route>
          <Route path="/login/community" element={<CommunityLogin />}></Route>
          <Route path="/login/consult" element={<ConsultLogin />}></Route>
          <Route path="/login/about" element={<AboutLogin />}></Route>
          <Route path="/login/report" element={<Report />}></Route>
          <Route path="/login/chat" element={<Chat />}></Route>
          <Route path="/login/consult" element={<Consult />}></Route>
          <Route path="/login/payconsult" element={<PayConsult />}></Route>
          <Route path="/login/profile" element={<Profile />}></Route>
          <Route path="/login/myreport" element={<MyReport />}></Route>
        </Routes>
    </ThemeProvider>

        
  );
}

export default App;
