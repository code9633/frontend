import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import "./HomePageProducts.css";

const HomePageProducts = (props) => {
  return (
    <>
      <div className="homeProduct">
        <div className="homeProductImg">
          <img src={props.image} alt="" />
        </div>
        <div className="homeProductDetails">
          <p>{props.productName}</p>
          <p>Price {props.productPrice}</p>
        </div>
        <div className="homeProductBuy">
          <Link to="">
            Add to cart <FaCartArrowDown />{" "}
          </Link>
          <Link to="">
            Learn more <MdArrowForwardIos />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePageProducts;
