export type Flavor = {
  name: string;
  color: string;
  image: string;
};

export const flavors: Flavor[] = [
  {
    name: "Gin Grapefruit",
    color: "#f4b942",
    image: "/assets/cans/gingrapefruit.webp",
  },
  {
    name: "Orange",
    color: "#ff7c2a",
    image: "/assets/cans/orange.webp",
  },
  {
    name: "Pineapple",
    color: "#f0d800",
    image: "/assets/cans/pineapple.webp",
  },
  {
    name: "Raspberry",
    color: "#d42255",
    image: "/assets/cans/raspberry.webp",
  },
  {
    name: "Lemonade",
    color: "#b8d400",
    image: "/assets/cans/lemonade.webp",
  },
  {
    name: "Glögg",
    color: "#8b2252",
    image: "/assets/cans/glogg.webp",
  },
];
