import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../../Redux/slices/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDeleteProductFromCart = (key) => {
    dispatch(removeProduct(key));
  };
  const handleIncreaseQuantity = (key) => {
    dispatch(increaseQuantity(key));
  };
  const handleDecreaseQuantity = (key) => {
    if (cartProducts[key]?.quantity === 1) {
      return dispatch(removeProduct(key));
    }
    dispatch(decreaseQuantity(key));
  };
  return (
    <div className="overflow-x-auto lg:w-max mx-auto">
      {cartProducts.length > 0 && (
        <table className="table rounded-lg bg-gray-300">
          {/* head */}
          <thead>
            <tr className=" text-base  bg-green-600 text-white">
              <th className="font-semibold">No</th>
              <th className="font-semibold">Product</th>
              <th className="font-semibold">Quantity</th>
              <th className="font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts?.map((product, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td>{i + 1}</td>
                <td>{product?.name}</td>
                <td className="text-center">{product?.quantity}</td>
                <td className=" flex gap-5 items-center text-center">
                  <button
                    onClick={() => handleDecreaseQuantity(i)}
                    className=" text-lg text-green-600"
                  >
                    <FiMinus />
                  </button>
                  <button
                    onClick={() => handleIncreaseQuantity(i)}
                    className=" text-lg text-green-600"
                  >
                    <FaPlus />
                  </button>

                  <button
                    onClick={() => handleDeleteProductFromCart(i)}
                    className=" text-lg text-green-600"
                  >
                    <RiDeleteBin6Line className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
