const getCostsForCrop = (input) => {
  const costs = 1;
  const totalCosts = input.numCrops * costs;
  return totalCosts;
};



module.exports = {
  getCostsForCrop,
  getYieldForPlant,
};
