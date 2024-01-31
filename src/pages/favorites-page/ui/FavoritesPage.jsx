import { Vacancy } from "~entities/vacancy/index.js";
import { List, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useProfile } from "~shared/hooks/useProfile.js";
import { useEffect } from "react";
import { fetchFavorites } from "~entities/favorites/model/services/fetchFavorites/fetchFavorites.js";
import { fetchFavoritesSelector } from "~entities/favorites/model/selectors/fetch-favorites-selector/fetchFavoritesSelector.js";
import { favoritesIsLoading } from "~entities/favorites/model/selectors/favorites-is-loading/favoritesIsLoading.js";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteVacancies = useSelector(fetchFavoritesSelector);
  const isLoading = useSelector(favoritesIsLoading);

  const { currentUser } = useProfile();

  useEffect(() => {
    if (currentUser.uid) {
      dispatch(fetchFavorites(currentUser));
    }
  }, [currentUser, dispatch]);

  if (isLoading) return <Spin />;

  return (
    <List
      dataSource={favoriteVacancies && favoriteVacancies}
      header={<h3>Избранное</h3>}
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
