import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { memo, useCallback, useEffect, useState } from "react";
import { VacancyFavoritesTypes } from "~entities/vacancy/model/types/VacancyTypes.js";
import { useVacancies } from "~entities/favorites/model/hooks/useVacancies/useVacancies.js";
import { message, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { useProfile } from "~shared/hooks/useProfile.js";
import { fetchFavorites } from "~entities/favorites/model/services/fetchFavorites/fetchFavorites.js";
import { fetchFavoritesSelector } from "~entities/favorites/model/selectors/fetch-favorites-selector/fetchFavoritesSelector.js";
import { favoritesIsLoading } from "~entities/favorites/model/selectors/favorites-is-loading/favoritesIsLoading.js";
import { favoritesError } from "~entities/favorites/model/selectors/favorites-error/favoritesError.js";

const VacancyFavorites = memo(({ id, ...otherProps }) => {
  const { addVacancy, removeVacancy } = useVacancies();
  const dispatch = useDispatch();
  const favoriteVacancies = useSelector(fetchFavoritesSelector);
  const isLoading = useSelector(favoritesIsLoading);
  const error = useSelector(favoritesError);
  const { currentUser } = useProfile();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const list =
      favoriteVacancies && favoriteVacancies.some((item) => item.id === id);
    setIsFavorite(list);
  }, [favoriteVacancies, id]);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchFavorites(currentUser));
    }
  }, [currentUser, dispatch]);

  const toggleFavorite = useCallback(
    async (e) => {
      e.stopPropagation();
      const response = isFavorite
        ? await removeVacancy({ id, ...otherProps })
        : await addVacancy({ id, ...otherProps });
      setIsFavorite((prevState) => !prevState);
      return response;
    },
    [addVacancy, id, isFavorite, otherProps, removeVacancy],
  );

  if (error) {
    return message.error(error);
  }

  if (isLoading) {
    return <Spin />;
  }

  const FavoriteIcon = isFavorite ? HeartFilled : HeartOutlined;

  return (
    <FavoriteIcon
      style={{ fontSize: "20px" }}
      key={id}
      onClick={toggleFavorite}
    />
  );
});

VacancyFavorites.displayName = "VacancyFavorites";
VacancyFavorites.propTypes = VacancyFavoritesTypes;

export { VacancyFavorites };
