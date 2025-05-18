"use client"
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CheckoutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-4xl font-bold text-center md:text-left">
          Check Out
        </h1>

        <div className="border p-6 rounded-md space-y-4">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <Input placeholder="First name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <Input placeholder="Last name" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <Input placeholder="Phone number" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <Input placeholder="Your Email" />
          </div>
        </div>

        <Button className="w-full text-lg py-6">Place Order</Button>
      </div>

      <div className="border p-6 rounded-md space-y-4 h-fit mt-16 max-[768px]:mt-0">
        <h2 className="text-xl font-semibold">Order summary</h2>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">🏷️</span>
            <span>JenkateMW</span>
          </div>
          <div className="text-green-500 font-medium">
            -$25.00{" "}
            <button className="text-sm text-green-600 underline ml-1">
              [Remove]
            </button>
          </div>
        </div>

        <div className="flex justify-between text-sm border-t pt-3">
          <span>Shipping</span>
          <span className="font-medium">Free</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span className="font-medium">$99.00</span>
        </div>

        <div className="flex justify-between border-t pt-4 text-lg font-semibold">
          <span>Total</span>
          <span>$234.00</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
