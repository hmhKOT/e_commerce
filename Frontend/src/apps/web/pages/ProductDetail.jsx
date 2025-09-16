import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { mockCombos, mockProduct, products } from "../../../mock/mockProducts";
import ListProducts from "../components/ListProduct";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { fadeInUp } from "../../../shared/utils/animations";

function QuantityInput({ value, setValue, max }) {
  return (
    <div className="flex items-center border rounded-sm overflow-hidden w-28">
      <button
        className="px-3 py-2 text-lg"
        onClick={() => setValue((v) => Math.max(1, v - 1))}
        aria-label="decrease"
      >
        -
      </button>
      <input
        className="w-12 text-center outline-none"
        value={value}
        onChange={(e) => {
          const v = Number(e.target.value || 0);
          if (Number.isFinite(v)) setValue(Math.min(Math.max(1, v), max));
        }}
      />
      <button
        className="px-3 py-2 text-lg"
        onClick={() => setValue((v) => Math.min(max, v + 1))}
        aria-label="increase"
      >
        +
      </button>
    </div>
  );
}

export default function ProductDetail({
  product = mockProduct,
  combos = mockCombos,
}) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [qty, setQty] = useState(1);
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [tab, setTab] = useState("description");

  function handleAddToCart() {
    const payload = {
      productId: product.id,
      qty,
      comboId: selectedCombo ? selectedCombo.id : null,
    };

    console.log("ADD TO CART", payload);
    alert("Added to cart: " + JSON.stringify(payload));
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-100 rounded-md">
            <Reveal
              withMask
              maskColor="bg-white"
              distance={50}
              duration={0.6}
              delay={0.05}
            >
              <motion.img
                variants={fadeInUp}
                src={selectedImage}
                alt={product.title}
                className="w-full h-[520px] object-contain rounded-md shadow"
              />
            </Reveal>
          </div>
          <Reveal
            withMask
            maskColor="bg-white"
            distance={50}
            duration={0.6}
            delay={0.05}
          >
            <motion.div variants={fadeInUp} className="flex gap-3 mt-4 p-1">
              {product.images.map((img) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 border rounded overflow-hidden flex items-center justify-center ${
                    selectedImage === img ? "ring-2 ring-green-500" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </motion.div>
          </Reveal>
        </div>

        <div>
          <section>
            <Reveal
              withMask
              maskColor="bg-white"
              distance={50}
              duration={0.6}
              delay={0.05}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-3xl font-bold mb-2"
              >
                {product.title}
              </motion.h1>
              <motion.div
                variants={fadeInUp}
                className="flex items-baseline gap-3 mb-4"
              >
                <span className="text-2xl font-extrabold">
                  {product.currency}
                  {product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">+ Free Shipping</span>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                {product.shortDescription}
              </motion.p>
            </Reveal>
          </section>
          <Reveal
            withMask
            maskColor="bg-white"
            distance={50}
            duration={0.6}
            delay={0.05}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-4"
            >
              <QuantityInput
                value={qty}
                setValue={setQty}
                max={product.stock}
              />

              <CustomButton
                onClick={handleAddToCart}
                label="ADD TO CART"
                size="md"
                variant="primary"
                ariaLabel="Add to cart"
              />
            </motion.div>
          </Reveal>
          <div className="border-t pt-4 mt-4">
            <Reveal
              withMask
              maskColor="bg-white"
              distance={50}
              duration={0.6}
              delay={0.05}
            >
              <motion.div variants={fadeInUp} className="text-sm text-gray-600">
                Categories:{" "}
                {product.categories.map((c, i) => (
                  <span key={c} className="text-green-600 mr-2">
                    {c}
                    {i < product.categories.length - 1 ? "," : ""}
                  </span>
                ))}
              </motion.div>
            </Reveal>

            {/* Combo selection */}
            <Reveal
              withMask
              maskColor="bg-white"
              distance={50}
              duration={0.6}
              delay={0.05}
            >
              <motion.div variants={fadeInUp} className="mt-6">
                <h3 className="font-semibold mb-2">Buy as a combo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {combos.map((c) => (
                    <label
                      key={c.id}
                      className={`border rounded p-3 cursor-pointer flex flex-col justify-between ${
                        selectedCombo && selectedCombo.id === c.id
                          ? "ring-2 ring-green-400"
                          : ""
                      }`}
                    >
                      <div>
                        <div className="font-medium">{c.title}</div>
                        <div className="text-sm text-gray-500">
                          {c.items.map((it) => it.name).join(", ")}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                          {product.currency}
                          {c.price.toFixed(2)}
                        </div>
                        <input
                          type="radio"
                          name="combo"
                          checked={selectedCombo?.id === c.id}
                          onChange={() => setSelectedCombo(c)}
                          className="ml-2"
                        />
                      </div>
                    </label>
                  ))}
                  <label className="border rounded p-3 flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="combo"
                      checked={!selectedCombo}
                      onChange={() => setSelectedCombo(null)}
                    />
                    <div className="text-sm">No combo</div>
                  </label>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Reveal
        withMask
        maskColor="bg-white"
        distance={50}
        duration={0.6}
        delay={0.05}
      >
        <motion.div variants={fadeInUp} className="mt-8">
          <div className="border-b">
            <nav className="flex gap-6 text-sm">
              <button
                className={`pb-3 ${
                  tab === "description"
                    ? "border-b-4 border-green-400 font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => setTab("description")}
              >
                Description
              </button>
              <button
                className={`pb-3 ${
                  tab === "reviews"
                    ? "border-b-4 border-green-400 font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => setTab("reviews")}
              >
                Reviews (0)
              </button>
            </nav>
          </div>

          <div className="mt-4 mb-[50px] text-gray-700 ">
            {tab === "description" && <p>{product.description}</p>}
            {tab === "reviews" && <p>No reviews yet.</p>}
          </div>
        </motion.div>
      </Reveal>
      <section>
        <Reveal
          withMask
          maskColor="bg-white"
          distance={50}
          duration={0.6}
          delay={0.05}
        >
          <motion.h1
            variants={fadeInUp}
            className=" text-4xl font-merriweather "
          >
            Related products :
          </motion.h1>
          <motion.div variants={fadeInUp}>
            <ListProducts products={products.slice(0, 3)} />
          </motion.div>
        </Reveal>
      </section>
    </div>
  );
}
