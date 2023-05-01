import { RootState } from "../store";
import { Task } from "./taskSlice.types";

type GetTasks = (state: RootState) => Task[];

export const getTasksSelector: GetTasks = (state) => state.tasks.list;
