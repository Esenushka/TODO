import { ITask } from "../interfaces"

interface Props {
  task?: ITask;
  completeTask(taskNametoDelete: any):void;
}

const Task = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <h1>{task?.todo}</h1>
      <button onClick={() => {completeTask(task?.todo)}}>X</button>
    </div>
  ) 
}

export default Task