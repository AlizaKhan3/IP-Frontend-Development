import './App.css';
import Home from './pages/home';
import Blog from './pages/blog';
import Features from './pages/features';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Price from './pages/pricing'
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/pricing" element={<Price/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/features" element={<Features/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>

  );
}

export default App;
