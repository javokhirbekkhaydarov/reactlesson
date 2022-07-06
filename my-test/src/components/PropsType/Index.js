import React from "react";
import { UseFetch } from "../CustomHook/UseFetch";
import Product from "./Product";
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = UseFetch(url);
  console.log(products);
  return (
    <div>
      <h2>Products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
