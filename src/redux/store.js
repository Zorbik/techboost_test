import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { userApi } from "./users/userApi";
import followSlice from "./users/followSlice";

const followingPersistConfig = {
  key: "following",
  storage,
};

export const store = configureStore({
  reducer: {
    following: persistReducer(followingPersistConfig, followSlice),

    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([userApi.middleware]),
});

export const persistor = persistStore(store);
