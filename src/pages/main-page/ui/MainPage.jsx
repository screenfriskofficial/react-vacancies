import { useEffect, useRef, useState } from "react";
import cls from "./MainPage.module.css";

import { Button, Flex, List, Spin, Tour } from "antd";
import { useSearchParams } from "react-router-dom";
import { Vacancy } from "~entities/vacancy/index.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancies } from "~entities/vacancy/models/services/fetch-vacancies/fetchVacancies.js";
import { Search } from "~widgets/search/index.js";

const MainPage = () => {
  const [pageLocation, setPageLocation] = useSearchParams({
    page: "1",
    pageSize: ["10"],
    searchQuery: "",
  });

  const dispatch = useDispatch();
  const { vacancies, isLoading, error } = useSelector(
    (state) => state.vacancies,
  );

  const [startTour, setStartTour] = useState(false);

  const searchRef = useRef(null);
  const vacancyRef = useRef(null);
  const optionsRef = useRef(null);

  const steps = [
    {
      title: "Поиск",
      description:
        "Если вы не можете найти вакансию, то можете воспользоваться поиском.",
      target: () => searchRef.current,
      nextButtonProps: {
        children: "Далее",
      },
    },
    {
      title: "Просмотр вакансии",
      description: "Так же, вы можете просматривать вакансии нажимая на них.",
      target: () => vacancyRef.current,
      nextButtonProps: {
        children: "Далее",
      },
      prevButtonProps: {
        children: "Назад",
      },
    },
    {
      title: "Настройка поиска",
      description:
        "Тут вы можете настроить ваши поисковые запросы, как вам удобно.",
      target: () => optionsRef.current,
      nextButtonProps: {
        children: "Завершить",
      },
      prevButtonProps: {
        children: "Назад",
      },
    },
  ];

  const currentPage = pageLocation.get("page");
  const pageSize = pageLocation.get("pageSize");
  const searchQuery = pageLocation.get("searchQuery");

  useEffect(() => {
    dispatch(fetchVacancies(searchQuery));
  }, [dispatch, searchQuery, currentPage]);

  return (
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
          header={
            <Flex align={"center"} gap={15} className={cls.headerBox}>
              <div ref={searchRef} style={{ width: "100%" }}>
                <Search setPageLocation={setPageLocation} />
              </div>
              <Button size={"large"} type={"primary"} ref={optionsRef}>
                Настройка поиска
              </Button>
              <Button
                onClick={() => setStartTour(true)}
                size={"large"}
                type={"primary"}
              >
                Помощь
              </Button>
            </Flex>
          }
          itemLayout="vertical"
          bordered
          size={"large"}
          dataSource={vacancies && vacancies}
          renderItem={(item) => (
            <Vacancy
              id={item.vacancy.id}
              vacancyRef={vacancyRef}
              salary_max={item.vacancy.salary_max}
              currency={item.vacancy.currency}
              salary={item.vacancy.salary}
              salary_min={item.vacancy.salary_min}
              job_name={item.vacancy["job-name"]}
            />
          )}
        />
      )}
      <Tour
        open={startTour}
        onClose={() => setStartTour(false)}
        steps={steps}
      />
    </Flex>
  );
};

export default MainPage;
