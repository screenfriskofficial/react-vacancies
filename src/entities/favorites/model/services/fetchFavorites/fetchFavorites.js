import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "~app/firebase.js";
import { doc, getDoc } from "firebase/firestore";

const fetchFavorites = createAsyncThunk(
  "fetchFavorites",
  async (currentUser, thunkAPI) => {
    if (!currentUser.uid) {
      return;
    }

    const userRef = doc(db, "users", currentUser.uid);

    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        return docSnap.data().favorites;
      } else {
        return thunkAPI.rejectWithValue("User not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export { fetchFavorites };
