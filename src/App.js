
// import './App.css';
import Home from './components/Home/Home';
import Team from './components/Navbar/Team';
import MyNavbar from './components/Navbar/MyNavbar';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import Research from './components/Research/Research';
import Publication from './components/Publication/Publication';
import { Contact } from './components/Contact/Contact';
import { Teaching } from './components/Teaching/Teaching';
import Footer from './components/Footer';
import PublicationList from './components/Publication/OtherPublication';


function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/publications/OtherPublication" element={<PublicationList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
