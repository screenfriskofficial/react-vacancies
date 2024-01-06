export const formatSalary = (salary_min, salary_max, salary, currency = "") => {
  currency = currency.replace("«", "");
  currency = currency.replace("»", "");
  if (salary_max === undefined && salary_min === undefined && salary) {
    return salary + " " + currency;
  } else if (salary_min === salary_max) {
    return `${
      salary_min === undefined || salary_max === undefined
        ? salary + " " + currency
        : "З/П не указана."
    }`;
  } else if (salary_min && salary_max) {
    return `от ${salary_min} до ${salary_max} ${currency}`;
  } else if (salary_max) {
    return `до ${salary_max} ${currency}`;
  } else if (salary_min) {
    return `от ${salary_min} ${currency}`;
  } else {
    return "З/П не указана.";
  }
};
