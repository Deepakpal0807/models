import mongoose, { Schema, model } from "mongoose";
import { Manufacturer } from "./manufacturer";
import { Batch } from "./batch"; // Import the Batch model

const schema = new Schema(
  {
    warehouse_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: 'Manufacturer',
      required: true, // Ensure owner_id is always provided
    },
    location: {
      type: String,
      required: true,
      trim: true, // Trims whitespace from the location string
    },
    capacity: {
      type: Number,
      required: true,
      min: 0, // Ensure capacity is non-negative
    },
    manager: {
      first_name: {
        type: String,
        required: true,
        trim: true, // Trims whitespace from the first name
      },
      last_name: {
        type: String,
        required: true,
        trim: true, // Trims whitespace from the last name
      },
      email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"], // Email validation
      },
      phone_no: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Phone number validation
      },
    },
    batches_stored: [
      {
        batch_id: {
          type: Schema.Types.ObjectId,
          ref: "Batch", // Reference to the Batch model
        },
        
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

// Middleware to validate manager email before saving
schema.pre("save", function (next) {
  if (this.isModified("manager.email")) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(this.manager.email)) {
      next(new Error("Invalid email format"));
    }
  }
  next();
});

export const Warehouse = model("Warehouse", schema);
