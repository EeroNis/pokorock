import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavJaFooter/Navbar';
import Logo from './components/NavJaFooter/Logo';
import Footer from './components/NavJaFooter/Footer';
import Etusivu from './pages/Etusivu';
import KitaratSivu from './pages/KitaratSivu';
import VahvistimetSivu from './pages/VahvistimetSivu';

function App() {
  return (
    <Router>
      <Logo />
      <Navbar />
      <Routes>
        <Route index path='/' element={<Etusivu />} />
        <Route path='/kitarat' element={<KitaratSivu />} />
        <Route path='/vahvistimet' element={<VahvistimetSivu />} />
        <Route path='/plektrat' element={<VahvistimetSivu />} />

        <Route path='/yhteystiedot' element={<Logo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
