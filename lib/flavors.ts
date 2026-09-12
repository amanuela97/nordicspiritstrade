export type Flavor = {
  name: string;
  subtitle: string;
  color: string;
  image: string;
  tastingNote: string;
  fruitEmoji: string;
};

export const flavors: Flavor[] = [
  {
    name: "Gin & Grapefruit",
    subtitle: "The Original",
    color: "#f4b942",
    image: "/assets/cans/gingrapefruit.webp",
    tastingNote:
      "Crisp Finnish gin balanced with zesty grapefruit soda. The one that started it all — light, refreshing, unmistakably Nordic.",
    fruitEmoji: "🍊",
  },
  {
    name: "Gin & Raspberry",
    subtitle: "Fruity Twist",
    color: "#d42255",
    image: "/assets/cans/raspberry.webp",
    tastingNote:
      "Vibrant raspberry meets premium gin. Sweet, tart, and wonderfully refreshing — a bold twist on the classic.",
    fruitEmoji: "🫐",
  },
  {
    name: "Gin & Lemon",
    subtitle: "Zesty & Fresh",
    color: "#c8d400",
    image: "/assets/cans/lemonade.webp",
    tastingNote:
      "Bright lemon soda meets Nordic gin. Tangy, light, and full of sunshine character — perfect for warm Nepali evenings.",
    fruitEmoji: "🍋",
  },
  {
    name: "Gin & Orange",
    subtitle: "Citrus Classic",
    color: "#ff7c2a",
    image: "/assets/cans/orange.webp",
    tastingNote:
      "Sun-kissed orange and premium gin in perfect balance. Warm, smooth, and endlessly drinkable.",
    fruitEmoji: "🍊",
  },
  {
    name: "Gin & Pineapple",
    subtitle: "Tropical Escape",
    color: "#e8c200",
    image: "/assets/cans/pineapple.webp",
    tastingNote:
      "A tropical spin on the Nordic classic. Sweet pineapple with a clean gin backbone — adventurous and refreshing.",
    fruitEmoji: "🍍",
  },
  {
    name: "Glögg Special",
    subtitle: "Winter Edition",
    color: "#8b2252",
    image: "/assets/cans/glogg.webp",
    tastingNote:
      "A Nordic seasonal expression. Warm spiced notes with a long drink twist — Finland's winter spirit in a can.",
    fruitEmoji: "🍷",
  },
];
