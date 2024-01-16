import PropTypes, { any } from "prop-types";

export const MainPageListTypes = {
  currentPage: PropTypes.string,
  pageSize: PropTypes.string,
  total: PropTypes.number,
  pagination: PropTypes.object,
  searchRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  vacancyRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  optionsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  isLoading: PropTypes.bool,
  searchQuery: PropTypes.string,
  setPageLocation: PropTypes.func,
  setStartTour: PropTypes.func,
};

export const MainPageSearchTypes = {
  setPageLocation: PropTypes.func,
  searchQuery: PropTypes.string,
  isLoading: PropTypes.bool,
  searchRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: any }),
  ]),
};

export const MainPageOptionsTypes = {
  onChangeRegion: PropTypes.func,
  region: PropTypes.string,
  optionsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
