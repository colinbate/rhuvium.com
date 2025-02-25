import type { Weighted } from "./types";

let values: Uint32Array | undefined;
const MAX = 512;
let count = MAX;
const LARGEST = 4294967296;

/**
 * Get a random integer.
 * @param upper Upper bound exclusive.
 * @returns A random integer between 0 and one less than `upper`.
 */
export function getRandomInt(upper: number) {
  if (values == null || count === 0) {
    values = new Uint32Array(MAX);
    crypto.getRandomValues(values);
    count = MAX;
  }
  count -= 1;
  const rnd = values[count] / LARGEST;
  return Math.floor(upper * rnd);
}

export function weightedRandom<T extends Weighted>(items: T[]) {
  if (!items.length) {
    throw new Error("Items must not be empty");
  }
  const cumulativeWeights: number[] = [];
  for (let i = 0; i < items.length; i += 1) {
    cumulativeWeights[i] = items[i].weight + (cumulativeWeights[i - 1] || 0);
  }
  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = getRandomInt(maxCumulativeWeight + 1);
  for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      return {
        item: items[itemIndex],
        index: itemIndex,
        maxWeight: maxCumulativeWeight,
      };
    }
  }
  return {
    item: items[items.length - 1],
    index: items.length - 1,
    maxWeight: maxCumulativeWeight,
  };
}
