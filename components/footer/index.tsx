import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 pt-6 px-4  ">
      <div className="container2 ">
        <div className=" hidden max-[950px]:block py-4">
          <img
            src="/logo.png"
            alt="Shop.co Logo"
            width={100}
            height={50}
            className="mb-4"
          />
          <p className="text-sm">
            We have clothes that suits your style and which you{"'"}re proud to
            wear. From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
            <img
              src="/social.png"
              alt="Social Media Icons"
              width={100}
              height={20}
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 pb-4 max-[950px]:grid-cols-4 max-[600px]:grid-cols-2">
          <div className="mx-auto max-[950px]:hidden">
            <img
              src="/logo.png"
              alt="Shop.co Logo"
              width={100}
              height={50}
              className="mb-4"
            />
            <p className="text-sm">
              We have clothes that suits your style and which you{"'"}re proud
              to wear. From women to men.
            </p>
            <div className="flex space-x-4 mt-4">
              <img
                src="/social.png"
                alt="Social Media Icons"
                width={100}
                height={20}
              />
            </div>
          </div>

          <div className="mx-auto max-[600px]:mx-0">
            <h3 className="font-bold mb-2">COMPANY</h3>
            <ul className="text-sm space-y-2">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="mx-auto max-[600px]:mx-0">
            <h3 className="font-bold mb-2">HELP</h3>
            <ul className="text-sm space-y-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="mx-auto max-[600px]:mx-0">
            <h3 className="font-bold mb-2">FAQ</h3>
            <ul className="text-sm space-y-2">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div className="mx-auto max-[600px]:mx-0">
            <h3 className="font-bold mb-2">RESOURCES</h3>
            <ul className="text-sm space-y-2">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between border-t max-[600px]:flex-col">
          <p className="text-xs mt-4">
            Shop.co © 2000-2025. All Rights Reserved
          </p>
          <div className="mt-4">
            <img
              src="/payment.png"
              alt="Payment Methods"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
