import { Card, Segmented } from "antd";
import { useThemeMode } from "antd-style";
import { Flex } from "antd";

const options = [
  { label: "Системная", value: "auto" },
  { label: "Светлая", value: "light" },
  { label: "Темная", value: "dark" },
];

export const ThemeSwitcher = () => {
  const { themeMode, setThemeMode } = useThemeMode();

  const setSegment = (segment) => {
    setThemeMode(segment);
    localStorage.setItem("theme", segment);
  };

  return (
    <Card size={"small"}>
      <Flex align={"center"} gap={16}>
        Выбор темы:
        <Segmented value={themeMode} onChange={setSegment} options={options} />
      </Flex>
    </Card>
  );
};
