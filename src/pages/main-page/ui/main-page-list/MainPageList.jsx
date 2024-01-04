import { Button, Flex, List } from "antd";
import cls from "./MainPageList.module.css";
import { MainPageSearch } from "../main-page-search/MainPageSearch.jsx";
import { QuestionCircleOutlined, SettingOutlined } from "@ant-design/icons";
import { Vacancy } from "~entities/vacancy/index.js";
import { memo } from "react";
import PropTypes from "prop-types";

const MainPageList = memo(
  ({
    pagination,
    searchRef,
    vacancyRef,
    optionsRef,
    searchQuery,
    setPageLocation,
    setStartTour,
    vacancies,
  }) => {
    return (
      <List
        style={{
          height: "100%",
          overflow: "auto",
        }}
        pagination={pagination}
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