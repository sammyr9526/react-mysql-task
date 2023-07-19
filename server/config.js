import { config } from "dotenv";

config();

export const SECRET = process.env.SECRET;

export const PORT = 4000;
