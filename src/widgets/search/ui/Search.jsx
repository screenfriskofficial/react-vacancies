import { Input } from "antd";
import { memo } from "react";

const Search = memo(() => {
  return (
    <Input.Search
      enterButton
      placeholder={"Поиск вакансии"}
      size={"large"}
      allowClear
      style={{
        width: "100%",
      }}
    />
  );
});

Search.displayName = "Search";

export { Search };
