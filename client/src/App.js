// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import BuySection from "./components/BuySection";
import Ecosystems from "./components/Ecosystems";
import FAQPage from "./components/FAQPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModelLoginPopup from "./components/ModelLoginPopup";
import MvpPage from "./components/MvpPage";
import Platform from "./components/Platform";
import PressNews from "./components/PressNews";
import RegisterPopup from "./components/RegisterPopup";
import RoadMap from "./components/RoadMap";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { useState } from "react";
import TokenPage from "./components/TokenPage";
import TeamPage from "./components/TeamPage";
import RoadMapPage from "./components/RoadMapPage";
import Blog from "./components/Blog";
import Banner from "./components/Banner";
import TeamPageNew from "./components/TeamPageNew";
import Community from "./components/Community";
import TeamPageNewSection from "./components/TeamPageNewSection";
import BlogCardPage from "./components/BlogCardPage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";

function App() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <Router>
      <Header setModelOpen={setModelOpen} />
      <Switch>
        <Route exact path="/home">
          <Banner />
          <HomePage />
        </Route>
        <Route exact path="/blogs">
          <BlogCardPage />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/token">
          <TokenPage />
        </Route>
        <Route exact path="/team">
          <TeamPageNewSection />
        </Route>
        <Route exact path="/roadmap">
          <RoadMapPage />
        </Route>
        <Route exact path="/community">
          <Community />
        </Route>
        <Route exact path="/signUp">
          <SignUpPage />
        </Route>
        <Route exact path="/signIn">
          <SignInPage />
        </Route>
        <Route  path="/">
          <Banner />
          <HomePage />
        </Route>
      </Switch>
      <Footer />
      <RegisterPopup />
      <RegisterPopup />
    </Router>
  );
}

export default App;

{/* <div className="nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i">
    <div className="ovm-line"></div>
  </div> */}