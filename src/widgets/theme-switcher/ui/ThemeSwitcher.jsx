import { Card, Segmented } from "antd";
import { useResponsive, useThemeMode } from "antd-style";
import { Flex } from "antd";

const options = [
  { label: "Светлая", value: "light" },
  { label: "Темная", value: "dark" },
];

export const ThemeSwitcher = () => {
  const { themeMode, setThemeMode } = useThemeMode();
  const { mobile } = useResponsive();

  const setSegment = (segment) => {
    setThemeMode(segment);
    localStorage.setItem("theme", segment);
  };

  if (mobile) {
    return (
      <Card size={"small"}>
        <Flex align={"center"} vertical gap={10}>
          Выбор темы:
          <Segmented
            value={themeMode}
            onChange={setSegment}
            options={options}
          />
        </Flex>
      </Card>
    );
  }
  return (
    <Card size={"small"}>
      <Flex align={"center"} gap={16}>
        Выбор темы:
        <Segmented value={themeMode} onChange={setSegment} options={options} />
      </Flex>
    </Card>
  );
};
