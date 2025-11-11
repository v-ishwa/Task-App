import React from "react";
import "./HomePage.css";
import edit from "../../assets/edit.png";
import trash from "../../assets/trash.png";
import view from "../../assets/view.png";
import TaskCard from "../../components/TaskCard/TaskCard";
import { useTask } from "../../contexts/TaskContext";

const HomePage = () => {
  const { tasks, getTasks } = useTask();

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header">
          <h1 className="heading">All Tasks</h1>
          <button className="add-task-button">+ Add Task</button>
        </div>
        {tasks.length === 0 ? (
          <p>No Tasks Created...</p>
        ) : (
          tasks.map((task, _) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default HomePage;
