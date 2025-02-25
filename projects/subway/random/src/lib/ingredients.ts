import { BREAD, CHEESE, SAUCE, SUBTYPE, TOPPING } from "./data";

type IngredientType = "bread" | "cheese" | "subs" | "toppings" | "sauces";

export class Ingredients {
  bread = structuredClone(BREAD);
  cheese = structuredClone(CHEESE);
  subs = structuredClone(SUBTYPE);
  toppings = structuredClone(TOPPING);
  sauces = structuredClone(SAUCE);

  removeTopping(id: string) {
    this.toppings = this.toppings.filter((x) => x.id !== id);
  }

  removeSauce(id: string) {
    this.sauces = this.sauces.filter((x) => x.id !== id);
  }

  removeType(id: string) {
    this.subs = this.subs.filter((x) => x.id !== id);
  }

  removeCategory(id: string) {
    this.subs = this.subs.filter((x) => x.category.id !== id);
  }

  alterWeight(it: IngredientType, id: string, fn: (w: number) => number) {
    const index = this[it].findIndex((x) => x.id === id);
    if (index >= 0) {
      this[it][index].weight = fn(this[it][index].weight);
    }
  }
}
