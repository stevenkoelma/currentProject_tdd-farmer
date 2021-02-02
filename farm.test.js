const { getCostsForCrop, getRevenueForCrop } = require("./farm");

// 1. bereken de kosten voor een crop: getCostsForCrop

describe("getCostsForCrop", () => {
  const input = {
    numCrops: 100,
  };
  test("Get costs for crop", () => {
    expect(getCostsForCrop(input)).toBe(100);
  });
});

// 2. bereken inkomsten voor een crop (zonder omgevingsfactoren): getRevenueForCrop

describe.only("getRevenueForCrop", () => {
  const pumpkin = {
    name: "pumpkin",
    salePrice: 6,
  };

  const input = {
    crop: pumpkin,
    yield: 6,
  };

  test("Get revenue for crop", () => {
    expect(getRevenueForCrop(input)).toBe(36);
  });
});
