import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { memo, useCallback, useEffect, useState } from "react";
import { VacancyFavoritesTypes } from "~entities/vacancy/model/types/VacancyTypes.js";
import { useVacancies } from "~entities/vacancy/model/hooks/useVacancies/useVacancies.js";
import { Spin } from "antd";

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
    const { addVacancy, removeVacancy, getFavoriteVacancies, isLoading } =
      useVacancies();
    const [isFavorite, setIsFavorite] = useState(false);

    const checkFavorites = useCallback(() => {
      const check = async () => {
        const favorites = await getFavoriteVacancies();
        const isFav = favorites && favorites.some((value) => value.id === id);
        setIsFavorite(isFav);
      };
      check().then((r) => r);
    }, [getFavoriteVacancies, id]);

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
