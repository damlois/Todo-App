import { useState } from "react";
import SectionHeader from "./components/SectionHeader";
import { TTask } from "./types";
import UpgradeBanner from "./components/UpgradeBanner";
import Todo from "./components/Todo";
import Form from "./components/Form";
import avatar from "./assets/avatar.png";

const taskItems: TTask[] = [
  {
    id: "1",
    item: "Training at the Gym",
    isDone: true,
  },
  {
    id: "2",
    item: "Play Paddle with friends",
    isDone: false,
  },
  {
    id: "3",
    item: "Burger BBQ with family",
    isDone: false,
  },
];

const emptySelectedTask = {
  item: "",
  id: "",
  isDone: false,
};

const App = () => {
  const [tasks, setTasks] = useState<TTask[]>(taskItems);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TTask>(emptySelectedTask);

  const createTask = (item: string): void => {
    if (!item) return;

    const newTask: TTask = {
      id: Date.now().toString(),
      item: item.trim(),
      isDone: false,
    };

    setTasks([...tasks, newTask]);
  };

  const editTask = (id: string, updatedItem: string): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, item: updatedItem.trim() } : task
      )
    );
    resetFormState();
  };

  const toggleTask = (id: string): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
    resetFormState();
  };

  const deleteTask = (id: string): void => {
    setTasks(tasks.filter((task) => task.id !== id));
    resetFormState();
  };

  const resetFormState = () => {
    setIsEdit(false);
    setSelectedTask(emptySelectedTask);
  };

  return (
    <div className="flex h-screen w-screen bg-[#F3F3F3]">
      <div className="w-4/12 shadow-xl shadow-black/40 h-full">
        <SectionHeader alignment="left">
          <div className="flex gap-5 max-w-[292px]">
            <img src={avatar} className="h-[50px] w-[50px] rounded-full" />

            <div>
              <h6 className="text-[16px] [text-shadow:0px_2px_1px_#030712] font-medium leading-[19px] text-white mb-1">
                Hello, John
              </h6>
              <h4 className="text-[25px] [text-shadow:0px_2.5px_1px_#030712] font-thin italic leading-[26px] text-white">
                What are your plans for today?
              </h4>
            </div>
          </div>
        </SectionHeader>
        <UpgradeBanner />
        {tasks.map((task) => (
          <Todo
            key={task.id}
            {...{ task, setIsEdit, setSelectedTask, toggleTask }}
          />
        ))}
      </div>
      <div className="w-8/12">
        <SectionHeader alignment="center">
          <h6 className="text-[20px] [text-shadow:0px_2px_1px_#030712] font-medium leading-[18.75px] text-white mb-1">
            {isEdit ? "Edit" : "Create"} Task
          </h6>
        </SectionHeader>
        <div className="px-4 py-6 flex flex-col h-[calc(100vh_-_123px)]">
          <Form
            {...{
              isEdit,
              setSelectedTask,
              createTask,
              editTask,
              deleteTask,
              selectedTask,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
