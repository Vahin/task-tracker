import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchStatus, Task, TaskInitialState } from "./taskSlice.types";
import { getTasks } from "../../api/taskApi";

const initialState: TaskInitialState = {
  list: [],
  fetchStatus: FetchStatus.pending,
  error: null,
};

export const fetchTasks = createAsyncThunk<
  Task[],
  undefined,
  { rejectValue: string }
>("tasks/fetchTasks", async (_, { rejectWithValue }) => {
  try {
    const tasks = await getTasks();

    return tasks;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.fetchStatus = FetchStatus.pending;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.fullfilled;
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.fetchStatus = FetchStatus.rejected;
        state.error = action.payload ?? null;
      });
  },
});

export default taskSlice.reducer;
