import { useSearchParams } from "react-router-dom";

const useSearch = () => {
  const [pageLocation, setPageLocation] = useSearchParams({
    page: "1",
    pageSize: ["10"],
    searchQuery: "",
  });
  const currentPage = pageLocation.get("page");
  const pageSize = pageLocation.get("pageSize");
  const searchQuery = pageLocation.get("searchQuery");

  return {
    currentPage,
    pageSize,
    searchQuery,
    setPageLocation,
  };
};
export { useSearch };
