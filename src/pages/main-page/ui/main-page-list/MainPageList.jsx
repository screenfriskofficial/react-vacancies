import { Button, Flex, List } from "antd";
import { MainPageSearch } from "./main-page-search/MainPageSearch.jsx";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Vacancy } from "~entities/vacancy/index.js";
import { memo } from "react";
import PropTypes from "prop-types";
import { mainPagination } from "../../model/lib/main-pagination/mainPagination.js";
import { useResponsive } from "antd-style";

const MainPageList = memo(
  ({
    currentPage,
    pageSize,
    total,
    searchRef,
    vacancyRef,
    searchQuery,
    setPageLocation,
    setStartTour,
    vacancies,
  }) => {
    const pagination = mainPagination(
      setPageLocation,
      pageSize,
      searchQuery,
      currentPage,
    );
    const { mobile } = useResponsive();
    return (
      <List
        style={{
          height: "100%",
          overflow: "auto",
        }}
        pagination={{ ...pagination, total, current: currentPage }}
        header={
          <Flex align={"center"} gap={15} vertical={mobile}>
            <MainPageSearch
              searchRef={searchRef}
              searchQuery={searchQuery}
              setPageLocation={setPageLocation}
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
        dataSource={vacancies && vacancies}
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
          />
        )}
      />
    );
  },
);

MainPageList.displayName = "MainPageList";

MainPageList.propTypes = {
  currentPage: PropTypes.string,
  pageSize: PropTypes.string,
  total: PropTypes.number,
  pagination: PropTypes.object,
  searchRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  vacancyRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  searchQuery: PropTypes.string,
  setPageLocation: PropTypes.func,
  setStartTour: PropTypes.func,
  vacancies: PropTypes.array,
};

export { MainPageList };
