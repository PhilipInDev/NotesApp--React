import {configureStore} from "@reduxjs/toolkit";
import notesPageReducer from "./slices/notesPageSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        notesPage: notesPageReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;