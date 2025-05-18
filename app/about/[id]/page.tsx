"use client";
import Posts from "@/components/customers";
import ProductPage from "@/components/dynamic cart";
import Products2 from "@/components/products2";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  return (
    <div>
      <ProductPage id={params.id} />
      <Posts />
      <Products2 />
    </div>
  );
};
export default Page;
