import { useEffect, useState } from "react";
import { Flex, Spin, Tour } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancies } from "~entities/vacancy/models/services/fetch-vacancies/fetchVacancies.js";
import { mainTourSteps } from "../model/lib/main-tour-steps/mainTourSteps.js";
import { mainPagination } from "../model/lib/main-pagination/mainPagination.js";
import { useTourRefs } from "../model/hooks/useTourRefs/useTourRefs.jsx";
import { useSearch } from "../model/hooks/useSearch/useSearch.jsx";
import { MainPageList } from "~pages/main-page/ui/main-page-list/MainPageList.jsx";

const MainPage = () => {
  const dispatch = useDispatch();
  const { vacancies, isLoading, error } = useSelector(
    (state) => state.vacancies,
  );

  const { vacancyRef, searchRef, optionsRef } = useTourRefs();
  const { searchQuery, pageSize, currentPage, setPageLocation } = useSearch();

  const steps = mainTourSteps(searchRef, vacancyRef, optionsRef);
  const pagination = mainPagination(
    setPageLocation,
    currentPage,
    pageSize,
    searchQuery,
  );

  const [startTour, setStartTour] = useState(false);

  useEffect(() => {
    dispatch(fetchVacancies(searchQuery));
  }, [dispatch, searchQuery, currentPage]);

  return (
    <Flex vertical gap={20} style={{ height: "100%" }}>
      {error && error}
      {isLoading ? (
        <Spin />
      ) : (
        <MainPageList
          setPageLocation={setPageLocation}
          vacancyRef={vacancyRef}
          vacancies={vacancies}
          searchRef={searchRef}
          searchQuery={searchQuery}
          optionsRef={optionsRef}
          pagination={pagination}
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
