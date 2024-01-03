function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

const getBudgetForCurrentYear = (income, gdp, capita) => {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
export default getBudgetForCurrentYear;
