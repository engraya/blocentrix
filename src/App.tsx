import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LayoutSecondary from './components/Layout/LayoutSecondary';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route with hero section */}
        <Route path="/" element={<Layout children={<Home />} />} />
        
        {/* Other routes with secondary layout */}
        <Route path="/contact" element={<LayoutSecondary children={<Contact />} />} />
      </Routes>
    </Router>
  );
}

export default App;
