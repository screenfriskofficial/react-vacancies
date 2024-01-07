import { Input } from "antd";
import PropTypes, { any } from "prop-types";
import { memo } from "react";

const MainPageSearch = memo(({ setPageLocation, searchQuery, searchRef }) => {
  return (
    <div ref={searchRef} style={{ width: "100%" }}>
      <Input.Search
        defaultValue={searchQuery}
        enterButton
        size={"large"}
        allowClear
        placeholder={"Поиск вакансии"}
        onSearch={(value) =>
          setPageLocation(
            (prev) => {
              prev.set("pageSize", ["10"]);
              prev.set("page", 1);
              prev.set("searchQuery", value.toLowerCase());
              return prev;
            },
            { replace: true },
          )
        }
      />
    </div>
  );
});

MainPageSearch.displayName = "MainPageSearch";

MainPageSearch.propTypes = {
  setPageLocation: PropTypes.func,
  searchQuery: PropTypes.string,
  searchRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: any }),
  ]),
};

export { MainPageSearch };
