import { Input, List, message, Spin } from "antd";
import { vacanciesAPI } from "~entities/vacancy/model/services/vacanciesAPI/vacanciesAPI.js";
import { useState } from "react";
import { StatisticPageVacancy } from "~pages/statistic-page/ui/statistic-page-create/statistic-page-vacancy/StatisticPageVacancy.jsx";
import { mainPagination } from "~pages/main-page/model/lib/main-pagination/mainPagination.js";

const StatisticPageList = () => {
  const region = "77";
  const [searchValue, setSearchValue] = useState("");
  const pagination = mainPagination();
  const { data, isLoading, error } =
    vacanciesAPI.endpoints.getAllVacancies.useQuery({
      region,
      searchValue,
    });
  const total = data?.meta?.total && data.meta.total;
  const vacancies = data?.results?.vacancies && data?.results?.vacancies;

  if (isLoading) {
    return <Spin />;
  }
  if (error) {
    return message.error(error, 3);
  }

  return (
    <List
      header={
        <Input.Search
          enterButton
          size={"large"}
          allowClear
          onSearch={(value) => setSearchValue(value)}
          placeholder={"Найти вакансию"}
        />
      }
      itemLayout="vertical"
      bordered
      pagination={{
        ...pagination,
        total: total > 9000 ? 9000 : total,
      }}
      size={"large"}
      dataSource={vacancies}
      renderItem={(item) => (
        <StatisticPageVacancy
          job_name={item.vacancy["job-name"]}
          currency={item.vacancy.currency}
          salary={item.vacancy.salary}
          salary_max={item.vacancy.salary_max}
          salary_min={item.vacancy.salary_min}
          id={item.vacancy.id}
        />
      )}
    />
  );
};

export { StatisticPageList };
