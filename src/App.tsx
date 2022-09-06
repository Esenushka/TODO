import './App.css';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import { ITask } from './interfaces';
import Task from './Components/Task';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value)
  };

  const addTask = (): void => {
    setTodoList([...todoList, { todo: task }])
    setTask("")
  }
  const completeTask = (taskNametoDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.todo != taskNametoDelete
    }))
  }
  useEffect(() => {
    fetch("https://62c4167f7d83a75e39efe6f1.mockapi.io/todo/todo")
      .then((res: Response) => res.json())
      .then((data) => {
        setTodoList(data)
      })
  }, [])
  return (
    <div className="App">
      <div className='header'>
        <div className='inpCon'>
          <input
            name='task'
            type="text"
            value={task}
            placeholder='TASK....'
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>ADD TASK</button>
      </div>
      <div className='todo'>
        {todoList.map((task: ITask, key: number) => {
          return <Task key={key} task={task} completeTask={completeTask} />
        })}
      </div>
    </div>
  );
}

export default App;
