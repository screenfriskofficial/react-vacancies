import { useEffect, useState } from "react";
import { Search } from "~widgets/search/index.js";
import { Flex, List, Spin } from "antd";
import { $api } from "~shared/api/api.js";
import { useSearchParams } from "react-router-dom";
import { Vacancy } from "~entities/vacancy/index.js";

const MainPage = () => {
  const [vacancies, setVacancies] = useState([]);

  const [pageLocation, setPageLocation] = useSearchParams({
    page: "1",
    pageSize: ["10"],
  });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const currentPage = pageLocation.get("page");

  const pageSize = pageLocation.get("pageSize");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await $api.get(
          `https://opendata.trudvsem.ru/api/v1/vacancies/region/65`,
          {
            params: {
              offset: currentPage,
            },
          },
        );
        const data = response.data.results?.vacancies || [];
        setVacancies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [currentPage]);

  return (
    <>
      {" "}
      <Flex vertical gap={20} style={{ height: "100%" }}>
        {error && error}
        {isLoading ? (
          <Spin />
        ) : (
          <List
            style={{
              height: "100%",
              overflow: "auto",
            }}
            pagination={{
              responsive: true,
              position: "both",
              align: "center",
              onChange: (page, pageSize) =>
                setPageLocation(
                  (prev) => {
                    prev.set("page", page);
                    prev.set("pageSize", pageSize);
                    return prev;
                  },
                  {
                    replace: true,
                  },
                ),
              defaultCurrent: currentPage,
              defaultPageSize: pageSize,
            }}
            header={<Search />}
            itemLayout="vertical"
            bordered
            size={"large"}
            dataSource={vacancies}
            renderItem={(item) => (
              <Vacancy
                id={item.vacancy.id}
                salary_max={item.vacancy.salary_max}
                currency={item.vacancy.currency}
                salary={item.vacancy.salary}
                salary_min={item.vacancy.salary_min}
                job_name={item.vacancy["job-name"]}
              />
            )}
          />
        )}
      </Flex>
    </>
  );
};

export default MainPage;
