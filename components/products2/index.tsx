'use client';
import { ProductType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products2 = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    if (!baseUrl) return;

    fetch(baseUrl)
      .then((res) => res.json())
      .then((data: ProductType[]) => {
        setProducts(data.slice(4, 8));
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [baseUrl]);

  return (
    <div className="container2 !py-12 border-t">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">TOP SELLING</h1>
      
      <div className="grid grid-cols-4 gap-6 max-[1150px]:grid-cols-3 max-[850px]:grid-cols-2 max-[500px]:grid-cols-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={200}
              height={200}
              className="!w-full !h-[300px] !static mb-4 rounded-lg"
            />
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <div className="flex items-center mb-2">
              {[...Array(Math.round(product.rate))].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">{product.rate.toFixed(1)}</span>
            </div>
            <div className="flex items-center mb-2">
              <p className="text-gray-900 font-semibold">
                ${product.currentPrice.toFixed(2)}
              </p>
              {product.discount > 0 && (
                <p className="text-gray-500 line-through ml-2">
                  ${(product.currentPrice / (1 - product.discount / 100)).toFixed(2)}
                </p>
              )}
              {product.discount > 0 && (
                <span className="ml-2 text-red-500 bg-red-100 px-2 py-1 rounded-full text-sm">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-white text-black border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default Products2;