import Home from './components/Home/Home';
import Team from './components/Team/Team';
import MyNavbar from './components/Navbar/MyNavbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Research from './components/Research/Research';
import Publication from './components/Publication/Publication';
import { Contact } from './components/Contact/Contact';
import { Teaching } from './components/Teaching/Teaching';
import Footer from './components/Footer';
import PublicationList from './components/Publication/OtherPublication';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} activeClassName="active"/>
        <Route path="/team" element={<Team />} activeClassName="active"/>
        <Route path="/research" element={<Research />} activeClassName="active"/>
        <Route path="/publications" element={<Publication />} />
        <Route path="/OtherPublication" element={<PublicationList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
