import {
  AreaChartOutlined,
  BarsOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
export const SettingsView = [
  getItem("Настройки", "/settings", <SettingOutlined />),
];

export const MainView = [
  getItem("Основное", null, <BarsOutlined />, [
    getItem("Домашняя", "/", <HomeOutlined />),
    getItem("Статистика", "/statistic", <AreaChartOutlined />),
  ]),

  {
    type: "divider",
  },
];

const navigationSettings = [...MainView, ...SettingsView];

export default navigationSettings;
