import { List } from "antd";

const data = [
  {
    title: "Добавление в избранное",
  },
  {
    title: "Создание графика, на основе выбраной вакансии",
  },
];

const DevelopPage = () => {
  return (
    <List
      header={<h1>В разработке...</h1>}
      dataSource={data}
      renderItem={(item) => <List.Item>{item.title}</List.Item>}
    />
  );
};

export { DevelopPage };
