"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/store/cartSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Cart() {
  const [promo, setPromo] = useState("");

  const { items } = useSelector((state: RootState) => state.cart);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    // <div className="p-6">
    //   <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
    //   <div className="flex flex-col lg:flex-row gap-6">
    //     <div className="flex-1 space-y-6">
    //       {cartItems.map((item) => (
    //         <div
    //           key={item.id}
    //           className="flex items-center gap-4 border-b pb-4"
    //         >
    //           <img
    //             src={item.img}
    //             alt={item.name}
    //             className="w-28 h-28 rounded bg-gray-100 object-cover"
    //           />
    //           <div className="flex-1">
    //             <h2 className="text-lg font-semibold">{item.name}</h2>
    //             <p className="text-sm text-gray-500">Size: {item.size}</p>
    //             <p className="text-sm text-gray-500">Color: {item.color}</p>
    //             <p className="text-lg font-bold mt-1">${item.price}</p>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             <Button
    //               variant="ghost"
    //               onClick={() => updateQuantity(item.id, -1)}
    //             >
    //               -
    //             </Button>
    //             <span className="px-2 text-lg">{item.quantity}</span>
    //             <Button
    //               variant="ghost"
    //               onClick={() => updateQuantity(item.id, 1)}
    //             >
    //               +
    //             </Button>
    //           </div>
    //           <Button
    //             variant="ghost"
    //             size="icon"
    //             onClick={() => removeItem(item.id)}
    //           >
    //             <Trash2 className="text-red-500" />
    //           </Button>
    //         </div>
    //       ))}
    //     </div>

    //     <div className="w-full lg:w-1/3 border p-6 rounded-xl space-y-4">
    //       <h2 className="text-2xl font-semibold">Order Summary</h2>
    //       <div className="flex justify-between">
    //         <span>Subtotal</span>
    //         <span className="font-semibold">${subtotal}</span>
    //       </div>
    //       <div className="flex justify-between text-red-500">
    //         <span>Discount (-20%)</span>
    //         <span>-${discount}</span>
    //       </div>
    //       <div className="flex justify-between">
    //         <span>Delivery Fee</span>
    //         <span>${delivery}</span>
    //       </div>
    //       <hr />
    //       <div className="flex justify-between text-xl font-bold">
    //         <span>Total</span>
    //         <span>${total}</span>
    //       </div>

    //       <div className="flex gap-2">
    //         <Input
    //           placeholder="Add promo code"
    //           value={promo}
    //           onChange={(e) => setPromo(e.target.value)}
    //         />
    //         <Button>Apply</Button>
    //       </div>

    //       <Button className="w-full mt-2 text-white text-lg">
    //         Go to Checkout <ArrowRight className="ml-2" />
    //       </Button>
    //     </div>
    //   </div>
    // </div>
    <div className="p-6 mx-auto max-w-[1440px] w-[90%]">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4 max-[530px]:flex-col max-[530px]:items-start"
            >
              <div className="flex items-center gap-4 w-1/2 max-[530px]:w-full ">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="!w-28 !h-28 rounded bg-gray-100 object-cover"
                />
                <div className="flex-1 max-w-[300px] w-full">
                  <h2 className="text-lg font-semibold max-[305px]:text-[16px] ">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="text-lg font-bold mt-1">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center w-1/2 max-[530px]:w-full justify-end  ">
                <div className="flex items-center gap-2 ">
                  <Button
                    variant="ghost"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </Button>
                  <span className="px-2 text-lg">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Trash2 className="text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 border p-6 rounded-xl space-y-4">
          <h2 className="text-2xl font-semibold">Order Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Discount (-20%)</span>
            <span>-${discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${delivery}</span>
          </div>
          <hr />
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Add promo code"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
            <Button>Apply</Button>
          </div>

          <Button
            onClick={() => router.push("/check")}
            className="w-full mt-2 text-white text-lg"
          >
            Go to Checkout <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
