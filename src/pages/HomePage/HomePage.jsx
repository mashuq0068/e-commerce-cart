import Cart from "../../components/Cart/Cart";
import Products from "../../components/Products/Products";

const HomePage = () => {
  return (
    <main className="space-y-8 lg:space-y-14">
      <section>
        <Cart />
      </section>
      <section>
        <Products />
      </section>
    </main>
  );
};

export default HomePage;
