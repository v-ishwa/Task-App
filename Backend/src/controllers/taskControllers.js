import pool from "../config/db.js";

export const createTask = async (req, res) => {
  const { title, description, status, priority, progress } = req.body;
  const userId = req.user.id;
  console.log(userId);
  console.log(title, description, status, priority, progress );

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO tasks (user_id, title, description, status, priority, progress) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        userId,
        title,
        description,
        status || "pending",
        priority || "medium",
        progress || 0,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Failed to create task" });
  }
};

export const getTasks = async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query(
      `SELECT * FROM tasks WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

export const getTaskById = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM tasks WHERE id = $1 and user_id = $2",
      [id, userId]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({ message: "Failed to fetch task" });
  }
};

export const updateTask = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { title, description, status, priority, progress } = req.body;

  try {
    const result = await pool.query(
      "UPDATE tasks SET title = $1, description = $2, status = $3, priority = $4, progress = $5 where id = $6 and user_id = $7 RETURNING *",
      [title, description, status, priority, progress, id, userId]
    );

    if (result.rows.length === 0)
      return res
        .status(404)
        .json({ message: "Task not found or not authorized" });

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Failed to update task" });
  }
};

export const deleteTask = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM tasks WHERE id = $1 and user_id = $2 RETURNING *",
      [id, userId]
    );

    if (result.rows.length === 0)
      return res
        .status(404)
        .json({ message: "Task not found or not authorized" });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Failed to delete task" });
  }
};
