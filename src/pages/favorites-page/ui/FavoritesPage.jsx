import { useVacancies } from "~entities/vacancy/model/hooks/useVacancies/useVacancies.js";
import { useEffect, useState } from "react";
import { Typography } from "antd";

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
    <div>
      {favoriteVacancies.map((vacancy) => (
        <Typography key={vacancy.id}>{vacancy.id}</Typography>
      ))}
    </div>
  );
};

export { FavoritesPage };
