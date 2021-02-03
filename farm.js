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

module.exports = {
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
