// app/about/[id]/page.tsx

import Posts from "@/components/customers";
import ProductPage from "@/components/dynamic cart";
import Products2 from "@/components/products2";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <ProductPage id={params.id} />
      <Posts />
      <Products2 />
    </>
  );
}
