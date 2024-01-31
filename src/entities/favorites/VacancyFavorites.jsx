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

const VacancyFavorites = memo(
  ({
    id,
    salary_min,
    company,
    salary_max,
    currency,
    job_name,
    salary,
    duty,
    creation_date,
    url,
    addresses,
  }) => {
    const { addVacancy, removeVacancy } = useVacancies();
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();
    const favoriteVacancies = useSelector(fetchFavoritesSelector);
    const isLoading = useSelector(favoritesIsLoading);
    const error = useSelector(favoritesError);
    const { currentUser } = useProfile();

    const checkFavorites = useCallback(() => {
      const isFav =
        favoriteVacancies && favoriteVacancies.some((value) => value.id === id);
      setIsFavorite(isFav);
    }, [favoriteVacancies, id]);

    useEffect(() => {
      if (currentUser) {
        dispatch(fetchFavorites(currentUser));
      }
    }, [currentUser, dispatch]);

    useEffect(() => {
      checkFavorites();
    }, [checkFavorites]);

    const handleAddFavorite = async (e) => {
      e.stopPropagation();
      await addVacancy(
        id,
        salary_min,
        salary_max,
        currency,
        company,
        job_name,
        salary,
        duty,
        creation_date,
        url,
        addresses,
      );
      setIsFavorite(true);
    };

    const handleRemoveFavorite = async (e) => {
      e.stopPropagation();
      await removeVacancy(
        id,
        salary_min,
        salary_max,
        currency,
        company,
        job_name,
        salary,
        duty,
        creation_date,
        url,
        addresses,
      );
      setIsFavorite(false);
    };

    if (error) {
      return message.error(error);
    }

    if (isLoading) {
      return <Spin />;
    }

    return (
      <>
        {isFavorite ? (
          <HeartFilled
            style={{ fontSize: "20px" }}
            key={id}
            onClick={handleRemoveFavorite}
          />
        ) : (
          <HeartOutlined
            style={{ fontSize: "20px" }}
            key={id}
            onClick={handleAddFavorite}
          />
        )}
      </>
    );
  },
);

VacancyFavorites.displayName = "VacancyFavorites";
VacancyFavorites.propTypes = VacancyFavoritesTypes;

export { VacancyFavorites };
