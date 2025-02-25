import { Ingredients } from "./ingredients";
import { Sub } from "./subs";
import type { Entity } from "./types";

export interface Rule extends Entity {
  trigger: (sub: Sub) => boolean;
  action: (sub: Sub, ing: Ingredients) => void;
}

const usedRules = new Set<string>();

export function reset() {
  usedRules.clear();
}

export function execute(rules: Rule[], sub: Sub, ing: Ingredients) {
  rules.forEach((r) => {
    if (!usedRules.has(r.id) && r.trigger(sub)) {
      r.action(sub, ing);
      usedRules.add(r.id);
    }
  });
}

export const RULES: Rule[] = [
  {
    id: "1",
    name: "Unconditionals",
    trigger() {
      return true;
    },
    action(sub: Sub, ing: Ingredients) {
      ing.alterWeight("toppings", "1", (x) => x * 3); // Lettuce more likely
      ing.alterWeight("toppings", "9", (x) => Math.floor(x / 2)); // Carrot less likely
      ing.alterWeight("sauces", "8", () => 35); // BBQ less likely
      ing.alterWeight("subs", "12", () => 30); // Tuna
      ing.alterWeight("subs", "13", () => 30); // Seafood
      ing.alterWeight("toppings", "8", () => 40); // Banana peppers
    },
  },
  {
    id: "2",
    name: "Avoid Double Mayo",
    trigger(sub) {
      return sub.hasSauce("1") || sub.hasSauce("7");
    },
    action(sub, ing) {
      if (sub.hasSauce("1")) {
        ing.removeSauce("7");
      } else {
        ing.removeSauce("1");
      }
    },
  },
  {
    id: "3",
    name: "Avoid Double Mustard",
    trigger(sub) {
      return sub.hasSauce("2") || sub.hasSauce("3");
    },
    action(sub, ing) {
      if (sub.hasSauce("2")) {
        ing.removeSauce("3");
      } else {
        ing.removeSauce("2");
      }
    },
  },
  {
    id: "4",
    name: "Sweet Onion Chicken Teriyaki",
    trigger(sub) {
      return sub.type?.id === "4";
    },
    action(sub, ing) {
      ing.alterWeight("sauces", "5", (w) => w * 4); // Sweet onion
    },
  },
  {
    id: "5",
    name: "Turkey Breast",
    trigger(sub) {
      return sub.type?.id === "1";
    },
    action(sub, ing) {
      ing.alterWeight("toppings", "8", (w) => w / 2); // Banana pepper
      ing.alterWeight("toppings", "5", (w) => w - 10); // Pickle
      ing.alterWeight("sauces", "8", (w) => w - 5); // BBQ
    },
  },
  {
    id: "6",
    name: "Vegetarian",
    trigger(sub) {
      return sub.type?.id === "14"; // Veggie
    },
    action(sub, ing) {
      ing.removeTopping("10"); // Bacon
      ing.removeTopping("12"); // Double meat
    },
  },
];
