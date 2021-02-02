const getCostsForCrop = (input) => {
  const costs = 1;
  const totalCosts = input.numCrops * costs;
  return totalCosts;
};

const getRevenueForCrop = (input) => input.yield * input.crop.salePrice;

const getProfitForCrop = (input) => getRevenueForCrop(input) - getCostsForCrop(input)

module.exports = {
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop
};
