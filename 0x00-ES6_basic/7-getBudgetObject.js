export default function getBudgetObject(income, gdp, capita) {
  let budget = {};
    budget.income = income;
    budget.gdp = gdp;
    budget.capita = capita;

  return budget;
}
