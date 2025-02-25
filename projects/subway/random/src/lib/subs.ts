import type { Bread, Cheese, Sauce, SubType, Topping } from "./types";

const cadFmt = Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

export class Sub {
  type: SubType | undefined;
  bread: Bread | undefined;
  cheese: Cheese | undefined;
  toppings: Topping[] = [];
  sauces: Sauce[] = [];
  toasted = false;

  constructor() {
    this.reset();
  }

  reset() {
    this.type = undefined;
    this.bread = undefined;
    this.cheese = undefined;
    this.toppings = [];
    this.sauces = [];
    this.toasted = false;
  }

  hasSauce(id: string) {
    return this.sauces.findIndex((x) => x.id === id) >= 0;
  }

  hasTopping(id: string) {
    return this.toppings.findIndex((x) => x.id === id) >= 0;
  }

  getPrice(size: "sixinch" | "footlong"): string {
    const pfactor = size === "sixinch" ? 1 : 2;
    let sum = this.type?.[size] ?? 0;
    sum += this.cheese?.price ?? 0;
    sum += this.toppings.reduce((p, c) => p + (c.price ?? 0) * pfactor, 0);
    return cadFmt.format(sum);
  }

  toString(): string {
    return `${this.type?.name ?? "Unknown sub"} on ${
      this.bread?.name ?? "no bread"
    } with ${this.cheese?.name ?? "no"} cheese.
Toppings:
- ${this.toppings.join("\n- ")}
Sauce:
- ${this.sauces.join("\n- ")}`;
  }
}
