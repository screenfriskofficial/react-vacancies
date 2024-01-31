import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "~app/firebase.js";

import { message } from "antd";
import { useProfile } from "~shared/hooks/useProfile.js";

const useVacancies = () => {
  const { currentUser } = useProfile();

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
      message.error(e);
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
      message.error(e);
    }
  };

  return {
    addVacancy,
    removeVacancy,
  };
};

export { useVacancies };
