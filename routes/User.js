import express from "express";
import { UserList, UserDelete, UserCreate, UserUpdate } from "../controllers/User.js";
const UserRoutes = express.Router();
UserRoutes.get("/", UserList);
UserRoutes.post("/", UserCreate);
UserRoutes.post("/:id", UserUpdate);
UserRoutes.delete("/:id", UserDelete);
export {UserRoutes};
