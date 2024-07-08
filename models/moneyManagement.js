import mongoose from "mongoose";

const moneyManagementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    money_remaining: {
      type: Number,
      required: true,
    },
    money_spent: {
      type: Number,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MoneyManagement = mongoose.model(
  "MoneyManagement",
  moneyManagementSchema
);

export default MoneyManagement;
