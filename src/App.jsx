import React from "react";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "./assets/css/ConcertList.css"
import Header from "./components/Header";
import ConcertList from "./components/ConcertList";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Slider from "./components/Slider";
// import Image from "./components/Image";
// import ImgText from "./components/ImgText";
// import Card from "./components/Card";
// import Banner from "./components/Banner";
// import Text from "./components/Text";

function App() {
  return (
    <>
      <Header element="nexon" />
      <ConcertList />
    </>
  );
}

export default App;