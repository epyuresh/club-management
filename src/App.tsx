import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact  from './pages/Contact';
import Login  from './pages/Login';
import Signup  from './pages/Signup';
import Faqs  from './pages/Faqs';
import Privacy  from './pages/Privacy';
import Clubhome  from './pages/Clubhome';
import Term  from './pages/Term';
import Rotractlogin  from './pages/Rotractlogin';
import Adminsidebar  from './components/Adminsidebar';
import Rotract  from './Rotractclub/Rotract';






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
      <Route path="privacy" element={<Privacy/>}/>
      <Route path="clubhome" element={<Clubhome/>}/>
      <Route path="term" element={<Term/>}/>
      <Route path="rotractlogin" element={<Rotractlogin/>}/>
      <Route path="adminsidebar" element={<Adminsidebar/>}/>
      <Route path="rotract" element={<Rotract/>}/>
 
      
     

      
      
      
     </Routes>
    </BrowserRouter>
  )
}

export default App;
