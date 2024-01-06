import { List, Modal, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { formatSalary } from "~shared/lib/format-salary/formatSalary.js";
import PropTypes from "prop-types";
import { memo, useCallback, useState } from "react";
import { VacancyDetail } from "./vacancy-detail/VacancyDetail.jsx";

const Vacancy = memo(
  ({
    id,
    salary_min,
    company,
    salary_max,
    currency,
    job_name,
    salary,
    vacancyRef,
    duty,
    creation_date,
    url,
    addresses,
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = useCallback(() => {
      setIsModalOpen(true);
    }, []);

    const handleOk = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    const handleCancel = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    return (
      <>
        <List.Item
          ref={vacancyRef}
          style={{ cursor: "pointer" }}
          onClick={showModal}
          key={id}
          actions={[<HeartOutlined key={id} />]}
        >
          <List.Item.Meta
            title={<span>{job_name}</span>}
            description={formatSalary(salary_min, salary_max, salary, currency)}
          />
        </List.Item>
        <Modal
          zIndex={10000}
          title={<Typography.Title level={3}>{job_name}</Typography.Title>}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <VacancyDetail
            id={id}
            company={company}
            addresses={addresses}
            currency={currency}
            salary={salary}
            salary_max={salary_max}
            salary_min={salary_min}
            job_name={job_name}
            url={url}
            duty={duty}
            creation_date={creation_date}
          />
        </Modal>
      </>
    );
  },
);

Vacancy.displayName = "Vacancy";

Vacancy.propTypes = {
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
};

export { Vacancy };
