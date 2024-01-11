import { auth, db } from "~app/firebase.js";
import { doc, setDoc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { message } from "antd";
import { useState } from "react";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithEmailAndPassword = async (email, password) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      message.success("Вы успешно вошли в аккаунт!", 1);
    } catch (error) {
      const errorMessage = error.message;
      message.error(errorMessage, 1);
    } finally {
      setIsLoading(false);
    }
  };

  const registerWithEmailAndPassword = async (email, password, username) => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: username,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: username,
        email,
        favorites: [],
      });

      message.success("Вы успешно зарегестрировались!", 1);
    } catch (error) {
      const errorMessage = error.message;
      message.error(errorMessage, 1);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      message.success("Вы успешно вышли из аккаунта!", 1);
    } catch (error) {
      const errorMessage = error.message;
      message.error(errorMessage, 1);
    }
  };

  return {
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    isLoading,
  };
};
