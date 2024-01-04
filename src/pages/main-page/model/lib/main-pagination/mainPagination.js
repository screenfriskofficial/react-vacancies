const mainPagination = (setPageLocation, currentPage, pageSize) => {
  return {
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
  };
};
export { mainPagination };
