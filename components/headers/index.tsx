"use client";
import {
  AlignJustify,
  ChevronDown,
  CircleUser,
  Search,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";

const Header = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  return (
    <header className="container2 flex items-center justify-between !py-[20px] gap-5">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify className="hidden max-[702px]:block cursor-pointer " />
          </SheetTrigger>

          <SheetContent side="left" className="w-[230px]">
            <SheetHeader>
              <SheetTitle className="relative ">
                <Image src="./logo.png" alt="Logo" fill className="h-4" />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-4 gap-4  ">
              <a href="#" className="font-normal">
                Shop
              </a>
              <a href="#" className="font-normal">
                On Sale
              </a>
              <a href="#" className="font-normal">
                New Arrivals
              </a>
              <a href="#" className="font-normal">
                Brands
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href={"/"} className="relative ">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="!static !h-6 max-[500px]:h-4 "
          />
        </Link>
      </div>

      <nav className="flex items-center gap-5 max-[702px]:hidden">
        <a href="#" className="font-normal flex items-center">
          Shop <ChevronDown className="ml-1 mt-1" />
        </a>
        <a href="#" className="font-normal">
          On Sale
        </a>
        <a href="#" className="font-normal">
          New Arrivals
        </a>
        <a href="#" className="font-normal">
          Brands
        </a>
      </nav>

      <nav className="flex items-center gap-2 rounded-lg p-2 px-4 bg-[#f0f0f0] w-[50%] max-[1440px]:w-[40%] max-[1204px]:w-[30%] max-[1035px]:hidden">
        <Search className="opacity-40" />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none w-full"
        />
      </nav>

      <nav className="flex items-center gap-5">
        <Search className="hidden max-[1035px]:block" />
        <Link href={"/cart"}>
          <div className="relative ">
            <ShoppingCart />
            <div className="absolute -top-2 -right-2 text-white bg-red-500 rounded-full size-4 text-sm flex items-center justify-center ">
              {items.length}
            </div>
          </div>
        </Link>
        <CircleUser />
      </nav>
    </header>
  );
};

export default Header;
