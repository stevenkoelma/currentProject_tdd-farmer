const {
  getCostsForCrop,
  getRevenueForCrop,
  getYieldForPlant,
  getYieldForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

describe("getCostsForCrop", () => {
  const input = {
    numCrops: 100,
  };
  test("Get costs for crop", () => {
    expect(getCostsForCrop(input)).toBe(100);
  });
});

describe("getRevenueForCrop", () => {
  const pumpkin = {
    name: "pumpkin",
    salePrice: 6,
    yield: 6,
  };

  const input = {
    crop: pumpkin,
  };

  test("Get revenue for crop", () => {
    expect(getRevenueForCrop(input)).toBe(36);
  });
});

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
      wind: "medium",
    };

    expect(getYieldForPlant(corn, environmentFactors)).toBe(10.5);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop with no environment factors", () => {
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
  test("Get yield for crop, with factor sun high", () => {
    const corn = {
      name: "corn",
      yield: 3,
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
    const input = {
      crop: corn,
      numCrops: 10,
    };
    const environmentFactors = {
      sun: "high",
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(45);
  });
  test("Get yield for crop, with factor sun high and wind high", () => {
    const corn = {
      name: "corn",
      yield: 3,
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
    const input = {
      crop: corn,
      numCrops: 10,
    };
    const environmentFactors = {
      sun: "high",
      wind: "high",
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(18);
  });
});

describe("getProfitForCrop", () => {
  test("Get profit for crop with no environment factors", () => {
    const carrot = {
      name: "carrot",
      salePrice: 8,
      yield: 7,
    };
    const input = {
      crop: carrot,
      numCrops: 9,
    };
    expect(getProfitForCrop(input)).toBe(495);
  });

  test("Get profit for crop, with factor sun low", () => {
    const carrot = {
      name: "carrot",
      salePrice: 8,
      yield: 7,
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
    const input = {
      crop: carrot,
      numCrops: 9,
    };
    const environmentFactors = {
      sun: "low",
    };
    expect(getProfitForCrop(input, environmentFactors)).toBe(243);
  });
  test("Get profit for crop, with factor sun high and wind medium", () => {
    const carrot = {
      name: "carrot",
      salePrice: 4,
      yield: 8,
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
    const input = {
      crop: carrot,
      numCrops: 7,
    };
    const environmentFactors = {
      sun: "high",
      wind: "medium",
    };
    expect(getProfitForCrop(input, environmentFactors)).toBe(228.2);
  });
});

describe("getTotalProfit", () => {
  test("Get total profit for carrot, pumpkin and corn, with no environment factors", () => {
    const carrot = {
      name: "carrot",
      salePrice: 2,
      yield: 8,
    };

    const pumpkin = {
      name: "pumpkin",
      salePrice: 3,
      yield: 7,
    };

    const corn = {
      name: "corn",
      salePrice: 2,
      yield: 13,
    };

    const input = [
      { crop: carrot, numCrops: 8 },
      { crop: pumpkin, numCrops: 4 },
      { crop: corn, numCrops: 5 },
    ];

    expect(getTotalProfit(input)).toBe(325);
  });
  test("Get total profit for carrot, pumpkin and corn, with factor sun high", () => {
    const carrot = {
      name: "carrot",
      salePrice: 2,
      yield: 8,
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

    const pumpkin = {
      name: "pumpkin",
      salePrice: 3,
      yield: 7,
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

    const corn = {
      name: "corn",
      salePrice: 2,
      yield: 13,
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

    const input = [
      { crop: carrot, numCrops: 8 },
      { crop: pumpkin, numCrops: 4 },
      { crop: corn, numCrops: 5 },
    ];

    const environmentFactors = {
      sun: "high",
    };

    expect(getTotalProfit(input, environmentFactors)).toBe(496);
  });
  test("Get total profit for carrot, pumpkin and corn, with factor sun low and wind medium", () => {
    const carrot = {
      name: "carrot",
      salePrice: 2,
      yield: 4,
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

    const pumpkin = {
      name: "pumpkin",
      salePrice: 3,
      yield: 5,
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

    const corn = {
      name: "corn",
      salePrice: 2,
      yield: 4,
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

    const input = [
      { crop: carrot, numCrops: 8 },
      { crop: pumpkin, numCrops: 4 },
      { crop: corn, numCrops: 5 },
    ];

    const environmentFactors = {
      sun: "low",
      wind: "medium",
    };

    expect(getTotalProfit(input, environmentFactors)).toBe(40.4);
  });
});
