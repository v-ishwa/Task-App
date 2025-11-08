import React from "react";
import "./HomePage.css";
import edit from "../../assets/edit.png";
import trash from "../../assets/trash.png";
import view from "../../assets/view.png";
import TaskCard from "../../components/TaskCard/TaskCard";

const HomePage = () => {
  const tasks = [
    { id: 1, title: "omck", status: "pending" },
    { id: 2, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
  ];
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header">
          <h1 className="heading">All Tasks</h1>
          <button className="add-task-button">+ Add Task</button>
        </div>
        {tasks.map((task, _) => (
          <TaskCard task={task}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
