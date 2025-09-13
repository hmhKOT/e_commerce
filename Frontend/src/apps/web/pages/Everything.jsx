import React, { useState, useEffect, useMemo } from "react";
import ListProduct from "../components/ListProduct";
import { allProducts } from "../../../mock/mockProducts";
import { Search, CircleX, Star, ListFilter } from "lucide-react";
const options = [5, 4, 3, 2, 1];
const brandsList = [
  "Panasonic",
  "Mitsubishi",
  "Toshiba",
  "Xiaomi",
  "Sharp",
  "Sony",
  "Samsung",
  "LG",
  "Philips",
  "Hitachi",
];
const serviceOptions = [
  "On Sale",
  "Style Collection",
  "New Arrival",
  "Available Now",
];
function Everything() {
  const [pageSize, setPageSize] = useState(9);
  const [page, setPage] = useState(1);

  // search state
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [viewFilter, setViewFilter] = useState(false);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearchQuery, minPrice, maxPrice]);

  const parseMin = useMemo(() => {
    const v = parseFloat(minPrice);
    return Number.isFinite(v) ? v : null;
  }, [minPrice]);
  const parseMax = useMemo(() => {
    const v = parseFloat(maxPrice);
    return Number.isFinite(v) ? v : null;
  }, [maxPrice]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (debouncedSearchQuery) {
        const markedName = product.name
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase());
        if (!markedName) return false;
      }
      if (parseMin !== null && product.price < parseMin) return false;
      if (parseMax !== null && product.price > parseMax) return false;

      return true;
    });
  }, [debouncedSearchQuery, parseMin, parseMax]);

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const clearFilters = () => {
    setSearchQuery("");
    setMinPrice("");
    setMaxPrice("");
    setPage(1);
  };
  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen bg-bg max-w-[80%] mx-auto my-14">
      <aside className="max-xl:col-span-12 lg:col-span-3 lg:border-r border-gray pl-2">
        <div className="xl:mr-[20px]">
          <div className="mb-4 flex flex-rows items-center gap-2 ">
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Search products..."
            />
            <button className="p-[10px] bg-primary-600 hover:bg-primary text-white rounded">
              <Search className="w-5 h-5" />
            </button>
          </div>
          {/* Additional filters can be added here */}
          <header className="flex flex-row items-center ju gap-2 relative mx-1">
            <h2 className="text-2xl font-merriweather">Filters :</h2>
            {allProducts.length > filteredProducts.length && (
              <button
                onClick={clearFilters}
                className="flex flex-row items-center gap-1 bg-slate-500 p-1 border rounded-full "
              >
                <p className="text-white text-[12px]">clear</p>
                <CircleX className="h-4 w-4 text-white" />
              </button>
            )}
            <button
              className="xl:hidden p-2 border rounded ml-auto "
              onClick={() => setViewFilter(!viewFilter)}
            >
              <ListFilter className="h-5 w-5" />
            </button>
          </header>
          <div className={`max-xl:${viewFilter ? "" : "hidden"}`}>
            <div className="py-4  border-b border-gray">
              <h3>Price Range:</h3>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="$-from"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <span>-</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="$-to"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="py-4  border-b border-gray flex flex-col gap-2">
              <h3 className="font-semibold mb-2">Brands</h3>
              {brandsList.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors"
                >
                  <input type="checkbox" className="accent-primary-600" />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
            <div className="py-4  border-b border-gray flex flex-col gap-2">
              <h3>Evaluate</h3>
              {options.map((stars) => (
                <button key={stars}>
                  <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < stars
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
            <div className="py-4  border-b border-gray flex flex-col gap-2">
              <h3 className="font-semibold mb-2">Services & Promotions</h3>
              {serviceOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors"
                >
                  <input type="checkbox" className="accent-primary-600" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className="col-span-12 xl:col-span-9  mx-2">
        <div className="flex max-md:flex-col md:flex-row items-center max-md:justify-center md:justify-between ">
          <div className="flex max-md:d:flex-row  md:flex-col items-center gap-2">
            <h1 className="md:text-3xl max-md:text-2xl font-merriweather mb-4">
              All Products
            </h1>
            <p className="text-sm text-muted">
              ({filteredProducts.length}) products found
            </p>
          </div>
          <div className="flex flex-row  items-center">
            <p>Short by :</p>
            <select className="border border-gray-300 rounded p-1 ml-2">
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
        <ListProduct products={currentProducts} />
        {/* Pagination controls */}
        <div className="flex justify-center items-center gap-2 mt-2 py-[50px]">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-2 py-1 border disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border ${
                page === i + 1 ? " bg-primary-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-2 py-1 border disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default Everything;
