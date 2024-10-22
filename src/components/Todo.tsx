import { Dispatch, SetStateAction } from "react";
import { TTask } from "../types";
import checkIcon from "../assets/check.png";

type TTodo = {
  task: TTask;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  toggleTask: (id: string) => void;
  setSelectedTask: Dispatch<SetStateAction<TTask>>;
};

const Todo = ({ task, setIsEdit, toggleTask, setSelectedTask }: TTodo) => {
  const setEditForm = () => {
    setIsEdit(true);
    setSelectedTask(task);
  };

  const handleToggleTaskStatus = () => toggleTask(task.id);

  return (
    <div className="h-[91px] bg-white shadow-md shadow-black/10 rounded-md flex items-center justify-between pl-6 pr-5 mb-5">
      <div
        onClick={handleToggleTaskStatus}
        className="inline-flex items-center gap-4 cursor-pointer"
      >
        <span
          className={`relative inline-block h-[32px] w-[32px] ${
            task.isDone ? "border-[#49C25D]" : "border-deep-blue"
          } border-[1.5px] border-solid rounded-full`}
        >
          {task.isDone && (
            <span className="flex items-center justify-center rounded-full h-full w-full">
              <img src={checkIcon} />
            </span>
          )}
        </span>

        <p
          className={`${
            task.isDone ? "text-[#8D8D8D] line-through" : "text-deep-blue"
          } text-base font-medium`}
        >
          {task.item}
        </p>
      </div>

      <button
        onClick={setEditForm}
        className="border-[1px] border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white text-base font-medium w-[51px] h-[45px] rounded animate"
        type="button"
      >
        Edit
      </button>
    </div>
  );
};

export default Todo;
