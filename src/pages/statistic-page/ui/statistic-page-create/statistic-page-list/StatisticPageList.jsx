import { List } from "antd";
import { vacanciesAPI } from "~entities/vacancy/model/services/vacanciesAPI/vacanciesAPI.js";
import { useState } from "react";
import { StatisticPageVacancy } from "~pages/statistic-page/ui/statistic-page-create/statistic-page-vacancy/StatisticPageVacancy.jsx";

const StatisticPageList = () => {
  const [region, setRegion] = useState("77");
  const { data, isLoading, error } =
    vacanciesAPI.endpoints.getVacanciesByArgs.useQuery({
      region,
    });
  return (
    <List
      header={"Вакансии"}
      dataSource={data}
      renderItems={<StatisticPageVacancy />}
    />
  );
};

export { StatisticPageList };
