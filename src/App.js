import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Categories from './Pages/Categories';
import Services from './Pages/Services';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';
import ClipIns from './Pages/ClipIns';
import Wigs from './Pages/Wigs';
import Tapes from './Pages/Tapes';
import Wefts from './Pages/Wefts';

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Route */}
        <Route path='/' element={<Layout />}>
         {/* Child Routes Default Root */}
         <Route index element={<Home />}/>
         {/* nested Routes */}
         <Route path='/about' element={<About />}/>
         <Route path='/categories' element={<Categories />}/>
         <Route path='/clipIns' element={<ClipIns />}/>
         <Route path='/wigs' element={<Wigs />}/>
         <Route path='/tapes' element={<Tapes />}/>
         <Route path='/wefts' element={<Wefts />}/>
         <Route path='/services' element={<Services />}/>
         <Route path='/testimonials' element={<Testimonials />}/>
         <Route path='/contact' element={<Contact />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
