import { Input } from "antd";
import PropTypes from "prop-types";
import { memo } from "react";

const Search = memo(({ setPageLocation }) => {
  return (
    <Input.Search
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

Search.displayName = "Search";

Search.propTypes = {
  setPageLocation: PropTypes.func,
};

export { Search };
