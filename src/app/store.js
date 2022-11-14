import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
const reducers = combineReducers({
  notes: notesReducer,
})
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
