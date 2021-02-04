const {
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
  getYieldForPlant,
  getYieldForCrop,
} = require("./farm");

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
  };
  const input = {
    crop: carrot,
    numCrops: 50,
    yield: 6,
  };
  test("Get profit for crop", () => {
    expect(getProfitForCrop(input)).toBe(10);
  });
});

// 4. Bereken de winst voor een crop (zonder omgevingsfactoren): getProfitForCrop
describe("getTotalProfit", () => {
  const carrot = {
    name: "carrot",
    salePrice: 13,
  };

  const pumpkin = {
    name: "pumpkin",
    salePrice: 17,
  };

  const corn = {
    name: "corn",
    salePrice: 4,
  };

  const input = [
    { crop: carrot, numCrops: 8, yield: 11 },
    { crop: pumpkin, numCrops: 4, yield: 8 },
    { crop: corn, numCrops: 14, yield: 13 },
  ];
  test("Get total profit for carrot, pumpkin and corn", () => {
    expect(getTotalProfit(input)).toBe(305);
  });
});

//5. Neem omgevingsfactoren mee in het berekenen van de opbrengst (in kilo's) van een plant: getYieldForPlant

describe("getYieldForPlant", () => {
  test("Get yield for plant with no environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
    };
    expect(getYieldForPlant(corn)).toBe(30);
  });

  test("Get yield for plant with factor wind high", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 0,
          medium: -30,
          high: -60,
        },
      },
    };

    const environmentFactors = {
      wind: "high",
    };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(12);
  });

  test("Get yield for plant with factor sun low and wind medium", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 0,
          medium: -30,
          high: -60,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
      wind: "medium"
    };

    expect(getYieldForPlant(corn, environmentFactors)).toBe(10.5);
  });
});

// 6. Bereken de opbrengst in kilo's van een crop getYieldForCrop, neem omgevingsfactoren mee in je berekening

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});
