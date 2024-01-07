import { useState } from "react";
import { Flex, Spin, Tour } from "antd";
import { vacanciesAPI } from "~entities/vacancy/model/services/vacanciesAPI/vacanciesAPI.js";
import { mainTourSteps } from "../model/lib/main-tour-steps/mainTourSteps.js";
import { useTourRefs } from "../model/hooks/useTourRefs/useTourRefs.jsx";
import { useSearch } from "../model/hooks/useSearch/useSearch.jsx";
import { MainPageList } from "./main-page-list/MainPageList.jsx";

const MainPage = () => {
  const { vacancyRef, searchRef, optionsRef } = useTourRefs();
  const { searchQuery, pageSize, currentPage, setPageLocation } = useSearch();

  const { data, isLoading, error } =
    vacanciesAPI.endpoints.getVacanciesByArgs.useQuery({
      searchQuery,
      currentPage,
      pageSize,
    });

  const steps = mainTourSteps(searchRef, vacancyRef, optionsRef);

  const [startTour, setStartTour] = useState(false);

  return (
    <Flex vertical gap={20} style={{ height: "100%" }}>
      {error && error.message}
      {isLoading ? (
        <Spin />
      ) : (
        <MainPageList
          setPageLocation={setPageLocation}
          vacancyRef={vacancyRef}
          vacancies={data?.results?.vacancies && data.results.vacancies}
          searchRef={searchRef}
          searchQuery={searchQuery}
          optionsRef={optionsRef}
          currentPage={currentPage}
          pageSize={pageSize}
          total={data?.meta?.total && data.meta.total}
          setStartTour={setStartTour}
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
