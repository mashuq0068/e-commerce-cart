import { useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Cart from "../../components/Cart/Cart";
import Products from "../../components/Products/Products";

const HomePage = () => {
  // cart products from redux store
  const cartProducts = useSelector((state) => state.cart);
  return (
    <main className="space-y-8 lg:space-y-14 pb-8 lg:pb-14">
      {/* banner section */}
      <section>
        <Banner />
      </section>
      {/* cart section */}
      {cartProducts.length > 0 && (
        <section className=" sticky top-[100px] md:top-[67px] z-20 lg:w-max mx-auto left-[5px] ">
          <Cart />
        </section>
      )}
      {/* products section */}
      <section>
        <Products />
      </section>
    </main>
  );
};

export default HomePage;
