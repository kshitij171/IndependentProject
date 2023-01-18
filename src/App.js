
// import './App.css';

import Home from './components/Home/Home';
import Team from './components/Navbar/Pages/Team';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="team" element={<Team />} />
      </Routes>
</BrowserRouter>
  );
}

export default App;
