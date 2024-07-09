import express from "express";
import {
  allMoneyManagement,
  addMoneyManagement,
  deleteMoneyManagement,
} from "../controllers/moneyManagementController.js";

const Router = express.Router();

// get all money management data
Router.get("/", allMoneyManagement);

// create a new money management data
Router.post("/", addMoneyManagement);

// delete a money management data
Router.delete("/:id", deleteMoneyManagement);
export default Router;
