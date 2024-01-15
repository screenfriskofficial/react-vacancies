import { Area } from "@ant-design/plots";
import { useThemeMode } from "antd-style";
import { Card, List } from "antd";
import { StatisticPageCreate } from "~pages/statistic-page/ui/statistic-page-create/StatisticPageCreate.jsx";

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
  const data = [
    {
      id: 1,
      item: <DemoArea />,
    },
    {
      id: 2,
      item: <DemoArea />,
    },
    {
      id: 3,
      item: <DemoArea />,
    },
    {
      id: 4,
      item: <DemoArea />,
    },
    {
      id: 5,
      item: <DemoArea />,
    },
    {
      id: 6,
      item: <DemoArea />,
    },
  ];

  return (
    <List
      grid={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
      dataSource={data}
      header={<StatisticPageCreate />}
      renderItem={(item) => {
        return (
          <Card key={item.id} style={{ margin: 15 }}>
            <div style={{ height: 250 }}>
              <DemoArea />
            </div>
          </Card>
        );
      }}
    />
  );
};

export default StatisticPage;
