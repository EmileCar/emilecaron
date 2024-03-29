import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { ActivityProvider } from './contexts/ActivityContext';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import Projects from './pages/Projects';
import About from './pages/about/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ActivityProvider>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </ActivityProvider>

  );
}

export default App;
