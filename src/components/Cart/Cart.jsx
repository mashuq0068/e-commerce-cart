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
import Swal from "sweetalert2";

const Cart = () => {
  // cart products from redux store
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //   delete product
  const handleDeleteProductFromCart = (key) => {
    dispatch(removeProduct(key));
  };
  //   increase quantity
  const handleIncreaseQuantity = (key) => {
    dispatch(increaseQuantity(key));
  };
  //   decrease quantity
  const handleDecreaseQuantity = (key) => {
    if (cartProducts[key]?.quantity === 1) {
      return dispatch(removeProduct(key));
    }
    dispatch(decreaseQuantity(key));
  };
  //   cancel order
  const handleCancelOrder = () => {
    dispatch(removeAllProducts());
  };
  //   handle purchase
  const handlePurchase = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to purchase all products!",
      icon: "info",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Purchase all",
      confirmButtonColor: "#16A34A",
    }).then((result) => {
      if (result.isConfirmed) {
        // if conformed all cart products will be removed
        dispatch(removeAllProducts());
        Swal.fire({
          title: "Congratulations!",
          text: "You successfully purchased your ordered products",
          icon: "success",
          confirmButtonColor: "#16A34A",
        });
      }
    });
  };
//   total price of cart products
  const totalAmount = cartProducts.reduce(
    (accumulator, product) => accumulator + product?.price * product?.quantity,
    0
  );
  return (
    <div
      className={`overflow-x-auto ${
        cartProducts.length > 0 ? "mt-8 lg:mt-14" : "mt-0"
      }   drop-shadow-lg shadow-lg shadow-black rounded-lg lg:w-max mx-auto`}
    >
        {/* cart */}
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
                <button
                  onClick={handleCancelOrder}
                  className="px-3 py-2 flex gap-0.5 items-center rounded-md bg-green-600 font-normal hover:bg-green-700 text-white"
                >
                  Cancel Order
                </button>
              </td>
              <td className=" flex gap-2 justify-end">
                <button
                  onClick={handlePurchase}
                  className="px-3 py-2 flex gap-0.5 items-center rounded-md bg-green-600 font-normal hover:bg-green-700 text-white"
                >
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
