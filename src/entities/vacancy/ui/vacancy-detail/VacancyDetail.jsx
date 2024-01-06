import PropTypes from "prop-types";
import { memo } from "react";
import { Flex } from "antd";
import { VacancyDetailTitle } from "./vacancy-detail-title/VacancyDetailTitle.jsx";
import { VacancyDetailDescription } from "./vacancy-detail-description/VacancyDetailDescription.jsx";
import { VacancyDetailAddress } from "./vacancy-detail-address/VacancyDetailAddress.jsx";

const VacancyDetail = memo(
  ({
    id,
    salary_min,
    salary_max,
    currency,
    salary,
    duty,
    creation_date,
    url,
    addresses,
  }) => {
    return (
      <Flex vertical gap={10}>
        <VacancyDetailTitle
          creation_date={creation_date}
          salary_min={salary_min}
          salary_max={salary_max}
          salary={salary}
          currency={currency}
        />
        <VacancyDetailDescription url={url} duty={duty} />
        <VacancyDetailAddress addresses={addresses} id={id} />
      </Flex>
    );
  },
);

VacancyDetail.displayName = "VacancyDetail";

VacancyDetail.propTypes = {
  id: PropTypes.string,
  salary_min: PropTypes.number,
  salary_max: PropTypes.number,
  currency: PropTypes.string,
  salary: PropTypes.string,
  duty: PropTypes.string,
  creation_date: PropTypes.string,
  addresses: PropTypes.object,
  url: PropTypes.string,
};

export { VacancyDetail };
