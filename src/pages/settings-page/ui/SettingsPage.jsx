import { ThemeSwitcher } from "~widgets/theme-switcher/ui/ThemeSwitcher.jsx";
import { Flex } from "antd";

const SettingsPage = () => {
  return (
    <Flex align={"center"} gap={10}>
      <ThemeSwitcher />
    </Flex>
  );
};

export default SettingsPage;
