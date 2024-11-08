import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    // camperInfo: camperInfoReducer,
    // favorites: favoritesReducer,
    // filters: filtersReducer,
  },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
  //   devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
