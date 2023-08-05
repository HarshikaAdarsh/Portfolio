import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.jpeg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
  
    <div className="home-container">
      <Navbar />
      <div 
      className="home-banner-container">
        <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Hi, I am Harshika Adarsh. 
          </h1>
          <h1 className="secondary-heading">
           I am currently learning full stack development.
          </h1>
          <p className="primary-text">
            this page is not my portfolio, this page is dedicated to MLH. To see my portfolio click to the below link.
          </p>
          <p className="primary-text">
           To see my portfolio click to the below link.
          </p>
          <button className="secondary-button">
            Portfolio <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
   
  );
};

export default Home;
