import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./IndividualItem.css";

const IndividualItem = (props) => {
  return (
    <div className="productItem">
      <div className="productItemImg">
        <img src={props.image} alt="" />
      </div>
      <div className="productItemDetails">
        <h3>{props.productName}</h3>
        <div className="productItemPrice">
          <p>
            Price :<span> {props.productPrice} </span>{" "}
          </p>
          <button>
            <Link to="">Add to cart</Link>
          </button>
        </div>
        <div className="productItemLearnMore">
          <Link to={`/products/${props.id}`}>
            Learn more <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndividualItem;
