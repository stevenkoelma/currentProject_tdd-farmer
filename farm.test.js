const { getCostsForCrop, getRevenueForCrop, getProfitForCrop } = require("./farm");

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

describe("getRevenueForCrop", () => {
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

//3. Bereken de winst voor een crop (zonder omgevingsfactoren): getProfitForCrop

describe("getProfitForCrop", () => {
    const carrot = {
        name: "carrot",
        salePrice: 10,
        
    }
const input = {
    crop: carrot,
    numCrops: 50,
    yield: 6
}
test("Get profit for crop", () => {
    expect(getProfitForCrop(input)).toBe(10)
})
})
