import { useState } from "react";
import { Flex, Tour } from "antd";
import { mainTourSteps } from "../model/lib/main-tour-steps/mainTourSteps.js";
import { useTourRefs } from "../model/hooks/useTourRefs/useTourRefs.jsx";
import { useSearch } from "../model/hooks/useSearch/useSearch.jsx";
import { MainPageList } from "./main-page-list/MainPageList.jsx";

const MainPage = () => {
  const { vacancyRef, searchRef, optionsRef } = useTourRefs();
  const { searchQuery, pageSize, currentPage, setPageLocation } = useSearch();
  const steps = mainTourSteps(searchRef, vacancyRef, optionsRef);
  const [startTour, setStartTour] = useState(false);

  return (
    <Flex vertical gap={20} style={{ height: "100%" }}>
      <MainPageList
        setPageLocation={setPageLocation}
        vacancyRef={vacancyRef}
        searchRef={searchRef}
        searchQuery={searchQuery}
        optionsRef={optionsRef}
        currentPage={currentPage}
        pageSize={pageSize}
        setStartTour={setStartTour}
      />
      <Tour
        open={startTour}
        onClose={() => setStartTour(false)}
        steps={steps}
      />
    </Flex>
  );
};

export default MainPage;
