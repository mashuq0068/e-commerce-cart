/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/slices/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ product }) => {
  const { name, price, image, id } = product;
  //  cart products from redux store
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const data = {
    id,
    name,
    price,
    quantity: 1,
  };
  // add product to cart
  const handleAddToCart = async () => {
    // is product already added in cart
    const isProductAlreadyExist = await cartProducts.find(
      (product) => product?.id === data?.id
    );
    if (isProductAlreadyExist) {
      return toast.error("This product already added into cart", {
        duration: 3000,
        position: "top-center",
      });
    }
    dispatch(addProduct(data));
  };
  return (
    <>
    {/* tooster from react-hot-toast */}
    <Toaster/>
    <div className=" flex flex-col justify-between rounded-xl drop-shadow-xl  overflow-hidden shadow-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 bg-gray-300">
      <div>
        <div className=" w-[100%] h-[200px] overflow-hidden">
          <img
            className="w-full h-full object-cover origin-center"
            src={image}
            alt={name}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-medium text-base mb-2">{name}</div>
          <p className="text-green-600 text-base">${price}</p>
        </div>
      </div>
      <div className=" w-full  flex justify-center">
        <button
          onClick={handleAddToCart}
          className=" bg-green-600 flex justify-center items-center gap-2 w-full text-white font-medium py-2 px-4 rounded  transition-colors duration-300"
        >
          <MdOutlineShoppingCart className=" text-lg" />
          <p> Add to Cart</p>
        </button>
      </div>
    </div>
    </>
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
