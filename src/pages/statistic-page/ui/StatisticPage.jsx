import { Area } from "@ant-design/plots";
import { useThemeMode } from "antd-style";

const DemoArea = () => {
  const { themeMode } = useThemeMode();
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/aapl.json",
    },
    theme: themeMode === "dark" ? "classicDark" : "classic",
    title: "Тестовый график",
    animate: { enter: { type: "growInX", duration: 500 } },
    xField: (d) => new Date(d.date),
    yField: "close",
    style: {
      lineWidth: 1,
      fillOpacity: "0.5",
    },
  };

  return <Area {...config} />;
};

const StatisticPage = () => {
  return (
    <div>
      <DemoArea />
    </div>
  );
};

export default StatisticPage;
