export const materials = {
  bases: [
    { name: "AC100", density: 1.75, ratio: 5 / 7 },
    { name: "AC730", density: 1.95, ratio: 5 / 6 },
  ],
  pigments: [
    { name: "White", density: 25, max: 0.02 },
    { name: "Black", density: 50, max: 0.02 },
  ],
  additives: [{ name: "retarder", max: 0.06 }],
};

export const units = {
  mass: [
    { name: "gram", symbol: "g", multiplier: 0.001 },
    { name: "kilogram", symbol: "kg", multiplier: 1 },
  ],
  volume: [
    { name: "millilitre", symbol: "ml", multiplier: 0.001 },
    { name: "litre", symbol: "l", multiplier: 1 },
  ],
};
