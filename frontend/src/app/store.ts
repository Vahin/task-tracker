import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UIReducer from "./ui/UISlice";
import taskReducer from "./tasks/taskSlice";

export const store = configureStore({
  reducer: {
    ui: UIReducer,
    tasks: taskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
