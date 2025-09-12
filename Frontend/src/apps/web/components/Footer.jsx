import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "../../../assets/icon/logo.svg";
export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-[100px]">
      <div className="container mx-auto px-6 py-10">
        {/* Top section */}
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + short text */}
          <div className="max-sm:flex flex-col items-center justify-center">
            <img
              src={Logo}
              alt="Fresh Store"
              className="h-12 mb-4 max-sm:h-16 max-sm:w-28"
            />
            <p className=" text-gray-600 max-sm:text-center  dark:text-gray-400 text-sm">
              Fresh Store brings you 100% organic and eco-friendly products for
              a healthier lifestyle.
            </p>
          </div>

          {/* Navigation */}
          <div className="max-sm:flex flex-col items-center justify-center">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600">
                  Groceries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600">
                  Juice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="max-sm:flex flex-col items-center justify-center">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Customer Service
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="max-sm:flex flex-col items-center justify-center">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Fresh Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
