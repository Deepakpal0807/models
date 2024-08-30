import mongoose, { Schema, model } from "mongoose";
import {Supplier} from "../Supplier/supplier";

const schema = new Schema(
  {
    material_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    supplier_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Supplier", // Reference to the Supplier model
    },
    material_name: {
      type: String,
      required: true,
      trim: true, // Trims whitespace from the material name
    },
    material_type: {
      type: String,
      required: true,
      enum: ["Chemical", "Pharmaceutical", "Biological", "Other"], // Enum for predefined material types
    },
    quantity_in_stock: {
      type: Number,
      required: true,
      min: 0, // Ensures quantity cannot be negative
    },
    unit_price: {
      type: Number,
      required: true,
      min: 0, // Ensures price cannot be negative
    },
    expiration_date: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > Date.now(); // Ensures expiration date is in the future
        },
        message: "Expiration date must be in the future.",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Middleware to update the `updatedAt` field on save


export const Raw_Material = model("Raw_Material", schema);
