import React from "react";
import "./Products.css";
import Product1 from "../../assets/products/UTECH_Blackbox_Universal_IIoT_Gateway-2.jpg";
import IndividualItem from "../../Components/ProductComponents/IndividualItem/IndividualItem";

const Products = () => {
  return (
    <div className="productContainer">
      <div className="prodctContainerHeaderTittle">
        <h1> Shop the latest IOT products </h1>
      </div>
      <div className="productItemBox">
        {/* component/Product/productPageProductItems */}
        <IndividualItem
          id = {1}
          image={Product1}
          productName={"UTECH Blackbox Universal IIoT Gateway"}
          productPrice={"$99"}
          productuyLink={""}
        />
        <IndividualItem
          id = {2}
          image={Product1}
          productName={"UTECH Blackbox Universal IIoT Gateway"}
          productPrice={"$99"}
          productLink={""}
        />
        <IndividualItem
          id = {3}
          image={Product1}
          productName={"UTECH Blackbox Universal IIoT Gateway"}
          productPrice={"$99"}
          productLink={""}
        />
        <IndividualItem
          id = {4}
          image={Product1}
          productName={"UTECH Blackbox Universal IIoT Gateway"}
          productPrice={"$99"}
          productLink={""}
        />
      </div>
    </div>
  );
};

export default Products;
