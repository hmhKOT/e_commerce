import React from "react";
import {
  ShoppingCart,
  Truck,
  NotebookTabs,
  Banknote,
  Recycle,
  ArrowRight,
} from "lucide-react";
import { image } from "../../../data/image";
import { products } from "../../../mock/mockProducts";
import { categories } from "../../../mock/mockCategories";
const brands = [
  {
    id: 1,
    logo: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2025/06/logoipsum-215.svg",
  },
  {
    id: 2,
    logo: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2025/06/logoipsum-215.svg",
  },
  {
    id: 3,
    logo: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2025/06/logoipsum-215.svg",
  },
  {
    id: 4,
    logo: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2025/06/logoipsum-215.svg",
  },
  {
    id: 5,
    logo: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2025/06/logoipsum-215.svg",
  },
];
function Home() {
  return (
    <>
      <article className="sm:flex flex-col-reverse items-center  md:grid grid-cols-2 lg:mx-80 lg:py-28 bg-bg">
        <section>
          <img
            src={image.home}
            alt="Home"
            className="w-[608px] h-[521px] max-lg:w-[390px] max-lg:h-[320px] "
          />
        </section>
        <section className="flex flex-col justify-center max-md:items-center max-lg:mb-8 gap-2 lg:ml-[80px] mt-5">
          <img src={image.leaf} className="h-8 w-20 mb-4" />
          <h5 className="text-xl font-medium ">Best Quality Products</h5>
          <h1 className="text-5xl font-bold mb-6 max-md:text-center">
            Join The Organic Movement!
          </h1>
          <p className="text-lg mb-6 max-md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <button className="flex flex-row w-[175px] h-[48px] items-center justify-center bg-primary-600 p-2 rounded-sm hover:bg-primary text-white">
            <ShoppingCart />
            <span className="ml-2 ">SHOW NOW</span>
          </button>
        </section>
      </article>
      <div className="bg-black ">
        <nav className="py-[35px] px-5 lg:mx-[250px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4  ">
          <section className=" bg-[#333333] text-white flex flex-row  px-[25px] py-[35px] gap-4 ">
            <Truck className="text-primary h-6 w-8" />
            <div>
              <h2 className="text-white font-bold text-xl ">Free Shipping</h2>
              <p>Above $5 Only</p>
            </div>
          </section>
          <section className=" bg-[#333333] text-white flex flex-row  px-[25px] py-[35px] gap-4 ">
            <NotebookTabs className="text-primary h-6 w-8" />
            <div>
              <h2 className="text-white font-bold text-xl ">
                Certified Organic
              </h2>
              <p>100% Guarantee</p>
            </div>
          </section>
          <section className=" bg-[#333333] text-white flex flex-row  px-[25px] py-[35px] gap-4 ">
            <Banknote className="text-primary h-6 w-8" />
            <div>
              <h2 className="text-white font-bold text-xl ">Huge Savings</h2>
              <p>At Lowest Price</p>
            </div>
          </section>
          <section className=" bg-[#333333] text-white flex flex-row  px-[25px] py-[35px] gap-4 ">
            <Recycle className="text-primary h-6 w-8" />
            <div>
              <h2 className="text-white font-bold text-xl ">Easy Returns</h2>
              <p>No Questions Asked</p>
            </div>
          </section>
        </nav>
      </div>
      {/*Best Selling Products... */}
      <div className="bg-white">
        <div className="flex flex-col items-center mb-[16px] gap-2 pt-[100px]">
          <h1 className="text-3xl font-bold ">Best Selling Products</h1>
          <img src={image.leaf} className="w-[75px] h-[33px] " />
        </div>
        {/* <div className="flex flex-rows items-center justify-center gap-4 mt-10 pb-[100px] "> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(285px,1fr))] sm:max-w-[300px] md:max-w-[600px] lg:max-w-[1200px] mx-auto gap-4 mt-10 pb-[100px] ">
          {products.map((item) => (
            <div key={item.id} className="text-center relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-[285px] h-[285px] object-cover relative z-10"
              />
              <p className="text-gray-500">{item.category}</p>
              <h3 className="font-semibold">{item.name}</h3>
              <div className="text-yellow-400">★★★★★</div>
              <div className="mt-1">
                {item.isSale && item.oldPrice ? (
                  <div>
                    <span className="line-through text-gray-400 mr-2">
                      £{item.oldPrice.toFixed(2)}
                    </span>
                    <span className="text-red-500 font-bold">
                      £{item.price.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="font-bold">£{item.price.toFixed(2)}</span>
                )}
              </div>
              {item.isSale && (
                <span className="absolute z-20 top-0 right-0 bg-primary text-white text-xs  px-[10px] translate-x-[30%] -translate-y-[30%] py-4 rounded-full">
                  Sale!
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-bg">
        <div className="flex flex-row justify-center -translate-y-[50%]">
          <img src={image.basil} className="h-[70px] w-[162px]" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(365px,1fr))] sm:max-w-[600px]: md:max-w-[800px] lg:max-w-[1200px] mx-auto gap-4 pb-[100px]">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-6 relative w-[365px] h-[370px] pt-10 pl-10 mx-auto"
            >
              <div className=" relative z-20">
                <h3 className=" text-3xl font-bold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  {item.buttonText}
                </button>
              </div>

              <img
                src={item.image}
                alt={item.title}
                className=" h-56 object-contain  absolute z-0 bottom-0 right-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Get 25% Off On Your First Purchase! */}
      <div className="bg-[#f7f5f2] pb-8 ">
        <div className="relative bg-black text-white grid lg:grid-cols-2 sm:grid-row-2 gap-4 py-[60px] ">
          <h2 className=" font-bold  sm:text-center lg:text-end text-4xl">
            Get 25% Off On Your First Purchase!
          </h2>

          <div className="flex flex-rows items-center justify-center">
            <button className="flex flex-row w-[175px] h-[48px] items-center justify-center bg-primary-600 p-2 rounded-sm hover:bg-primary text-white">
              <ShoppingCart />
              <span className="ml-2 ">SHOW NOW</span>
            </button>
          </div>

          <div className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
        </div>

        <p className="mt-6 text-center text-lg font-medium text-black">
          Try It For Free. No Registration Needed.
        </p>
      </div>
      {/*Best Selling Products... */}
      <div className="bg-white">
        <div className="flex flex-col items-center mb-[16px] gap-2 pt-[100px]">
          <h1 className="text-3xl font-bold ">Trending Products</h1>
          <img src={image.leaf} className="w-[75px] h-[33px] " />
        </div>
        {/* <div className="flex flex-rows items-center justify-center gap-4 mt-10 pb-[100px] "> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(285px,1fr))] sm:max-w-[300px] md:max-w-[600px] lg:max-w-[1200px] mx-auto gap-4 mt-10 pb-[100px] ">
          {products.map((item) => (
            <div key={item.id} className="text-center relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-[285px] h-[285px] object-cover relative z-10"
              />
              <p className="text-gray-500">{item.category}</p>
              <h3 className="font-semibold">{item.name}</h3>
              <div className="text-yellow-400">★★★★★</div>
              <div className="mt-1">
                {item.isSale && item.oldPrice ? (
                  <div>
                    <span className="line-through text-gray-400 mr-2">
                      £{item.oldPrice.toFixed(2)}
                    </span>
                    <span className="text-red-500 font-bold">
                      £{item.price.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="font-bold">£{item.price.toFixed(2)}</span>
                )}
              </div>
              {item.isSale && (
                <span className="absolute z-20 top-0 right-0 bg-primary text-white text-xs  px-[10px] translate-x-[30%] -translate-y-[30%] py-4 rounded-full">
                  Sale!
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <section
        aria-label="Featured promotions and testimonials"
        className="py-12 px-4 bg-bg"
      >
        <div className="flex flex-col items-center mb-[16px] gap-2 pt-[100px]">
          <h1 className="text-3xl font-bold ">Customers Reviews</h1>
          <img src={image.leaf} className="w-[75px] h-[33px] " />
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(345px,1fr))] max-w-6xl mx-auto gap-4">
          <li className="min-h-[440px] flex flex-col items-center justify-center">
            <article className="max-h-[360px] bg-white p-[45px] flex flex-col gap-4 relative translate-y-[40px] border rounded-sm">
              <div className="text-yellow-400 text-center">★★★★★</div>
              <p className="text-center text-xl">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo
              </p>
              <div className="flex -flew-row items-center justify-center gap-2">
                <figure className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={
                      "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png"
                    }
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <figcaption className="text-sm text-gray-800">
                  Mila Kunis
                </figcaption>
              </div>
            </article>
          </li>
          <li
            className="min-h-[440px]  relative flex flew-col items-center justify-center border rounded-sm  shadow-md shadow-black"
            style={{
              backgroundImage: `url(${image.sale})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="inset-0 bg-black/50 absolute z-0  border rounded-sm" />
            <article>
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Deal Of The Day 15% Off On All Vegetables!
                </h2>
                <p className="text-white mb-6">
                  I am text block. Click edit button to change this tex em ips.
                </p>
                <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary flex flex-row">
                  <p>SHOP NOW</p> <ArrowRight />
                </button>
              </div>
            </article>
          </li>
          <li className="min-h-[440px] flex flex-col items-center justify-center">
            <article className="max-h-[360px] bg-white p-[45px] flex flex-col gap-4 relative translate-y-[40px] border rounded-sm">
              <div className="text-yellow-400 text-center">★★★★★</div>
              <p className="text-center text-xl">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex -flew-row items-center justify-center gap-2">
                <figure className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={
                      "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png"
                    }
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <figcaption className="text-sm text-gray-800">
                  Mila Kunis
                </figcaption>
              </div>
            </article>
          </li>
        </ul>
      </section>
      <section className="bg-[#f9f7f4] py-6">
        <div className="max-w-6xl mx-auto flex max-md:flex-col items-center justify-center gap-12 px-4">
          <h2 className="font-semibold text-lg whitespace-nowrap">
            Featured Brands:
          </h2>

          <div className="flex lg:flex-rows sm:flex-rows  items-center gap-10 flex-wrap justify-center">
            {brands.map((brand) => (
              <img
                key={brand.id}
                src={brand.logo}
                alt="Brand logo"
                className="h-10 object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
