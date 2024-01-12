const mainTourSteps = (searchRef, vacancyRef, optionsRef) => {
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
        children: "Далее",
      },
      prevButtonProps: {
        children: "Назад",
      },
    },
    {
      title: "Настройки поиска",
      description:
        "Настройте ваш поиск по интересующему региону и многим другим параметрам!",
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
