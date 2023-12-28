import { HomeOutlined, SettingOutlined } from "@ant-design/icons";

const SettingsView = [
  {
    key: "/settings",
    icon: <SettingOutlined />,
    label: "Настройки",
  },
];

const MainView = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: "Домашняя",
  },
];

const navigationSettings = [...MainView, ...SettingsView];

export default navigationSettings;
