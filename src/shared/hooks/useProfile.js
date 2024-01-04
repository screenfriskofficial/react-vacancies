import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~app/firebase.js";
import { useEffect, useState } from "react";

export const useProfile = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsLoadingProfile(false);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsub();
  }, []);
  return {
    currentUser,
    isLoadingProfile,
  };
};
