import Brends from "@/components/brends";
import Browse from "@/components/browse";
import Posts from "@/components/customers";
import Products from "@/components/products";
import Products2 from "@/components/products2";
import Showcase from "@/components/showcase";

const Home = () => {
  return (
    <>
      <Showcase />
      <Brends />
      <Products />
      <Products2 />
      <Browse />
      <Posts />
    </>
  );
};

export default Home;
