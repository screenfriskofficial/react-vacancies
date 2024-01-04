const mainTourSteps = (searchRef, vacancyRef, optionsRef) => {
  return [
    {
      title: "Поиск",
      description:
        "Если вы не можете найти вакансию, то можете воспользоваться поиском.",
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
        children: "Далее",
      },
      prevButtonProps: {
        children: "Назад",
      },
    },
    {
      title: "Настройка поиска",
      description:
        "Тут вы можете настроить ваши поисковые запросы, как вам удобно.",
      target: () => optionsRef.current,
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
