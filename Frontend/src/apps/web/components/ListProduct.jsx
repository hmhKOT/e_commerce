// ListProduct.jsx
import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/* Small helpers */
const formatPrice = (n) => `£${n.toFixed(2)}`;
const calcDiscountPercent = (oldP, p) =>
  oldP && oldP > p ? Math.round(((oldP - p) / oldP) * 100) : null;

/* Star icon */
const Star = ({ filled }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
    className="inline-block align-middle"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.163L12 18.896 4.666 23.16l1.4-8.163L.132 9.21l8.2-1.192z" />
  </svg>
);

const ListProduct = ({ products }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6 mt-10 px-2">
      {products.map((item) => {
        const discount = calcDiscountPercent(item.oldPrice, item.price);
        const ratingRounded = Math.round(item.rating || 0);

        return (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="group card relative max-w-[285px] mx-auto overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 focus-within:shadow-lg"
            tabIndex={-1}
            aria-labelledby={`product-${item.id}-title`}
          >
            {/* image wrapper: use arbitrary perspective, center the image */}
            <div className="[perspective:1200px] w-[285px] h-[285px] mx-auto overflow-hidden rounded-t-lg bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className={`w-full h-full object-cover relative z-10 transform-gpu transition-transform duration-300
                  [transform-style:preserve-3d] [backface-visibility:hidden] [will-change:transform]
                  group-hover:[transform:rotateY(-18deg)_translateZ(20px)_translateX(-8px)]
                  group-focus-within:[transform:rotateY(-18deg)_translateZ(20px)_translateX(-8px)]
                  group-hover:[box-shadow:0_20px_40px_rgba(0,0,0,0.18)]
                `}
              />

              {/* top-left discount badge */}
              {discount ? (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center justify-center bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {discount}% OFF
                  </span>
                </div>
              ) : null}

              {/* top-right small sale chip */}
              {item.isSale && !discount ? (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center justify-center bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow">
                    Sale
                  </span>
                </div>
              ) : null}

              {/* CTA overlay (hidden by default, appear on hover/focus) */}
              <div className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none">
                <div className="pointer-events-auto opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => console.log("Add to cart", item.id)}
                    className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            {/* meta */}
            <div className="p-4 text-center">
              <p className="text-sm text-gray-400 mb-1">{item.category}</p>

              <h3
                id={`product-${item.id}-title`}
                className="font-semibold text-gray-800 text-base mb-2 line-clamp-2"
                title={item.name}
              >
                {item.name}
              </h3>

              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-yellow-400" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < ratingRounded} />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  ({item.rating ?? 0})
                </span>
              </div>

              <div className="mb-3">
                {item.isSale && item.oldPrice ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="line-through text-gray-400">
                      {formatPrice(item.oldPrice)}
                    </span>
                    <span className="text-red-600 font-bold text-lg">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ) : (
                  <span className="font-bold text-lg text-gray-800">
                    {formatPrice(item.price)}
                  </span>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

ListProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      oldPrice: PropTypes.number,
      rating: PropTypes.number,
      image: PropTypes.string,
      isSale: PropTypes.bool,
    })
  ).isRequired,
};

export default memo(ListProduct);
