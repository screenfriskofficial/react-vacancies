import { Area } from "@ant-design/plots";
import { useResponsive, useThemeMode } from "antd-style";
import { Card, Flex } from "antd";

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
  const { mobile } = useResponsive();

  if (mobile) {
    return (
      <Flex gap={20} vertical>
        <Card size={"small"} style={{ width: "100%" }}>
          <div style={{ height: 150 }}>
            <DemoArea />
          </div>
        </Card>
        <Card size={"small"} style={{ width: "100%" }}>
          <div style={{ height: 150 }}>
            <DemoArea />
          </div>
        </Card>
        <Card size={"small"} style={{ width: "100%" }}>
          <div style={{ height: 150 }}>
            <DemoArea />
          </div>
        </Card>
        <Card size={"small"} style={{ width: "100%" }}>
          <div style={{ height: 150 }}>
            <DemoArea />
          </div>
        </Card>
      </Flex>
    );
  }

  return (
    <Flex gap={20} style={{ width: "100%" }}>
      <Card size={"small"} style={{ width: "50%" }}>
        <div style={{ height: 300 }}>
          <DemoArea />
        </div>
      </Card>
      <Card size={"small"} style={{ width: "50%" }}>
        <div style={{ height: 300 }}>
          <DemoArea />
        </div>
      </Card>
      <Card size={"small"} style={{ width: "50%" }}>
        <div style={{ height: 300 }}>
          <DemoArea />
        </div>
      </Card>
      <Card size={"small"} style={{ width: "50%" }}>
        <div style={{ height: 300 }}>
          <DemoArea />
        </div>
      </Card>
    </Flex>
  );
};

export default StatisticPage;
