// import Home from '../src/pages/home/Home'
import Home from '../src/pages/home/NewsHomePage'
import Login from '../src/pages/login/Login'
import News from './pages/news/News';
import Article from './pages/article/Article';
import PolicyCenter from './pages/policy-center/PolicyCenter';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import '../src/styles/App.css'
import "../src/styles/variables.css"
import "../src/styles/global.css"
import "../src/styles/buttons/button.css"
import "../src/styles/common/section.css"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/solaris_news" element={<News />} />
          <Route exact path="/solaris_news/article/:id" element={<Article />} />
          <Route
            exact
            path="/impressum"
            element={<PolicyCenter renderComponent={"imprint"} />}
          />
          <Route
            exact
            path="/datenschutz"
            element={<PolicyCenter renderComponent={"privacy"} />}
          />
          <Route
            exact
            path="/kontakt"
            element={<PolicyCenter renderComponent={"contact"} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
