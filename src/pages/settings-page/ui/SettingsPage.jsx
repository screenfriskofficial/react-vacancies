import { ThemeSwitcher } from "~widgets/theme-switcher/ui/ThemeSwitcher.jsx";
import { Flex } from "antd";
import { useResponsive } from "antd-style";

const SettingsPage = () => {
  const { mobile } = useResponsive();
  if (mobile) {
    return (
      <Flex align={"center"} justify={"center"} gap={10}>
        <ThemeSwitcher />
      </Flex>
    );
  }
  return (
    <Flex align={"center"} gap={10}>
      <ThemeSwitcher />
    </Flex>
  );
};

export default SettingsPage;
