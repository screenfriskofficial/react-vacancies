import { Input } from "antd";
import { memo } from "react";
import { MainPageSearchTypes } from "../../../model/types/MainPageTypes.js";

const MainPageSearch = memo(
  ({ setPageLocation, searchQuery, searchRef, isLoading }) => {
    return (
      <div ref={searchRef} style={{ width: "100%" }}>
        <Input.Search
          defaultValue={searchQuery}
          enterButton
          size={"large"}
          allowClear
          loading={isLoading}
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
  },
);

MainPageSearch.displayName = "MainPageSearch";

MainPageSearch.propTypes = MainPageSearchTypes;

export { MainPageSearch };
