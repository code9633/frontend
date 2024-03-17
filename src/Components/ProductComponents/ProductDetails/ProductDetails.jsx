import React, { useState, useEffect } from "react";
import Product1 from "../../../assets/products/UTECH_Blackbox_Universal_IIoT_Gateway-2.jpg"
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "UTECH Blackbox Universal IIoT Gateway",
    price: "$ 99",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                    incidunt! Ducimus illo, id quia sunt blanditiis nobis minus. Aut,
                    quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                    reiciendis voluptatum dolorum ipsa dolores eligendi aliquam nihil
                    accusamus debitis, alias animi, quo inventore veritatis eos.
                    Perferendis natus nam voluptatibus excepturi, consequatur numquam
                    non exercitationem eveniet consectetur maiores delectus omnis,
                    obcaecati fuga aliquid ab quo iusto sint neque! Labore hic
                    voluptates neque minima tenetur molestias sint minus cum vero autem.
                    Reiciendis est in eveniet doloribus id, aliquid quisquam ea sunt
                    facilis consequatur reprehenderit, labore voluptas autem voluptate
                    voluptatum, natus hic. Saepe officiis similique officia doloribus
                    temporibus rem et cum culpa! Commodi nisi vero maxime eum incidunt
                    quaerat quasi rem id quas!`,
    image:  Product1 ,
  },
  {
    id: 2,
    name: "Product 2",
    price: "$ 99",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                    incidunt! Ducimus illo, id quia sunt blanditiis nobis minus. Aut,
                    quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                    reiciendis voluptatum dolorum ipsa dolores eligendi aliquam nihil
                    accusamus debitis, alias animi, quo inventore veritatis eos.
                    Perferendis natus nam voluptatibus excepturi, consequatur numquam
                    non exercitationem eveniet consectetur maiores delectus omnis,
                    obcaecati fuga aliquid ab quo iusto sint neque! Labore hic
                    voluptates neque minima tenetur molestias sint minus cum vero autem.
                    Reiciendis est in eveniet doloribus id, aliquid quisquam ea sunt
                    facilis consequatur reprehenderit, labore voluptas autem voluptate
                    voluptatum, natus hic. Saepe officiis similique officia doloribus
                    temporibus rem et cum culpa! Commodi nisi vero maxime eum incidunt
                    quaerat quasi rem id quas!`,
    image: Product1,
  },
  {
    id: 3,
    name: "Product 3",
    price: "$ 99",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                    incidunt! Ducimus illo, id quia sunt blanditiis nobis minus. Aut,
                    quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                    reiciendis voluptatum dolorum ipsa dolores eligendi aliquam nihil
                    accusamus debitis, alias animi, quo inventore veritatis eos.
                    Perferendis natus nam voluptatibus excepturi, consequatur numquam
                    non exercitationem eveniet consectetur maiores delectus omnis,
                    obcaecati fuga aliquid ab quo iusto sint neque! Labore hic
                    voluptates neque minima tenetur molestias sint minus cum vero autem.
                    Reiciendis est in eveniet doloribus id, aliquid quisquam ea sunt
                    facilis consequatur reprehenderit, labore voluptas autem voluptate
                    voluptatum, natus hic. Saepe officiis similique officia doloribus
                    temporibus rem et cum culpa! Commodi nisi vero maxime eum incidunt
                    quaerat quasi rem id quas!`,
    image: Product1,
  },
];

function ProductDetails() {
  const { id } = useParams(); // Getting the id from URL params
  const [product, setProduct] = useState(null);
  console.log("id ", id);

  useEffect(() => {
    // Find the product based on id
    const selectedProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    console.log(selectedProduct);
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="productDetailsContainer">
      <div className="productHeader">
        <div className="productHeaderLeft">
          <h2>{product.name}</h2>
          <button> Download Specs</button>
        </div>
        <div className="productHeaderRight">
          <p>Price : {product.price}</p>
          <button>Buy</button>
        </div>
      </div>
      <div className="productBody">
        <div className="productBodyDescription">
          <p>{product.description}</p>
        </div>
        <div className="productBodyImg">
          <img src={product.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
