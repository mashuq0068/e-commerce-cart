import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeAllProducts,
  removeProduct,
} from "../../Redux/slices/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";

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
  const handleCancelOrder = () => {
    dispatch(removeAllProducts())
  }
  const totalAmount = cartProducts.reduce(
    (accumulator, product) => accumulator + product?.price * product?.quantity,
    0
  );
  return (
    <div className="overflow-x-auto mt-8 lg:mt-14   drop-shadow-lg shadow-lg shadow-black rounded-lg lg:w-max mx-auto">
      {cartProducts.length > 0 && (
        <table className=" table  custom-table  bg-gray-300">
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
              <tr key={i} className="border-b  border-gray-200">
                <td>{i + 1}</td>
                <td className=" whitespace-nowrap">{product?.name}</td>
                <td className="text-center ">{product?.quantity}</td>
                <td className=" flex gap-5 items-center ">
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
          <tfoot className="">
            <tr className="bg-gray-300 font-normal text-black text-[14px]">
              <td className="text-lg text-gray-700">
                <RiSecurePaymentLine />
              </td>
              <td className="font-normal">
                Total Amount:{" "}
                <span className="text-green-600 font-semibold">
                  ${totalAmount.toFixed(2)}
                </span>
              </td>
              <td className="font-normal text-green-600">
                <button onClick={handleCancelOrder} className="px-3 py-2 flex gap-0.5 items-center rounded-md bg-green-600 font-normal hover:bg-green-700 text-white">
                  Cancel Order
                </button>
              </td>
              <td className=" flex gap-2 justify-end">
                <button className="px-3 py-2 flex gap-0.5 items-center rounded-md bg-green-600 font-normal hover:bg-green-700 text-white">
                  <MdAttachMoney className=" text-lg" />
                  Purchase
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Cart;
