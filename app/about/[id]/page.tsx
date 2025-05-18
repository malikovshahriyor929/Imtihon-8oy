import Posts from "@/components/customers";
import ProductPage from "@/components/dynamic cart";
import Products2 from "@/components/products2";
interface PageProps {
  params: {
    id: string;
  };
}
const CardPage = ({ params }: PageProps) => {
  const { id } = params;
  return (
    <>
      <ProductPage id={id} />
      <Posts />
      <Products2 />
    </>
  );
};

export default CardPage;
