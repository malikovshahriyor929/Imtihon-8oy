"use client";
import Posts from "@/components/customers";
import ProductPage from "@/components/dynamic cart";
import Products2 from "@/components/products2";

export default async function Pag({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <ProductPage id={id} />
      <Posts />
      <Products2 />
    </div>
  );
}
// export default Page;
