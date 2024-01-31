import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "~app/firebase.js";

const fetchFavorites = createAsyncThunk(
  "fetchFavorites",
  async (currentUser, thunkAPI) => {
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
      return thunkAPI.fulfillWithValue(favoriteVacancies.flat());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export { fetchFavorites };
