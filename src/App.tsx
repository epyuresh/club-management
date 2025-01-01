import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact  from './pages/Contact';
import Login  from './pages/Login';
import Signup  from './pages/Signup';
import Faqs  from './pages/Faqs';






function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="faqs" element={<Faqs/>}/>
      
      
     
 
      
     

      
      
      
     </Routes>
    </BrowserRouter>
  )
}

export default App;
