import React, { useState } from "react";
import BoardMember from "./BoardMember";
import Contact from "./Contact";
import BuySection from "./BuySection";
import Ecosystems from "./Ecosystems";
import FAQPage from "./FAQPage";
import Footer from "./Footer";
import Header from "./headerComponents/Header";
import ModelLoginPopup from "./ModelLoginPopup";
import MvpPage from "./MvpPage";
import Platform from "./Platform";
import PressNews from "./PressNews";
import RegisterPopup from "./RegisterPopup";
import RoadMap from "./RoadMap";
import TeamPage from "./TeamPage";
import TokenSale from "./TokenSale";
import Card from "./Card";

function HomePage() {
  const [modelOpen, setModelopen] = useState(false)
  return (
    <>
        <RoadMap />
        <TeamPage />
        <Ecosystems />
        <Platform />
        <MvpPage />
        <BuySection />
        <Card />
        <PressNews />
        <FAQPage />
        <Contact /> 
    </>
  );
}

export default HomePage;
