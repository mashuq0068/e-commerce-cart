import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        setProducts(res?.data?.products);
        console.log(`this is ${res?.data?.products}`);
      })
      .then((err) => {
        console.log(err?.message);
      });
  }, []);
  return (
    <>
      <div className="overflow-x-auto lg:w-max mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-0 px-6 gap-[20px] lg:gap-[30px]">
        {products?.map((product) => (
          <Product key={product?.id} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
