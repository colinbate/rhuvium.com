import { Ingredients } from "./ingredients";
import { weightedRandom, getRandomInt } from "./random";
import { type Rule, execute, reset, RULES } from "./rules";
import { Sub } from "./subs";

const TOPPING_COUNT_WEIGHTS = [
  10, 20, 40, 90, 50, 30, 20, 15, 10, 10, 5, 2, 2,
].map((x, i) => ({ weight: x, num: i + 1 }));
const SAUCE_COUNT_WEIGHTS = [60, 150, 25, 16, 8, 4, 2, 1].map((x, i) => ({
  weight: x,
  num: i + 1,
}));

export function createRandomSub(exclude: {
  category: string[];
  sauce: string[];
  topping: string[];
}) {
  reset();
  const ingredients = new Ingredients();
  exclude.category.forEach((x) => ingredients.removeCategory(x));
  exclude.topping.forEach((x) => ingredients.removeTopping(x));
  exclude.sauce.forEach((x) => ingredients.removeSauce(x));
  return getRandomSub(ingredients, RULES);
}

export function trueRandomSub() {
  return getRandomSub(new Ingredients(), []);
}

function getRandomSub(ingredients: Ingredients, rules: Rule[] = []) {
  const sub = new Sub();
  execute(rules, sub, ingredients);
  if (sub.type == null) {
    sub.type = weightedRandom(ingredients.subs).item;
  }
  execute(rules, sub, ingredients);
  if (sub.bread == null) {
    sub.bread = weightedRandom(ingredients.bread).item;
  }
  execute(rules, sub, ingredients);
  if (sub.cheese == null) {
    sub.cheese = weightedRandom(ingredients.cheese).item;
  }
  execute(rules, sub, ingredients);
  let toppingCount = Math.min(
    weightedRandom(TOPPING_COUNT_WEIGHTS).item.num,
    ingredients.toppings.length
  );
  let sauceCount = Math.min(
    weightedRandom(SAUCE_COUNT_WEIGHTS).item.num,
    ingredients.sauces.length
  );
  while (sub.toppings.length < toppingCount) {
    let topping = weightedRandom(ingredients.toppings).item;
    ingredients.removeTopping(topping.id);
    sub.toppings.push(topping);
    execute(rules, sub, ingredients);
    if (sub.toppings.length + ingredients.toppings.length < toppingCount) {
      toppingCount = sub.toppings.length + ingredients.toppings.length;
    }
  }
  while (sub.sauces.length < sauceCount) {
    let sauce = weightedRandom(ingredients.sauces).item;
    ingredients.removeSauce(sauce.id);
    sub.sauces.push(sauce);
    execute(rules, sub, ingredients);
    if (sub.sauces.length + ingredients.sauces.length < sauceCount) {
      sauceCount = sub.sauces.length + ingredients.sauces.length;
    }
  }
  if (getRandomInt(10) < 5) {
    sub.toasted = true;
  }

  return sub;
}
