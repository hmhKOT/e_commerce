import React, { useState } from "react";
import Logo from "../../../assets/icon/logo.svg";
import { User, ShoppingBasket, Menu, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
const navLinks = [
  { label: "About", href: "/" },
  { label: "Everything", href: "/everything" },
  { label: "Groceries", href: "/" },
  { label: "Juice", href: "/" },
  { label: "Contant", href: "/" },
];
const navLinksSM = [
  { label: "About", href: "#" },
  { label: "Cart", href: "#" },
  { label: "Checkout", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Home", href: "#" },
  { label: "My account", href: "#" },
  { label: "Shop", href: "#" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <header className="bg-white">
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 sm:w-[300px] md:w-[700px] lg:w-[1200px]  m-auto lg:py-[15px]  gap-4 ">
        <img
          src={Logo}
          alt="Logo"
          className="lg:h-[70px] lg:w-[150px] sm:h-[47px] sm:w-[100px]"
        />
        <nav className="hidden lg:flex flex-row justify-center items-center m-2 ">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === "a"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary-600 px-5 font-opensans transition-colors"
                  : "text-black hover:text-primary-600 px-5 font-opensans transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        {!isMenuOpen && (
          <button className="lg:hidden flex items-center  justify-end">
            <span className=" bg-primary-600 p-2">
              <Menu
                className="h-6 w-6 text-white "
                onClick={() => setIsMenuOpen(true)}
              />
            </span>
          </button>
        )}
        <div className="sm:hidden lg:flex flex-row items-center justify-end gap-4">
          <p className="text-primary font-opensans ">
            £ {totalPrice.toFixed(1)}
          </p>
          <section className="relative">
            <ShoppingBasket className="h-5 w-5 text-primary" />
            <span className="absolute top-0 right-0 translate -translate-y-1 translate-x-1 text-[10px] px-1 font-bold bg-primary-600 rounded-full">
              {totalItems}
            </span>
          </section>
          <button>
            <User className="h-5 w-5" />
          </button>
        </div>
        <div>
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-1000 z-40
      ${
        isMenuOpen
          ? "opacity-50 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <aside
            className={`fixed right-0 top-0 bottom-0 w-[80%] bg-white shadow-lg z-50 
      transform transition-transform duration-1000 ease-in-out
      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex flex-row justify-end p-2">
              <button onClick={() => setIsMenuOpen(false)}>
                <span className="p-2">X</span>
              </button>
            </div>

            {/* Search box */}
            <div className="relative px-4">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-400 w-full p-2"
              />
              <Search className="h-5 w-5 absolute right-6 top-3" />
            </div>

            {/* Navigation */}
            <nav className="flex flex-col my-2">
              {navLinksSM.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-600 flex flex-row items-center px-5 leading-10 font-opensans hover:text-primary-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </header>
  );
};
