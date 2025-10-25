import React from "react";
import "./HomePage.css";
import edit from "../../assets/edit.png";
import trash from "../../assets/trash.png";
import view from "../../assets/view.png";

const HomePage = () => {
  const tasks = [
    { id: 1, title: "omck", status: "pending" },
    { id: 2, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
    { id: 3, title: "omck", status: "pending" },
  ];
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header">
          <h1 className="heading">All Tasks</h1>
          <button className="add-task-button">+ Add Task</button>
        </div>
        <table className="task-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td className="table-buttons">
                  <button><img src={view} alt="" />View</button>
                  <button><img src={edit} alt="" />Edit</button>
                  <button><img src={trash} alt="" />Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
