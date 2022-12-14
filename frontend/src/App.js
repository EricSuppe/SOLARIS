import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import "../src/styles/variables.css"
import "../src/styles/common/section.css"
import "../src/styles/common/hover-effects.css"
import "../src/styles/quickScroll.css"
import "../src/styles/fonts/clash-display.css"
import PageLoadingTransition from "./pages/transition/PageLoadingTransition"
const Home = lazy(() => import("./pages/home/Homepage"))
const News = lazy(() => import("./pages/news/Test"))
const Login = lazy(() => import("./pages/login/Login"))
const Article = lazy(() => import("./pages/article/Article"))
const PolicyCenter = lazy(() => import("./pages/policy-center/PolicyCenter"))

function App() {

  return (
    <Suspense fallback={<CircularProgress/>}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Suspense fallback={<PageLoadingTransition type={"linear"} display={"Die Sonne geht gleich auf, bitte habe kurz Geduld!"}/>}><Home/></Suspense>}/>
          <Route exact path="/login" element={<Suspense fallback={<PageLoadingTransition type={"linear"} display={"Moin Moin Leute, die Ereignisse ├╝berschlagen sich!"}/>}><Login/></Suspense>}/>
          <Route exact path="/news" element={<Suspense fallback={<PageLoadingTransition type={"linear"} display={""}/>}><News/></Suspense>}/>
          <Route exact path="/news/article/:id" element={<Suspense fallback={<PageLoadingTransition type={"linear"} display={""}/>}><Article/></Suspense>}/>
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
    </Suspense>
  );
}

export default App;
