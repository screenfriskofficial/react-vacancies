import { Button, Flex, List } from "antd";
import cls from "./MainPageList.module.css";
import { MainPageSearch } from "./main-page-search/MainPageSearch.jsx";
import { QuestionCircleOutlined, SettingOutlined } from "@ant-design/icons";
import { Vacancy } from "~entities/vacancy/index.js";
import { memo } from "react";
import PropTypes from "prop-types";
import { mainPagination } from "../../model/lib/main-pagination/mainPagination.js";

const MainPageList = memo(
  ({
    currentPage,
    pageSize,
    total,
    searchRef,
    vacancyRef,
    optionsRef,
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
    return (
      <List
        style={{
          height: "100%",
          overflow: "auto",
        }}
        pagination={{ ...pagination, total, current: currentPage }}
        header={
          <Flex align={"center"} gap={15} className={cls.headerBox}>
            <div ref={searchRef} style={{ width: "100%" }}>
              <MainPageSearch
                searchQuery={searchQuery}
                setPageLocation={setPageLocation}
              />
            </div>
            <Button
              size={"large"}
              type={"primary"}
              ref={optionsRef}
              icon={<SettingOutlined />}
            >
              Настройка поиска
            </Button>
            <Button
              onClick={() => setStartTour(true)}
              size={"large"}
              type={"primary"}
              icon={<QuestionCircleOutlined />}
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
  optionsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  searchQuery: PropTypes.string,
  setPageLocation: PropTypes.func,
  setStartTour: PropTypes.func,
  vacancies: PropTypes.array,
};

export { MainPageList };
