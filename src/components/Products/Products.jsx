import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  // searched text from redux store
  const searchedText = useSelector((state) => state.searchedText);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        if (searchedText) {
          setIsLoading(true);
          const data = res?.data?.products;
          if (data) {
            // filter by searched text
            const newFilteredData = data?.filter((product) =>
              product?.name
                ?.toLowerCase()
                ?.includes(searchedText?.toLowerCase())
            );
            // set searched data
            setProducts(newFilteredData);
            setIsLoading(false);
          }
        } else {
          // set all products, if anything is not searched
          setProducts(res?.data?.products);
          setIsLoading(false);
        }
      })
      .then((err) => {
        console.log(err?.message);
      });
  }, [searchedText]);

  // loading stage
  if (isLoading) {
    return (
      <span className="loading fixed top-[45%] loading-lg left-[50%] loading-spinner text-success"></span>
    );
  }
  // if any product not found
  else if (products.length === 0) {
    return (
      <img
        width={300}
        className="mx-auto mt-[20vh]"
        src="https://nagadhat.com.bd/public/images/no-product-found.png"
        alt="no-product-found-image"
      />
    );
  }

  return (
    <>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-[20px] lg:gap-[30px]">
        {products?.map((product) => (
          <Product key={product?.id} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
