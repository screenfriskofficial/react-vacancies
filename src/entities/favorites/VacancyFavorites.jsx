import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { memo, useCallback, useEffect, useState } from "react";
import { VacancyFavoritesTypes } from "~entities/vacancy/model/types/VacancyTypes.js";
import { useVacancies } from "~entities/favorites/model/hooks/useVacancies/useVacancies.js";
import { message, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "~entities/favorites/model/selectors/fetch-favorites/fetchFavorites.js";
import { useProfile } from "~shared/hooks/useProfile.js";
import { vacancyActions } from "~entities/favorites/model/slice/vacancyFavoritesSlice.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "~app/firebase.js";
import { favoritesIsLoading } from "~entities/favorites/model/selectors/favorites-is-loading/favoritesIsLoading.js";

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
    const { addVacancy, removeVacancy, loading } = useVacancies();
    const [isFavorite, setIsFavorite] = useState(false);
    const isLoading = useSelector(favoritesIsLoading);
    const dispatch = useDispatch();
    const favoriteVacancies = useSelector(fetchFavorites);
    const { currentUser } = useProfile();

    useEffect(() => {
      const getFavoriteVacancies = async () => {
        dispatch(vacancyActions.setIsLoading(true));
        if (!currentUser.uid) {
          return;
        }
        const userRef = collection(db, "users");
        const q = query(userRef, where("uid", "==", currentUser.uid));

        try {
          const querySnapshot = await getDocs(q);
          const favoriteVacancies = querySnapshot.docs.map(
            (doc) => doc.data().favorites,
          );
          dispatch(vacancyActions.getVacancies(favoriteVacancies.flat()));
        } catch (error) {
          message.error("Ошибка получения вакансий:", error);
          return [];
        } finally {
          dispatch(vacancyActions.setIsLoading(false));
        }
      };
      getFavoriteVacancies();
    }, [currentUser.uid, dispatch]);

    const checkFavorites = useCallback(() => {
      const isFav =
        favoriteVacancies && favoriteVacancies.some((value) => value.id === id);
      setIsFavorite(isFav);
    }, [id, favoriteVacancies]);

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

    if (loading) {
      return <Spin />;
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
