import { HomeOutlined, SettingOutlined } from "@ant-design/icons";

export const SettingsView = [
  {
    key: "/settings",
    icon: <SettingOutlined />,
    label: "Настройки",
  },
];

export const MainView = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: "Домашняя",
  },
];

const navigationSettings = [...MainView, ...SettingsView];

export default navigationSettings;
