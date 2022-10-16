import {configureStore} from "@reduxjs/toolkit";
import {loadState, saveState} from "./localStorage";

const persistedState = loadState<any>('pathfinder-app');
const store = configureStore({
  reducer: {
    // character: charactersReducer,
  },
  preloadedState: persistedState
});

store.subscribe(() => saveState('pathfinder-app', store.getState()));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;