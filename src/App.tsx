import "./Styles/App.css";
import { FC, ChangeEvent, useState } from "react";
import { ITask } from "./interfaces";
import TodoTask from "./Components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [important, setImportant] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  const handleImportant = (): void => {
    setImportant(!important);
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadLine: deadLine,
      important: important,
    };
    if (important === true) {
      setTodoList([newTask, ...todoList]);
    } else {
      setTodoList([...todoList, newTask]);
    }
    setTask("");
    setDeadLine(0);
    setImportant(false);
  };

  const completeTask = (taskDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskDelete;
      })
    );
  };

  return (
    <div className="App">
      <h1 className="titule">NOTE APP</h1>
      <div className="header">
        <div className="inputContainer">
          <input
            className="input-number"
            type="number"
            name="deadline"
            value={deadLine}
            onChange={handleChange}
          ></input>
          <input
            className="input-text"
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          ></input>
        </div>
        <button
          onClick={handleImportant}
          className={important ? "important" : "false-important"}
        >
          IMPORTANT
        </button>
        <button onClick={addTask} className="button">
          +
        </button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
