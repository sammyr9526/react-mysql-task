import { SECRET } from "./config.js";
import { createPool } from "mysql2/promise";

export const pool = createPool({
  database: "react-mysql-tasks",
  user: "67o9087f2gqro8mnm4ng",
  host: "aws.connect.psdb.cloud",
  password: SECRET,
  ssl: { rejectUnauthorized: false },
});

console.log("conecction to db ready");
