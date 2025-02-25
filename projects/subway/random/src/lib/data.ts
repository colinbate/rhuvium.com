import type { Bread, Category, Cheese, Sauce, SubType, Topping } from "./types";

export const BREAD: Bread[] = [
  {
    id: "1",
    name: "Italian",
    type: "white",
    weight: 50,
  },
  {
    id: "2",
    name: "Whole Wheat",
    type: "wheat",
    weight: 50,
  },
  {
    id: "3",
    name: "Parmesan Oregano",
    type: "white",
    weight: 50,
  },
  {
    id: "4",
    name: "Italian Herb and Cheese",
    type: "white",
    weight: 50,
  },
  {
    id: "5",
    name: "Honey Oat",
    type: "wheat",
    weight: 50,
  },
];

export const CATEGORY: Category[] = [
  {
    id: "1",
    name: "Chicken",
  },
  {
    id: "2",
    name: "Sandwich Meat",
  },
  {
    id: "3",
    name: "Compressed Meat",
  },
  {
    id: "4",
    name: "Vegetarian",
  },
  {
    id: "5",
    name: "Seafood",
  },
  {
    id: "6",
    name: "Mixed Meat",
  },
  {
    id: "7",
    name: "Beef",
  },
];

export const CHEESE: Cheese[] = [
  {
    id: "1",
    name: "Processed Cheddar",
    price: 0.0,
    weight: 50,
  },
  {
    id: "2",
    name: "Natural Cheddar",
    price: 0.0,
    weight: 50,
  },
  {
    id: "3",
    name: "Monterey Jack",
    price: 0.0,
    weight: 50,
  },
  {
    id: "4",
    name: "Shredded Monterey Cheddar",
    price: 0.3,
    weight: 50,
  },
];

export const SAUCE: Sauce[] = [
  {
    id: "1",
    name: "Mayonnaise",
    weight: 50,
  },
  {
    id: "2",
    name: "Yellow Mustard",
    weight: 50,
  },
  {
    id: "3",
    name: "Honey Mustard",
    weight: 50,
  },
  {
    id: "4",
    name: "Southwest Sauce",
    weight: 50,
  },
  {
    id: "5",
    name: "Sweet Onion Sauce",
    weight: 50,
  },
  {
    id: "6",
    name: "Ranch Dressing",
    weight: 50,
  },
  {
    id: "7",
    name: "Light Mayo-like Dressing",
    weight: 50,
  },
  {
    id: "8",
    name: "BBQ Sauce",
    weight: 50,
  },
];

export const TOPPING: Topping[] = [
  {
    id: "1",
    name: "Lettuce",
    spiciness: 1,
    sort: 1,
    weight: 50,
  },
  {
    id: "2",
    name: "Onion",
    spiciness: 5,
    sort: 2,
    weight: 50,
  },
  {
    id: "3",
    name: "Tomato",
    spiciness: 1,
    sort: 3,
    weight: 50,
  },
  {
    id: "4",
    name: "Cucumber",
    spiciness: 1,
    sort: 4,
    weight: 50,
  },
  {
    id: "5",
    name: "Pickle",
    spiciness: 4,
    sort: 5,
    weight: 50,
  },
  {
    id: "6",
    name: "Green Pepper",
    spiciness: 3,
    sort: 6,
    weight: 50,
  },
  {
    id: "7",
    name: "Black Olives",
    spiciness: 2,
    sort: 7,
    weight: 50,
  },
  {
    id: "8",
    name: "Banana Peppers",
    spiciness: 7,
    sort: 8,
    weight: 50,
  },
  {
    id: "9",
    name: "Carrot",
    spiciness: 1,
    sort: 9,
    weight: 50,
  },
  {
    id: "10",
    name: "Bacon",
    spiciness: 2,
    sort: 10,
    weight: 25,
    price: 0.6,
  },
  {
    id: "11",
    name: "Double Cheese",
    spiciness: 2,
    sort: 11,
    weight: 20,
    price: 0.3,
  },
  {
    id: "12",
    name: "Double Meat",
    spiciness: 2,
    sort: 12,
    weight: 10,
    price: 1.2,
  },
];

const SUBTYPE_RAW = [
  {
    id: "1",
    name: "Savory Turkey Breast",
    category: "1",
    sixinch: 3.99,
    footlong: 6.29,
  },
  {
    id: "2",
    name: "Savory Turkey Breast and Ham",
    category: "6",
    sixinch: 3.99,
    footlong: 6.99,
  },
  {
    id: "3",
    name: "Oven Roasted Chicken Breast",
    category: "1",
    sixinch: 4.89,
    footlong: 7.49,
  },
  {
    id: "4",
    name: "Chicken Teriyaki",
    category: "1",
    sixinch: 4.89,
    footlong: 7.49,
  },
  {
    id: "5",
    name: "Ham",
    category: "2",
    sixinch: 3.49,
    footlong: 5.49,
  },
  {
    id: "6",
    name: "Roast Beef",
    category: "7",
    sixinch: 3.99,
    footlong: 6.29,
  },
  {
    id: "7",
    name: "Subway Club",
    category: "6",
    sixinch: 4.49,
    footlong: 6.99,
  },
  {
    id: "8",
    name: "Meatball",
    category: "3",
    sixinch: 3.89,
    footlong: 5.89,
  },
  {
    id: "9",
    name: "Italian BMT",
    category: "2",
    sixinch: 3.89,
    footlong: 5.89,
  },
  {
    id: "10",
    name: "Cheese Steak",
    category: "7",
    sixinch: 4.89,
    footlong: 7.49,
  },
  {
    id: "11",
    name: "Turkey Breast, Ham and Bacon Melt",
    category: "6",
    sixinch: 4.59,
    footlong: 7.49,
  },
  {
    id: "12",
    name: "Classic Tuna",
    category: "5",
    sixinch: 3.89,
    footlong: 5.89,
  },
  {
    id: "13",
    name: "Seafood Sensation",
    category: "5",
    sixinch: 4.19,
    footlong: 6.29,
  },
  {
    id: "14",
    name: "Veggie Delite",
    category: "4",
    sixinch: 3.29,
    footlong: 4.49,
  },
  {
    id: "15",
    name: "Spicy Italian",
    category: "2",
    sixinch: 3.89,
    footlong: 5.89,
  },
  {
    id: "16",
    name: "Cold Cut Combo",
    category: "2",
    sixinch: 3.59,
    footlong: 5.59,
  },
  {
    id: "17",
    name: "BBQ Rib",
    category: "3",
    sixinch: 4.39,
    footlong: 6.99,
  },
  {
    id: "18",
    name: "Chicken Bacon Ranch",
    category: "1",
    sixinch: 5.79,
    footlong: 8.99,
  },
  {
    id: "19",
    name: "Angus Steak",
    category: "7",
    sixinch: 4.39,
    footlong: 6.89,
  },
];

export const SUBTYPE: SubType[] = SUBTYPE_RAW.map((x) => ({
  ...x,
  weight: 50,
  category: CATEGORY.find((c) => c.id === x.category) ?? {
    id: "none",
    name: "None",
  },
}));
