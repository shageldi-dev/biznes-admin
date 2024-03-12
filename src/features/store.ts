// store.ts
import { configureStore } from "@reduxjs/toolkit";
import staticFilesSlice from "./static/staticFileSlice";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [staticFilesSlice.reducerPath]: staticFilesSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(staticFilesSlice.middleware),
});

export default store;
