import express from "express";
import {
  allMoneyManagement,
  addMoneyManagement,
} from "../controllers/moneyManagementController.js";

const Router = express.Router();

// get all money management data
Router.get("/", allMoneyManagement);

// create a new money management data
Router.post("/", addMoneyManagement);

export default Router;
