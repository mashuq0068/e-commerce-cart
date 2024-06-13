import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("../../../products.json")
      .then((res) => {
        setProducts(res?.data?.products);
      })
      .then((err) => {
        console.log(err?.message);
      });
  }, []);
  return (
    <div className=" grid grid-cols-4 gap-[20px] lg:gap-[30px]">
      {products?.map((product) => (
        <Product key={product?.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
