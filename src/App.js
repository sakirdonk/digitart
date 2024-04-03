import './App.css';
// import Dashboard from './pages/Dashboard';
import { ThemeProvider } from 'styled-components';
import theme from './utils/constants/theme';
import Layout from './Layout/index';
import Hero from './components/Hero/Hero';
import Coop from './components/Coop/Coop';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import News from './components/News/News';
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero />
        <Coop />
        <Info />
        <News />
        <Welcome />
        <Footer />
      </Layout>
    </ThemeProvider>

        // <Routes>
        //   <Route path="/" element={<Dashboard />}></Route>
        // </Routes>
  );
}

export default App;
