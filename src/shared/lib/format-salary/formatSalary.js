export const formatSalary = (salary_min, salary_max, salary, currency) => {
  if (salary_max === salary_min) {
    return `${
      salary === undefined ? "З/П не указана." : salary + " " + currency
    }`;
  } else if (salary_min && salary_max) {
    return `от ${salary_min} до ${salary_max} ${currency}`;
  } else if (salary_max) {
    return `до ${salary_max} ${currency}`;
  } else if (salary_min) {
    return `от ${salary_min} ${currency}`;
  } else {
    return `З/П не указана.`;
  }
};
