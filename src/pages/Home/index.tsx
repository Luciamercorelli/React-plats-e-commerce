import React from "react";
import Products from "../../assets/data/products.json";
import { ProductType } from "../../types/index";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "./home.css";

const Home: React.FC = () => {
  console.log(Products);

  return (
    <>
      <Header />
      <div className="plant-list">
        {Products.map((plant) => (
          <Link
            to={`/product/${plant.id}`}
            key={plant.id}
            className="plant-item"
          >
            <img src={plant.image} alt={plant.name} className="plant-box" />

            <h3 className="text">{plant.name}</h3>
            <p className="text">{`${plant.price}`}</p>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
