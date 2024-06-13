/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { MdOutlineShoppingCart } from "react-icons/md";

const Product = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="max-w-sm flex flex-col items-center justify-between rounded-xl drop-shadow-xl  overflow-hidden shadow-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 bg-white">
      <div>
        <div className=" w-[100%] h-[200px] overflow-hidden">
          <img
            className="w-full h-full object-cover origin-center"
            src={image}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-medium text-lg mb-2">{name}</div>
          <p className="text-gray-700 text-base">${price}</p>
        </div>
      </div>
      <div className=" w-full  flex justify-center">
        <button className=" bg-green-600 flex justify-center items-center gap-2 w-full text-white font-medium py-2 px-4 rounded  transition-colors duration-300">
          <MdOutlineShoppingCart className=" text-lg" />
          <p> Add to Cart</p>
        </button>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default Product;
