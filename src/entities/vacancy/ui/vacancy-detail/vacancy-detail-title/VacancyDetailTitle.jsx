import { Flex, Typography } from "antd";
import { formatSalary } from "~shared/lib/format-salary/formatSalary.js";
import { memo } from "react";
import { VacancyDetailTitleTypes } from "../../../model/types/VacancyTypes.js";

const VacancyDetailTitle = memo(
  ({ salary_min, salary_max, salary, currency, creation_date }) => {
    return (
      <Flex justify={"space-between"}>
        <Typography.Text>
          {formatSalary(salary_min, salary_max, salary, currency)}
        </Typography.Text>
        <Typography.Text>Дата создания: {creation_date}</Typography.Text>
      </Flex>
    );
  },
);

VacancyDetailTitle.displayName = "VacancyDetailTitle";

VacancyDetailTitle.propTypes = VacancyDetailTitleTypes;

export { VacancyDetailTitle };
