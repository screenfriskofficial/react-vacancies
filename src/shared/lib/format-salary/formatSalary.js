export const formatSalary = (salary_min, salary_max, salary, currency = "") => {
  currency = currency.replace("«", "");
  currency = currency.replace("»", "");

  if (salary_min === 0 && salary_max === 0) {
    return "З/П по договоренности.";
  }
  if (salary_min === salary_max) {
    return salary_min + " " + currency || salary_max + " " + currency;
  }
  if (salary_min > 0 && salary_max > 0 && salary) {
    return `от ${salary_min} до  ${salary_max} ${currency}`;
  }

  if (salary_min === 0 && salary_max > 0) {
    return `до ${salary_max} ${currency}`;
  } else {
    return `от ${salary_min} ${currency}`;
  }
};
