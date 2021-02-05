const getCostsForCrop = (input) => {
  const costs = 1;
  const totalCosts = input.numCrops * costs;
  return totalCosts;
};

const getRevenueForCrop = (input) => input.crop.yield * input.crop.salePrice;

const getYieldForPlant = (crop, environmentFactors) => {
  if (!environmentFactors) {
    return crop.yield;
  }
  let sun = 1;
  let wind = 1;

  switch (environmentFactors.sun) {
    case "low":
      sun = (100 + crop.factors.sun.low) / 100;
      break;
    case "medium":
      sun = (100 + crop.factors.sun.medium) / 100;
      break;
    case "high":
      sun = (100 + crop.factors.sun.high) / 100;
  }
  switch (environmentFactors.wind) {
    case "low":
      wind = (100 + crop.factors.wind.low) / 100;
      break;
    case "medium":
      wind = (100 + crop.factors.wind.medium) / 100;
      break;
    case "high":
      wind = (100 + crop.factors.wind.high) / 100;
  }
  return crop.yield * sun * wind;
};

const getYieldForCrop = (input, environmentFactors) =>
  getYieldForPlant(input.crop, environmentFactors) * input.numCrops;

const getProfitForCrop = (input, factor) => {
  const result =
    getYieldForCrop(input, factor) * input.crop.salePrice -
    getCostsForCrop(input);
  return parseFloat(result.toFixed(1));
};

const getTotalProfit = (input, factor) => {
  const profitPerCrop = input.map((crop) => getProfitForCrop(crop, factor));
  const totalProfit = profitPerCrop.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return parseFloat(totalProfit.toFixed(1));
};

module.exports = {
  getCostsForCrop,
  getRevenueForCrop,
  getYieldForPlant,
  getYieldForCrop,
  getProfitForCrop,
  getTotalProfit,
};
