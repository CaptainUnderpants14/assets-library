import * as faIcons from "react-icons/fa";
import * as giIcons from "react-icons/gi";
import * as mdIcons from "react-icons/md";
import * as tbIcons from "react-icons/tb";
import * as ciIcons from "react-icons/ci";
import * as luIcons from "react-icons/lu";
import * as fiIcons from "react-icons/fi";
import * as tiIcons from "react-icons/ti";

// ================= IMPORTS =================

// 🍔 Food basics (FA)
// 🍜 Detailed food (GI)
// 🍽️ Material icons
// 🧰 Tabler icons
// 🆕 Coffee extras
// ================= MAP =================
export const foodIcons = {
  // 🍽️ General Food
  food: mdIcons.MdRestaurant,
  meal: mdIcons.MdLocalDining,
  fastfood: mdIcons.MdFastfood,

  // 🍳 Meals
  breakfast: mdIcons.MdOutlineBreakfastDining,
  lunch: mdIcons.MdOutlineLunchDining,
  dinner: mdIcons.MdDinnerDining,

  // 🍕 Popular Foods
  pizza: faIcons.FaPizzaSlice,
  pizzaFull: giIcons.GiFullPizza,
  burger: faIcons.FaHamburger,
  hotdog: faIcons.FaHotdog,
  fries: giIcons.GiFrenchFries,
  sandwich: giIcons.GiSandwich,
  steak: giIcons.GiSteak,
  chicken: giIcons.GiChickenOven,
  sushi: giIcons.GiSushis,
  noodles: giIcons.GiNoodles,

  // 🍰 Desserts
  cupcake: giIcons.GiCupcake,
  donut: giIcons.GiDonut,
  icecream: faIcons.FaIceCream,

  // 🍎 Fruits
  apple: faIcons.FaAppleAlt,
  banana: giIcons.GiBanana,
  strawberry: giIcons.GiStrawberry,
  watermelon: giIcons.GiWatermelon,
  orange: giIcons.GiOrangeSlice,
  grapes: giIcons.GiGrapes,
  fruitBowl: giIcons.GiFruitBowl,

  // 🥕 Ingredients
  carrot: faIcons.FaCarrot,
  egg: faIcons.FaEgg,
  fish: faIcons.FaFish,
  cheese: giIcons.GiCheeseWedge,
  bread: giIcons.GiBread,
  milk: giIcons.GiMilkCarton,

  // ☕ Drinks (GENERAL)
  coffee: faIcons.FaCoffee,
  coffeeAlt: mdIcons.MdCoffee,
  coffeeOutline: mdIcons.MdOutlineCoffee,

  coffeeHot: faIcons.FaMugHot,
  tea: mdIcons.MdLocalCafe,
  beer: faIcons.FaBeer,
  drink: tbIcons.TbGlassFull,
  bottle: tbIcons.TbBottle,

  // ☕ Coffee (DETAILED)
  coffeeBeans: giIcons.GiCoffeeBeans,
  coffeeBean: ciIcons.CiCoffeeBean,

  coffeeCup: ciIcons.CiCoffeeCup,
  coffeeCupAlt: giIcons.GiCoffeeCup,
  coffeeMug: giIcons.GiCoffeeMug,

  coffeeMaker: mdIcons.MdCoffeeMaker,
  coffeeMachine: mdIcons.MdOutlineCoffeeMaker,

  coffeeFi: fiIcons.FiCoffee,
  coffeeLu: luIcons.LuCoffee,
  coffeeTi: tiIcons.TiCoffee,

  // 🍴 Utensils
  utensils: giIcons.GiKnifeFork,
  spoon: giIcons.GiSpoon,
  forkSet: giIcons.GiForkKnifeSpoon,
  kitchenTools: tbIcons.TbToolsKitchen,

  // 🍳 Cooking
  cooking: giIcons.GiCookingPot,
  stove: giIcons.GiGasStove,
};