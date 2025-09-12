import { image } from "../data/image";
export const categories = [
  {
    id: 1,
    title: "Farm Fresh Fruits",
    description:
      "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
    buttonText: "SHOP NOW",
    image: image.lemon,
    slug: "fruits",
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    description:
      "Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.",
    buttonText: "SHOP NOW",
    image: image.cabbage,
    slug: "vegetables",
  },
  {
    id: 3,
    title: "Organic Legume",
    description: "Phasellus sed urna mattis, viverra libero sed, aliquam est.",
    buttonText: "SHOP NOW",
    image: image.soybean, // ảnh đậu nành
    slug: "legumes",
  },
];
