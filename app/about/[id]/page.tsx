import Posts from "@/components/customers";
import ProductPage from "@/components/dynamic cart";
import Products2 from "@/components/products2";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  return (
    <>
      <ProductPage id={params.id} />
      <Posts />
      <Products2 />
    </>
  );
}
