import React from "react";
import PropTypes from "prop-types";

const ListProduct = ({ products }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(285px,1fr))] mx-auto gap-4 mt-10 ">
      {products.map((item) => (
        <div key={item.id} className="relative max-w-[285px] mx-auto">
          <img
            src={item.image}
            alt={item.name}
            className="w-[285px] h-[285px] object-cover relative z-10"
          />
          <p className="text-gray-500 text-center">{item.category}</p>
          <h3 className="font-semibold text-center">{item.name}</h3>
          <div className="text-yellow-400 text-center">★★★★★</div>
          <div className="mt-1 text-center">
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

export default ListProduct;
