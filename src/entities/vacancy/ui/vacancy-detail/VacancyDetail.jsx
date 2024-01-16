import { memo } from "react";
import { Collapse, Flex } from "antd";
import { VacancyDetailTitle } from "./vacancy-detail-title/VacancyDetailTitle.jsx";
import { VacancyDetailDescription } from "./vacancy-detail-description/VacancyDetailDescription.jsx";
import { VacancyDetailAddress } from "./vacancy-detail-address/VacancyDetailAddress.jsx";
import { VacancyDetailTypes } from "../../model/types/VacancyTypes.js";

const VacancyDetail = memo(
  ({
    id,
    salary_min,
    salary_max,
    currency,
    salary,
    duty,
    company,
    creation_date,
    url,
    addresses,
  }) => {
    const items = [
      {
        key: "description",
        label: "Описание",
        children: <VacancyDetailDescription url={url} duty={duty} />,
      },
      {
        key: "address",
        label: "Адрес",
        children: (
          <VacancyDetailAddress
            addresses={addresses}
            id={id}
            company={company}
          />
        ),
      },
    ];
    return (
      <Flex vertical gap={10} key={id}>
        <VacancyDetailTitle
          creation_date={creation_date}
          salary_min={salary_min}
          salary_max={salary_max}
          salary={salary}
          currency={currency}
        />
        <Collapse items={items} defaultActiveKey={"description"} />
      </Flex>
    );
  },
);

VacancyDetail.displayName = "VacancyDetail";

VacancyDetail.propTypes = VacancyDetailTypes;

export { VacancyDetail };
