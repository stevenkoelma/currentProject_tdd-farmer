const getCostsForCrop = (input) => {
  const costs = 1;
  const totalCosts = input.numCrops * costs;
  return totalCosts;
};

const getRevenueForCrop = (input) => input.yield * input.crop.salePrice;

const getProfitForCrop = (input) =>
  getRevenueForCrop(input) - getCostsForCrop(input);

const getTotalProfit = (input) => {
  const arrayWithAllCrops = input.map((crop) => getProfitForCrop(crop));
  return arrayWithAllCrops.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

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
  const result = crop.yield * sun * wind;
  return parseFloat(result.toFixed(1));
};

const getYieldForCrop = (input, environmentFactors) =>
  getYieldForPlant(input.crop, environmentFactors) * input.numCrops;

module.exports = {
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
  getYieldForPlant,
  getYieldForCrop,
};
