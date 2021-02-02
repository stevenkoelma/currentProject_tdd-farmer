const getCostsForCrop = (input) => {
  const costs = 1;
  const totalCosts = input.numCrops * costs;
  return totalCosts;
};

const getRevenueForCrop = (input) => input.yield * input.crop.salePrice;

module.exports = {
  getCostsForCrop,
  getRevenueForCrop,
};
