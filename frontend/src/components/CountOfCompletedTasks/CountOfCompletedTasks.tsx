import { CustomSelect } from "../UI/Select/Select";

export const CountOfCompletedTasks: React.FC = () => {
  return (
    <>
      <div>
        <CustomSelect />
        <span>0 задач выполнено</span>
        <span>0 учатников</span>
      </div>
    </>
  );
};
