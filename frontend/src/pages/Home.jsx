import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from '../components/ProductCard';
import "./Home.css";
const Home = () => {

const [product, setProduct] = useState([]);

useEffect(() => {
    axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product`)
        .then((response) => {
            setProduct(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);

const latestProducts = product.slice(0, 3);

  return (
    <div className="p-4 max-w-[1300px] mx-auto mt-16">
      <div className="hero-content text-center mb-24">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-teal-700">CodeDeck</span>
          </h1>
          <p className="py-6">
            We offer the high quality online courses for programming and website
            templates you can buy.
          </p>
          <div className='container'>
      <div className='button-div'></div>
      <a href="/shop" className="text-white text-2xl font-bold">
        Shop
      </a>
    </div>
        </div>
      </div>
      
    <ProductCard product={latestProducts} />

    </div>
  )
}

export default Home