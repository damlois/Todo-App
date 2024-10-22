import { TTask } from "../types";
import Button from "./Button";
import Input from "./Input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type TForm = {
  selectedTask: TTask;
  isEdit: boolean;
  setSelectedTask: Dispatch<SetStateAction<TTask>>;
  createTask: (value: string) => void;
  editTask: (id: string, newText: string) => void;
  deleteTask: (id: string) => void;
};

const Form = ({
  isEdit,
  selectedTask,
  setSelectedTask,
  createTask,
  editTask,
  deleteTask,
}: TForm) => {
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);

  const { item: taskName, id: taskId } = selectedTask

  useEffect(() => {
    setIsSaveDisabled(() => {
      return taskName === "";
    });
    setIsDeleteDisabled(() => {
      return taskId === "";
    });
  }, [taskName]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (isEdit) {
      if (taskId) {
        editTask(taskId, taskName);
      }
    } else {
      createTask(taskName);
    }
  };

  const handleDelete = () => {
    if (taskId) {
      deleteTask(taskId);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="h-full flex flex-col">
      <Input
        value={taskName}
        onChange={(e) =>
          setSelectedTask({ ...selectedTask, item: e.target.value })
        }
        name="taskname"
      />
      <div className="flex gap-5 mt-auto">
        <Button
          title="Delete"
          disabled={isDeleteDisabled}
          onClick={handleDelete}
          variant="filled"
          type="button"
          className="w-3/12 h-[61px] rounded-[6px] bg-[#AB3535] border-[#720D0D] shadow-[inset_0_5px_3px_-3px_rgba(255,255,255,0.2)]"
        />
        <Button
          title="Save"
          disabled={isSaveDisabled}
          variant="filled"
          type="submit"
          className="w-9/12 h-[61px] rounded-[6px] shadow-[inset_0_5px_3px_-3px_rgba(255,255,255,0.2)]"
        />
      </div>
    </form>
  );
};

export default Form;
