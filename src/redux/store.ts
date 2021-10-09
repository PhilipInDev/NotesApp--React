import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import notesPageReducer from "./reducers/notesPageReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const reducersCombined = combineReducers({
    notesPage: notesPageReducer
});
const store = createStore(reducersCombined, composeWithDevTools());

export type RootState = ReturnType<typeof reducersCombined>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;