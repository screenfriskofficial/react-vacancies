import { List, Modal, Typography } from "antd";
import { formatSalary } from "~shared/lib/format-salary/formatSalary.js";
import { memo, useCallback, useState } from "react";
import { VacancyDetail } from "./vacancy-detail/VacancyDetail.jsx";
import Highlighter from "react-highlight-words";
import { VacancyTypes } from "../model/types/VacancyTypes.js";
import { useProfile } from "~shared/hooks/useProfile.js";
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
    searchQuery,
    children,
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { currentUser } = useProfile();

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
          ref={vacancyRef && vacancyRef}
          style={{ cursor: "pointer" }}
          onClick={showModal}
          key={id}
          extra={currentUser && children}
        >
          <List.Item.Meta
            title={
              searchQuery ? (
                <Highlighter
                  searchWords={searchQuery.split(" ")}
                  textToHighlight={job_name}
                />
              ) : (
                job_name
              )
            }
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

Vacancy.propTypes = VacancyTypes;

export { Vacancy };
