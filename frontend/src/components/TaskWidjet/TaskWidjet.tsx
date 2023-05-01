import { useAppSelector } from "../../app/hooks";
import { getTasksSelector } from "../../app/tasks/taskSelectors";
import { TaskWidjetHeader } from "../TaskWidjetHeader/TaskWidjetHeader";

export const TaskWidjet: React.FC = () => {
  const tasks = useAppSelector(getTasksSelector);

  return (
    <>
      <TaskWidjetHeader />
    </>
  );
};
