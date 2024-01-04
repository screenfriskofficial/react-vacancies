import { Input } from "antd";
import PropTypes from "prop-types";
import { memo } from "react";

const MainPageSearch = memo(({ setPageLocation, searchQuery }) => {
  return (
    <Input.Search
      defaultValue={searchQuery}
      enterButton
      size={"large"}
      placeholder={"Поиск вакансии"}
      onSearch={(value) =>
        setPageLocation(
          (prev) => {
            prev.set("searchQuery", value.toLowerCase());
            return prev;
          },
          { replace: true },
        )
      }
    />
  );
});

MainPageSearch.displayName = "MainPageSearch";

MainPageSearch.propTypes = {
  setPageLocation: PropTypes.func,
  searchQuery: PropTypes.string,
};

export { MainPageSearch };
