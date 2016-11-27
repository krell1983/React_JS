import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Header from "./components/Header.js";
import MainMenu from "./components/MainMenu.js";
import Footer from "./components/Footer.js";


const app = document.querySelector('[data-aplication="react-app"]');
ReactDOM.render(
  <div className="Page">
    <Header/>
    <MainMenu/>
    <Footer/>
  </div>
,app);
