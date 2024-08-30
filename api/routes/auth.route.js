import express from "express";
import {  deleteUser, signgin,   signup,  singOut } from "../controllers/auth.controller.js";



const route = express.Router();

route.post("/signup", signup);
route.post("/signin", signgin);
route.post("/signout", singOut)
route.delete('/delete/:userId', deleteUser);



export default route;
