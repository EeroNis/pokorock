import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavJaFooter/Navbar';
import Logo from './components/NavJaFooter/Logo';
import Footer from './components/NavJaFooter/Footer';
import Etusivu from './pages/Etusivu';
import KitaratSivu from './pages/KitaratSivu';
import VahvistimetSivu from './pages/VahvistimetSivu';
import PlektraSivu from './pages/PlektratSivu';
import YhteystiedotSivu from './pages/YhteystiedotSivu';

function App() {
  return (
    <Router>
      <Logo />
      <Navbar />
      <Routes>
        <Route index path='/' element={<Etusivu />} />
        <Route path='/kitarat' element={<KitaratSivu />} />
        <Route path='/vahvistimet' element={<VahvistimetSivu />} />
        <Route path='/plektrat' element={<PlektraSivu />} />

        <Route path='/yhteystiedot' element={<YhteystiedotSivu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
