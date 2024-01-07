const mainTourSteps = (searchRef, vacancyRef) => {
  return [
    {
      title: "Поиск",
      description:
        "Если вы хотите найти интересующую вас вакансию, то воспользуйтесь поиском.",
      target: () => searchRef.current,
      nextButtonProps: {
        children: "Далее",
      },
    },
    {
      title: "Просмотр вакансии",
      description: "Так же, вы можете просматривать вакансии нажимая на них.",
      target: () => vacancyRef.current,
      nextButtonProps: {
        children: "Завершить",
      },
      prevButtonProps: {
        children: "Назад",
      },
    },
  ];
};
export { mainTourSteps };
