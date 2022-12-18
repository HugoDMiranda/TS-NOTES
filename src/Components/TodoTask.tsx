import "../Styles/Task.css";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(taskDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className={task.important ? "important-task" : "task"}>
      <div className="content">
        <p className="date">Days to finish: {task.deadLine} </p>
        <p className="name">{task.taskName}</p>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
