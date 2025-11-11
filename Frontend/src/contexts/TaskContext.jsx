import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { token } = useAuth();

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tasks/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data) {
        setTasks(data);
      }
      console.log(tasks);
    } catch (error) {
      console.error("Error in getTasks:", error);
    }
  };

  const value = {
    tasks,
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within TaskProvider");
  }
  return context;
};
