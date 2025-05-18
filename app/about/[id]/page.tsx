import Posts from "@/components/customers";
import ProductPage from "@/components/dynamic cart";
import Products2 from "@/components/products2";
type params = { params: Promise<{ id: string }> };
const CardPage = async ({ params }: params) => {
  const { id } = await params;
  return (
    <>
      <ProductPage id={id} />
      <Posts />
      <Products2 />
    </>
  );
};

export default CardPage;
