import Product from "../product";
import Sort from "../Sort";
import "./homeStyle.css";

const products = Array.from({ length: 14 }, (_, index) => (
  <Product key={index} />
));
function Home() {
  return (
    <>
      <main className="home-bg">
        <Sort />
        <section className="product">
          {products}
          <Product />
        </section>
      </main>
    </>
  );
}

export default Home;
