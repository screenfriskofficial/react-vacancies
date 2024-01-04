const mainPagination = (setPageLocation, pageSize, currentPage) => {
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
    defaultValue: currentPage,
    defaultPageSize: pageSize,
  };
};
export { mainPagination };
