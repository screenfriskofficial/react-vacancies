import { useVacancies } from "~entities/vacancy/model/hooks/useVacancies/useVacancies.js";
import { useEffect, useState } from "react";

import { Vacancy } from "~entities/vacancy/index.js";
import { List } from "antd";

const FavoritesPage = () => {
  const { getFavoriteVacancies } = useVacancies();
  const [favoriteVacancies, setFavoriteVacancies] = useState([]);

  useEffect(() => {
    const fetchFavoriteVacancies = async () => {
      const vacancies = await getFavoriteVacancies();
      console.log(vacancies);
      setFavoriteVacancies(vacancies);
    };

    fetchFavoriteVacancies();
  }, [getFavoriteVacancies]);

  return (
    <List
      dataSource={favoriteVacancies}
      itemLayout="vertical"
      bordered
      size={"large"}
      renderItem={(vacancy) => (
        <Vacancy
          key={vacancy.id}
          id={vacancy.id}
          url={vacancy.url}
          creation_date={vacancy.creation_date}
          addresses={vacancy.addresses}
          duty={vacancy.duty}
          salary_max={vacancy.salary_max}
          currency={vacancy.currency}
          salary={vacancy.salary}
          salary_min={vacancy.salary_min}
          job_name={vacancy.job_name}
          company={vacancy.company}
        />
      )}
    />
  );
};

export { FavoritesPage };
