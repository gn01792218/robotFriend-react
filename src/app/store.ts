import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import searchReducer from '../feature/searchBar/searchBarSlice'
import robotsReducer from '../feature/robots/robotsSlice'

const store = configureStore({
  reducer: {
      searchBar:searchReducer,
      robots:robotsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store