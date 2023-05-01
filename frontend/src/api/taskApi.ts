import { Task, TaskStatus } from "../app/tasks/taskSlice.types";

const mockedTasks: Task[] = [
  {
    title: "First task",
    description: "Lorem ipsum dolor",
    status: TaskStatus.uncompleted,
    isChosen: false,
    participantsID: ["1"],
  },
  {
    title: "Second task",
    description: "Lorem ipsum dolor",
    status: TaskStatus.uncompleted,
    isChosen: true,
    participantsID: ["1", "2"],
  },
];

export const getTasks = async () => {
  // ...
  await new Promise((res) => setInterval(() => res, 0));
  return mockedTasks;
};
