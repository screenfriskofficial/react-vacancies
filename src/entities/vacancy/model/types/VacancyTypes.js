import PropTypes from "prop-types";

export const VacancyTypes = {
  id: PropTypes.string,
  salary_min: PropTypes.number,
  duty: PropTypes.string,
  creation_date: PropTypes.string,
  url: PropTypes.string,
  salary_max: PropTypes.number,
  currency: PropTypes.string,
  company: PropTypes.object,
  job_name: PropTypes.string,
  salary: PropTypes.string,
  vacancyRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  addresses: PropTypes.object,
  searchQuery: PropTypes.string,
};

export const VacancyDetailTypes = {
  id: PropTypes.string,
  salary_min: PropTypes.number,
  salary_max: PropTypes.number,
  currency: PropTypes.string,
  salary: PropTypes.string,
  duty: PropTypes.string,
  company: PropTypes.object,
  creation_date: PropTypes.string,
  addresses: PropTypes.object,
  url: PropTypes.string,
};

export const VacancyDetailTitleTypes = {
  salary_min: PropTypes.number,
  salary_max: PropTypes.number,
  salary: PropTypes.string,
  currency: PropTypes.string,
  creation_date: PropTypes.string,
};

export const VacancyDetailDescriptionTypes = {
  url: PropTypes.string,
  duty: PropTypes.string,
};

export const VacancyDetailAddressTypes = {
  addresses: PropTypes.object,
  company: PropTypes.object,
  id: PropTypes.string,
};

export const VacancyFavoritesTypes = {
  id: PropTypes.string,
};
