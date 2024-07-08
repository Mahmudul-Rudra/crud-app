import mongoose from "mongoose";
import MoneyManagement from "../models/moneyManagement.js";

// Get all money management info
export const allMoneyManagement = async (req, res) => {
  const moneyManagements = await MoneyManagement.find({}).sort({
    createdAt: -1,
  });
  try {
    res.status(200).json(moneyManagements);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add a new money management
export const addMoneyManagement = async (req, res) => {
  const { name, money_remaining, money_spent, reason } = req.body;
  let emptyFields = [];
  if (!name) {
    emptyFields.push("Name");
  }
  if (!money_remaining) {
    emptyFields.push("Money remaining");
  }
  if (!money_spent) {
    emptyFields.push("Money spent");
  }
  if (!reason) {
    emptyFields.push("Reason");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ message: `Please fill in the following fields`, emptyFields });
  }

  try {
    const moneyManagement = await MoneyManagement.create({
      name,
      money_remaining,
      money_spent,
      reason,
    });
    res.status(200).json(moneyManagement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
