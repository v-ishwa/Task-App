import bcrypt from "bcryptjs";
import pool from "../config/db.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  // check for empty fields
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  // password and email constraints
  if (password.length < 6)
    return res
      .status(400)
      .json({ message: "Password should be atleast 6 characters" });
      
  if (!/\S+@\S+\.\S+/.test(email))
    return res.status(400).json({ message: "Please enter a valid email" });

  try {
    // check if email exists
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0)
      return res.status(400).json({ message: "User already exist" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert user into DB
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashedPassword]
    );

    const newUser = result.rows[0];
    const token = generateToken(newUser.id); // generate token for registered user

    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check for empty fields
  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required" });

  try {
    // check if email exists
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    const user = result.rows[0];

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    //check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user.id); // generate token for loggedIn user
    
    res.status(200).json({
      message: "Login successful",
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
