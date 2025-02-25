export interface Entity {
  id: string;
  name: string;
}

export interface Weighted {
  weight: number;
}

export interface Bread extends Entity, Weighted {
  type: "wheat" | "white";
}

export interface Category extends Entity {}

export interface Cheese extends Entity, Weighted {
  price: number;
}

export interface Sauce extends Entity, Weighted {}

export interface Topping extends Entity, Weighted {
  spiciness: number;
  sort: number;
  price?: number;
}

export interface SubType extends Entity, Weighted {
  category: Category;
  sixinch: number;
  footlong: number;
}
