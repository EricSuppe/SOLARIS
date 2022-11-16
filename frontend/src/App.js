import Home from '../src/pages/home/Home'
import Login from '../src/pages/login/Login'
import News from './pages/news/News';
import Article from './pages/article/Article';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Impressum from './pages/imprint/Imprint';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import Contact from './pages/contact/Contact';
// import Community from './pages/community/Community';

import '../src/styles/App.css'
import "../src/styles/variables.css"
import "../src/styles/global.css"
import "../src/styles/buttons/button.css"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/solaris_news" element={<News/>} />
          <Route exact path="/solaris_news/article/:id" element={<Article/>} />
          <Route exact path="/impressum" element={<Impressum/>} />
          <Route exact path="/datenschutz" element={<PrivacyPolicy/>} />
          <Route exact path="/kontakt" element={<Contact/>} />
          {/* <Route exact path="/community" element={<Community/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
