import React from "react";
import "./Home.css";
import Product1 from "../../assets/products/UTECH_Blackbox_Universal_IIoT_Gateway-2.jpg";
import HomePageProducts from "../../Components/HomeComponents/HomePageProducts/HomePageProducts";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import HomePageItemsSpecs from "../../Components/HomeComponents/HomePageItemsSpecs/HomePageItemsSpecs";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeFrontContainer">first</div>
      <div className="homeProductContainer">
        <h1>Product in Our Store</h1>
        <div className="homeProductMainBox">
          <div className="homeProductBox1">
            <div className="arrowBox right">
              <FaArrowLeft />
            </div>
          </div>
          <div className="homeProductBox2">
            {/* In this section Each of the produuct are going to show */}
            <HomePageProducts
              image={Product1}
              productName={"UTECH Blackbox"}
              productPrice={"$99"}
            />
            <HomePageProducts
              image={Product1}
              productName={"UTECH Blackbox"}
              productPrice={"$99"}
            />
            <HomePageProducts
              image={Product1}
              productName={"UTECH Blackbox"}
              productPrice={"$99"}
            />
            <HomePageProducts
              image={Product1}
              productName={"UTECH Blackbox"}
              productPrice={"$99"}
            />
            <HomePageProducts
              image={Product1}
              productName={"UTECH Blackbox"}
              productPrice={"$99"}
            />
          </div>
          <div className="homeProductBox3 ">
            <div className="arrowBox">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      <HomePageItemsSpecs />
    </div>
  );
};

export default Home;
