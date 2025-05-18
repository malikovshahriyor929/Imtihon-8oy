"use client";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { ProductType } from "@/types";

// const ProductPage = ({ id }: { id: string }) => {
//   const [product, setproduct] = useState<ProductType>();

//   useEffect(() => {
//     axios
//       .get(`https://67ee292bc11d5ff4bf788bb8.mockapi.io/Zustand/${id}`)
//       .then((res) => setproduct(res.data));
//   }, [id]);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
//       <div className="flex gap-4 items-center">
//         <div className="">
//           {product?.img && (
//             <div className="flex gap-4 flex-col">
//               <img
//                 src={product?.img}
//                 alt="T-shirt top left"
//                 width={150}
//                 height={150}
//                 className=" object-contain border rounded-lg"
//               />
//               <img
//                 src={product?.img}
//                 alt="T-shirt bottom right"
//                 width={150}
//                 height={150}
//                 className=" object-contain border rounded-lg"
//               />
//               <img
//                 src={product?.img}
//                 alt="T-shirt bottom right"
//                 width={150}
//                 height={150}
//                 className=" object-contain border rounded-lg"
//               />
//             </div>
//           )}
//         </div>
//         <div className="p-4 rounded-lg">
//           {product?.img && (
//             <img
//               src={product?.img}
//               alt="T-shirt preview"
//               width={500}
//               height={500}
//               className="object-contain rounded-lg mx-auto"
//             />
//           )}
//         </div>
//       </div>

//       <div className="space-y-6">
//         <h1 className="text-4xl font-bold">{product?.name.toUpperCase()}</h1>
//         <div className="flex items-center gap-2 text-yellow-500">
//           {Array(5)
//             .fill(1)
//             .map((_, i) => (
//               <Star key={i} className="w-5 h-5 fill-yellow-500" />
//             ))}
//           <span className="text-gray-700 text-sm">{product?.rate}/5</span>
//         </div>
//         <div className="flex items-center gap-4 text-2xl">
//           <span className="font-semibold">${product?.currentPrice}</span>
//           {product?.discount > 0 && (
//             <>
//               <span className="line-through text-gray-400">
//                 ${product?.price}
//               </span>
//               <span className="text-red-500">-{product?.discount}%</span>
//             </>
//           )}
//         </div>
//         <p className="text-gray-600 max-w-md">
//           This graphic t-shirt is perfect for any occasion. Crafted from a soft
//           and breathable fabric, it offers superior comfort and style.
//         </p>

//         <div>
//           <h3 className="font-medium mb-2">Select Colors</h3>
//           <div className="flex gap-3">
//             {product?.color.map((color) => (
//               <button
//                 key={color}
//                 className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-black"
//                 style={{ backgroundColor: color.toLowerCase() }}
//               />
//             ))}
//           </div>
//         </div>

//         <div>
//           <h3 className="font-medium mb-2">Choose Size</h3>
//           <div className="flex gap-3">
//             {product?.size.map((s) => (
//               <button
//                 key={s}
//                 className="px-4 py-2 rounded-full border hover:bg-black hover:text-white"
//               >
//                 {s}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <Button variant="outline">-</Button>
//           <span>1</span>
//           <Button variant="outline">+</Button>
//         </div>

//         <Button className="w-full text-lg py-6">Add to Cart</Button>
//       </div>
//     </div>
//   );
// };
// export default ProductPage;

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

const ProductPage = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<ProductType>();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://67ee292bc11d5ff4bf788bb8.mockapi.io/Zustand/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.size[0]);
      setSelectedColor(product.color[0]);
    }
  }, [product]);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Handler for Add to Cart button
  const handleAddToCart = () => {
    if (!product || !selectedSize || !selectedColor) return;
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.currentPrice,
        size: selectedSize,
        color: selectedColor,
        img: product.img,
        quantity,
      })
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      <div className="flex items-center gap-4">
        <div className="">
          {product?.img && (
            <div className="flex gap-4 flex-col">
              <Image
                src={product?.img}
                alt="T-shirt top left"
                width={150}
                height={150}
                className=" object-contain border rounded-lg"
              />
              <Image
                src={product?.img}
                alt="T-shirt bottom right"
                width={150}
                height={150}
                className=" object-contain border rounded-lg"
              />
              <Image
                src={product?.img}
                alt="T-shirt bottom right"
                width={150}
                height={150}
                className=" object-contain border rounded-lg"
              />
            </div>
          )}
        </div>
        <div className="p-4 rounded-lg">
          {product?.img && (
            <Image
              src={product?.img}
              alt="T-shirt preview"
              width={500}
              height={500}
              className="object-contain rounded-lg mx-auto"
            />
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product?.name.toUpperCase()}</h1>
          <div className="flex items-center gap-2 text-yellow-500">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500" />
              ))}
            <span className="text-gray-700 text-sm">{product?.rate}/5</span>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <span className="font-semibold">${product?.currentPrice}</span>
            {/* {product?.discount! > 0 && (
              <>
                <span className="line-through text-gray-400">
                  ${product?.price}
                </span>
                <span className="text-red-500">
                  -{product?.discount && product?.discount}%
                </span>
              </>
            )} */}
          </div>
          <p className="text-gray-600 max-w-md">
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div>
            <h3 className="font-medium mb-2">Select Colors</h3>
            <div className="flex gap-3">
              {product?.color.map((color: string) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-black"
                      : "border-gray-300 hover:border-black"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Choose Size</h3>
            <div className="flex gap-3">
              {product?.size.map((s) => (
                <button
                  key={s}
                  className={`px-4 py-2 rounded-full border hover:bg-black hover:text-white ${
                    selectedSize === s ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={handleDecrement}>
              -
            </Button>
            <span>{quantity}</span>
            <Button variant="outline" onClick={handleIncrement}>
              +
            </Button>
          </div>

          <Button className="w-full text-lg py-6" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
