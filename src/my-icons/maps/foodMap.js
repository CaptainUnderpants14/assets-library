// ================= IMPORTS =================

// 🍔 Food basics (FA)
import {
  FaAppleAlt,
  FaPizzaSlice,
  FaHamburger,
  FaHotdog,
  FaIceCream,
  FaCarrot,
  FaFish,
  FaEgg,
  FaCoffee,
  FaBeer,
  FaMugHot,
} from "react-icons/fa";

// 🍜 Detailed food (GI)
import {
  GiKnifeFork,
  GiSpoon,
  GiForkKnifeSpoon,
  GiFullPizza,
  GiChickenOven,
  GiSteak,
  GiSushis,
  GiNoodles,
  GiCupcake,
  GiDonut,
  GiFruitBowl,
  GiBanana,
  GiStrawberry,
  GiWatermelon,
  GiOrangeSlice,
  GiGrapes,
  GiMilkCarton,
  GiCheeseWedge,
  GiBread,
  GiSandwich,
  GiFrenchFries,
  GiCookingPot,
  GiGasStove,
  GiCoffeeBeans,
  GiCoffeeCup,
  GiCoffeeMug,
} from "react-icons/gi";

// 🍽️ Material icons
import {
  MdRestaurant,
  MdFastfood,
  MdLocalDining,
  MdOutlineLunchDining,
  MdDinnerDining,
  MdOutlineBreakfastDining,
  MdLocalCafe,
  MdCoffee,
  MdCoffeeMaker,
  MdOutlineCoffee,
  MdOutlineCoffeeMaker,
} from "react-icons/md";

// 🧰 Tabler icons
import {
  TbToolsKitchen,
  TbGlassFull,
  TbBottle,
} from "react-icons/tb";

// 🆕 Coffee extras
import { CiCoffeeBean, CiCoffeeCup } from "react-icons/ci";
import { LuCoffee } from "react-icons/lu";
import { FiCoffee } from "react-icons/fi";
import { TiCoffee } from "react-icons/ti";

// ================= MAP =================
export const foodIcons = {
  // 🍽️ General Food
  food: MdRestaurant,
  meal: MdLocalDining,
  fastfood: MdFastfood,

  // 🍳 Meals
  breakfast: MdOutlineBreakfastDining,
  lunch: MdOutlineLunchDining,
  dinner: MdDinnerDining,

  // 🍕 Popular Foods
  pizza: FaPizzaSlice,
  pizzaFull: GiFullPizza,
  burger: FaHamburger,
  hotdog: FaHotdog,
  fries: GiFrenchFries,
  sandwich: GiSandwich,
  steak: GiSteak,
  chicken: GiChickenOven,
  sushi: GiSushis,
  noodles: GiNoodles,

  // 🍰 Desserts
  cupcake: GiCupcake,
  donut: GiDonut,
  icecream: FaIceCream,

  // 🍎 Fruits
  apple: FaAppleAlt,
  banana: GiBanana,
  strawberry: GiStrawberry,
  watermelon: GiWatermelon,
  orange: GiOrangeSlice,
  grapes: GiGrapes,
  fruitBowl: GiFruitBowl,

  // 🥕 Ingredients
  carrot: FaCarrot,
  egg: FaEgg,
  fish: FaFish,
  cheese: GiCheeseWedge,
  bread: GiBread,
  milk: GiMilkCarton,

  // ☕ Drinks (GENERAL)
  coffee: FaCoffee,
  coffeeAlt: MdCoffee,
  coffeeOutline: MdOutlineCoffee,

  coffeeHot: FaMugHot,
  tea: MdLocalCafe,
  beer: FaBeer,
  drink: TbGlassFull,
  bottle: TbBottle,

  // ☕ Coffee (DETAILED)
  coffeeBeans: GiCoffeeBeans,
  coffeeBean: CiCoffeeBean,

  coffeeCup: CiCoffeeCup,
  coffeeCupAlt: GiCoffeeCup,
  coffeeMug: GiCoffeeMug,

  coffeeMaker: MdCoffeeMaker,
  coffeeMachine: MdOutlineCoffeeMaker,

  coffeeFi: FiCoffee,
  coffeeLu: LuCoffee,
  coffeeTi: TiCoffee,

  // 🍴 Utensils
  utensils: GiKnifeFork,
  spoon: GiSpoon,
  forkSet: GiForkKnifeSpoon,
  kitchenTools: TbToolsKitchen,

  // 🍳 Cooking
  cooking: GiCookingPot,
  stove: GiGasStove,
};