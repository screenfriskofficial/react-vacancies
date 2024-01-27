import { List } from "antd";

const data = [
  {
    title: "Добавление в избранное",
    version: "alpha",
  },
  {
    title: "Создание графика, на основе выбраной вакансии",
    version: "locked",
  },
];

const DevelopPage = () => {
  return (
    <List
      header={<h1>В разработке...</h1>}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          {item.title}
          <List.Item.Meta title={"Версия: " + item.version} />
        </List.Item>
      )}
    />
  );
};

export { DevelopPage };
