import { auth } from "~app/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { message } from "antd";
import { useState } from "react";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithEmailAndPassword = async (email, password) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      message.success("Вы успешно вошли в аккаунт!");
    } catch (error) {
      const errorMessage = error.message;
      message.error(errorMessage, 1);
    } finally {
      setIsLoading(false);
    }
  };

  const registerWithEmailAndPassword = async (email, password) => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      message.success("Вы успешно зарегестрировались!");
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
      message.success("Вы успешно вышли из аккаунта!");
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
