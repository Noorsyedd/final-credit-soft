const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors"); // Import cors
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost", // or your MySQL host
  user: "root", // your MySQL username
  password: "", // your MySQL password
  database: "agrani_db", // your MySQL database
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Sign Up Route
app.post("/signup", async (req, res) => {
  const { userId, password, name, email, division } = req.body;
  console.log("Received data:", req.body); // Log the request body

  // Check if all required fields are present
  if (!userId || !password || !name || !email || !division) {
    return res.status(400).send("All fields are required.");
  }

  // Continue with the signup logic
  const hashedPassword = await bcrypt.hash(password, 10);
  const query =
    "INSERT INTO users (userId, password, name, email, division) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [userId, hashedPassword, name, email, division],
    (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).send("User ID already exists.");
        }
        return res.status(500).send("Server error");
      }

      const token = jwt.sign({ id: result.insertId }, "your_jwt_secret", {
        expiresIn: "1h",
      });
      res.status(201).json({ authToken: token });
    }
  );
});

// Login Route
app.post("/login", (req, res) => {
  const { userId, password } = req.body;

  // Log the received data to verify
  console.log("Login Attempt:", req.body);

  // Check if the required fields are provided
  if (!userId || !password) {
    return res.status(400).send("User ID and password are required.");
  }

  const query = "SELECT * FROM users WHERE userId = ?";
  db.query(query, [userId], async (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send("Server error");
    }

    if (results.length === 0) {
      return res.status(401).send("Invalid User ID or password.");
    }

    const user = results[0];

    // Check if the password matches
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send("Invalid User ID or password.");
    }

    // If login is successful, create a token and send it back
    const token = jwt.sign({ id: user.id }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    return res.json({ authToken: token });
  });
});

// New Route to Store Verification Data
app.post("/api/verification", (req, res) => {
  const { dob, nid, placeOfBirth } = req.body;

  const status = "incomplete";
  // Log the received verification data
  console.log("Verification data received:", req.body);

  // Check if all required fields are present
  if (!dob || !nid || !placeOfBirth) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  // Insert verification data into the database
  const query =
    "INSERT INTO person_info (dob, nid, country_of_birth, status) VALUES (?, ?, ?, ?)";
  db.query(query, [dob, nid, placeOfBirth, status], (err, result) => {
    if (err) {
      console.error("Error saving verification data:", err);
      return res.status(500).json({ success: false, message: "Server error" });
    }
    res
      .status(201)
      .json({ success: true, message: "Verification data saved successfully" });
  });
});

// Fetch incomplete records
app.get("/api/incomplete-person-info", (req, res) => {
  const query = "SELECT * FROM person_info WHERE status = 'incomplete'";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching incomplete records:", err);
      return res.status(500).json({ success: false, message: "Server error" });
    }

    res.status(200).json({ success: true, data: results });
  });
});

// Update person info and mark as complete
app.put("/api/update-person-info/:id", (req, res) => {
  const { id } = req.params;
  const {
    name,
    father_name,
    mother_name,
    spouse_name,
    nid,
    dob,
    district_of_birth,
    tin,
    gender,
    country_of_birth,
    permanent_district,
    permanent_postal_code,
    permanent_details,
    permanent_country,
    present_district,
    present_postal_code,
    present_details,
    present_country,
    id_type,
    id_issue_date,
    id_number,
    id_issue_country,
    sector_code,
    telephone_number,
  } = req.body;

  const query = `
    UPDATE person_info 
    SET name = ?, father_name = ?, mother_name = ?, spouse_name = ?, nid = ?, dob = ?, district_of_birth = ?, tin = ?, gender = ?, country_of_birth = ?, 
        permanent_district = ?, permanent_postal_code = ?, permanent_details = ?, permanent_country = ?, 
        present_district = ?, present_postal_code = ?, present_details = ?, present_country = ?, 
        id_type = ?, id_issue_date = ?, id_number = ?, id_issue_country = ?, sector_code = ?, telephone_number = ?, status = 'complete' 
    WHERE id = ?
  `;

  const values = [
    name,
    father_name,
    mother_name,
    spouse_name,
    nid,
    dob,
    district_of_birth,
    tin,
    gender,
    country_of_birth,
    permanent_district,
    permanent_postal_code,
    permanent_details,
    permanent_country,
    present_district,
    present_postal_code,
    present_details,
    present_country,
    id_type,
    id_issue_date,
    id_number,
    id_issue_country,
    sector_code,
    telephone_number,
    id,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error updating person info:", err);
      return res.status(500).json({ success: false, message: "Server error" });
    }

    res
      .status(200)
      .json({ success: true, message: "Person info updated successfully" });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
