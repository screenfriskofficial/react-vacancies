import {
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "~app/firebase.js";

import { useProfile } from "~shared/hooks/useProfile.js";
import { message } from "antd";
import { useState } from "react";

const useVacancies = () => {
  const { currentUser } = useProfile();
  const [isLoading, setIsLoading] = useState(false);

  const addVacancy = async (
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
  ) => {
    const ref = doc(db, "users", currentUser.uid);
    try {
      setIsLoading(true);
      await updateDoc(ref, {
        favorites: arrayUnion({
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
        }),
      });
      message.success("Добавлено в избранное", 1);
    } catch (e) {
      setIsLoading(true);
      message.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const removeVacancy = async (
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
  ) => {
    const ref = doc(db, "users", currentUser.uid);
    try {
      setIsLoading(true);
      await updateDoc(ref, {
        favorites: arrayRemove({
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
        }),
      });
      message.success("Удалено из избранного", 1);
    } catch (e) {
      setIsLoading(true);
      message.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getFavoriteVacancies = async () => {
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
      return favoriteVacancies.flat();
    } catch (error) {
      message.error("Ошибка получения вакансий:", error);
      return [];
    }
  };

  return {
    getFavoriteVacancies,
    addVacancy,
    removeVacancy,
    isLoading,
  };
};

export { useVacancies };
