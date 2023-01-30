import Home from './components/Home/Home';
import Team from './components/Navbar/Pages/Team';
import MyNavbar from './components/Navbar/MyNavbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Research from './components/Research/Research';
import Publication from './components/Publication/Publication';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publication />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
