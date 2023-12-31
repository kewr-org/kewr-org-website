import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Products from './Pages/Products';
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
