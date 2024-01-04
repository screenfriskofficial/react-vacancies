import { useState } from "react";
import { Flex, Spin, Tour } from "antd";
import { fetchVacancies } from "~entities/vacancy/models/services/fetch-vacancies/fetchVacancies.js";
import { mainTourSteps } from "../model/lib/main-tour-steps/mainTourSteps.js";
import { useTourRefs } from "../model/hooks/useTourRefs/useTourRefs.jsx";
import { useSearch } from "../model/hooks/useSearch/useSearch.jsx";
import { MainPageList } from "~pages/main-page/ui/main-page-list/MainPageList.jsx";

const MainPage = () => {
  const { vacancyRef, searchRef, optionsRef } = useTourRefs();
  const { searchQuery, pageSize, currentPage, setPageLocation } = useSearch();

  const { data, isLoading, error } =
    fetchVacancies.endpoints.getVacancies.useQuery({
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
          vacancies={data && data.results.vacancies}
          searchRef={searchRef}
          searchQuery={searchQuery}
          optionsRef={optionsRef}
          currentPage={currentPage}
          pageSize={pageSize}
          total={data && data.meta.total - 5}
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
