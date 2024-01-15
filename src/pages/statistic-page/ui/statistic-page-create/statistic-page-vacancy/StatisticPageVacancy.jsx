import { List } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { formatSalary } from "~shared/lib/format-salary/formatSalary.js";
import PropTypes from "prop-types";

const StatisticPageVacancy = ({
  id,
  job_name,
  salary_min,
  salary_max,
  salary,
  currency,
}) => {
  return (
    <List.Item
      style={{ cursor: "pointer" }}
      key={id}
      actions={[<HeartOutlined style={{ fontSize: "20px" }} key={id} />]}
    >
      <List.Item.Meta
        title={job_name}
        description={formatSalary(salary_min, salary_max, salary, currency)}
      />
    </List.Item>
  );
};

StatisticPageVacancy.propTypes = {
  id: PropTypes.string,
  job_name: PropTypes.string,
  salary_min: PropTypes.number,
  salary_max: PropTypes.number,
  salary: PropTypes.string,
  currency: PropTypes.string,
};

export { StatisticPageVacancy };
