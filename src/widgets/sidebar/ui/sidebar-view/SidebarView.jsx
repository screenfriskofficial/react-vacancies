import {
  AreaChartOutlined,
  BarsOutlined,
  DashboardOutlined,
  HeartOutlined,
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
  getItem("В разработке", "/develop", <DashboardOutlined />),
];

export const MainView = [
  getItem("Основное", null, <BarsOutlined />, [
    getItem("Домашняя", "/", <HomeOutlined />),
    getItem("Статистика", "/statistic", <AreaChartOutlined />),
    getItem("Избранное", "/favorites", <HeartOutlined />),
  ]),

  {
    type: "divider",
  },
];

const navigationSettings = [...MainView, ...SettingsView];

export default navigationSettings;
