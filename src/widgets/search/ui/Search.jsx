import { Input } from "antd";
import { memo } from "react";

export const Search = memo(() => {
  return <Input.Search style={{ width: "50%" }} />;
});
