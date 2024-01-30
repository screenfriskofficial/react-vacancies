import { Button, Flex, List, Spin } from "antd";
import { MainPageSearch } from "./main-page-search/MainPageSearch.jsx";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Vacancy } from "~entities/vacancy/index.js";
import { memo, useState } from "react";
import { mainPagination } from "../../model/lib/main-pagination/mainPagination.js";
import { useResponsive } from "antd-style";
import { MainPageOptions } from "~pages/main-page/ui/main-page-list/main-page-options/MainPageOptions.jsx";
import { vacanciesAPI } from "~entities/favorites/model/services/vacanciesAPI/vacanciesAPI.js";
import { MainPageListTypes } from "../../model/types/MainPageTypes.js";
import { VacancyFavorites } from "~entities/favorites/VacancyFavorites.jsx";

const MainPageList = memo(
  ({
    currentPage,
    pageSize,
    searchRef,
    vacancyRef,
    optionsRef,
    searchQuery,
    setPageLocation,
    setStartTour,
  }) => {
    const pagination = mainPagination(
      setPageLocation,
      pageSize,
      searchQuery,
      currentPage,
    );
    const { mobile } = useResponsive();
    const [region, setRegion] = useState("77");

    const { data, isLoading, error } =
      vacanciesAPI.endpoints.getVacanciesByArgs.useQuery(
        {
          searchQuery,
          currentPage,
          pageSize,
          region,
        },
        { pollingInterval: 35000 },
      );
    const vacancies = data?.results?.vacancies && data.results.vacancies;
    const total = data?.meta?.total && data.meta.total;

    const onChangeRegion = (e) => {
      setRegion(e.target.value);
    };

    return (
      <>
        {error}
        {isLoading ? (
          <Spin />
        ) : (
          <List
            style={{
              height: "100%",
              overflow: "auto",
            }}
            pagination={{
              ...pagination,
              current: currentPage,
              total: total > 9000 ? 9000 : total,
            }}
            header={
              <Flex align={"center"} gap={15} vertical={mobile}>
                <MainPageSearch
                  isLoading={isLoading}
                  searchRef={searchRef}
                  searchQuery={searchQuery}
                  setPageLocation={setPageLocation}
                />
                <MainPageOptions
                  optionsRef={optionsRef}
                  region={region}
                  onChangeRegion={onChangeRegion}
                />
                {!mobile && (
                  <Button
                    onClick={() => setStartTour(true)}
                    size={"large"}
                    type={"primary"}
                    icon={<QuestionCircleOutlined />}
                  >
                    Помощь
                  </Button>
                )}
              </Flex>
            }
            itemLayout="vertical"
            bordered
            size={"large"}
            dataSource={vacancies}
            renderItem={(item) => (
              <Vacancy
                id={item.vacancy.id}
                url={item.vacancy.vac_url}
                creation_date={item.vacancy["creation-date"]}
                addresses={item.vacancy.addresses}
                duty={item.vacancy.duty}
                vacancyRef={vacancyRef}
                salary_max={item.vacancy.salary_max}
                currency={item.vacancy.currency}
                salary={item.vacancy.salary}
                salary_min={item.vacancy.salary_min}
                job_name={item.vacancy["job-name"]}
                searchQuery={searchQuery}
                company={item.vacancy.company}
              >
                <VacancyFavorites
                  id={item.vacancy.id}
                  company={item.vacancy.company}
                  addresses={item.vacancy.addresses}
                  currency={item.vacancy.currency}
                  salary={item.vacancy.salary}
                  salary_max={item.vacancy.salary_max}
                  salary_min={item.vacancy.salary_min}
                  job_name={item.vacancy["job-name"]}
                  url={item.vacancy.vac_url}
                  duty={item.vacancy.duty}
                  creation_date={item.vacancy["creation-date"]}
                />
              </Vacancy>
            )}
          />
        )}
      </>
    );
  },
);

MainPageList.displayName = "MainPageList";

MainPageList.propTypes = MainPageListTypes;

export { MainPageList };
