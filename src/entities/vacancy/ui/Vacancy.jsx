import { List, Modal } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { formatSalary } from "~shared/lib/format-salary/formatSalary.js";
import PropTypes from "prop-types";
import { memo, useCallback, useState } from "react";

const Vacancy = memo(
  ({ id, salary_min, salary_max, currency, job_name, salary, vacancyRef }) => {
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
          title={job_name}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          {salary_max}
        </Modal>
      </>
    );
  },
);

Vacancy.displayName = "Vacancy";

Vacancy.propTypes = {
  id: PropTypes.string,
  salary_min: PropTypes.number,
  salary_max: PropTypes.number,
  currency: PropTypes.string,
  job_name: PropTypes.string,
  salary: PropTypes.string,
  vacancyRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export { Vacancy };
