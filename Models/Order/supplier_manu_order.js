import mongoose, { Schema, model } from "mongoose";
import { Manufacturer } from "../Manufacturer/manufacturer";
import { Supplier } from "../Supplier/supplier";
import { Raw_Material } from "../Supplier/raw_material"; // Ensure the correct model name
import { Warehouse } from "../Supplier/Supplier_warehouse"; // Ensure the correct model name

const schema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    manufacturer_id: {
      type: Schema.Types.ObjectId,
      ref: "Manufacturer", // Reference to the Manufacturer model
      required: true, // Ensure manufacturer_id is always provided
    },
    supplier_id: {
      type: Schema.Types.ObjectId,
      ref: "Supplier", // Reference to the Supplier model
      required: true, // Ensure supplier_id is always provided
    },
    products: [
      {
        raw_material: {
          type: Schema.Types.ObjectId,
          ref: "Raw_Material", // Reference to the Raw_Material model
          required: true, // Ensure raw_material is always provided
        },
        quantity: {
          type: Number,
          required: true, // Ensure quantity is always provided
          min: 1, // Ensure quantity is positive
        },
        price_per_unit: {
          type: Number,
          required: true, // Ensure price_per_unit is always provided
          min: 0, // Ensure price is non-negative
          // This should come from the Raw_Material schema
        },
      },
    ],
    order_date: {
      type: Date,
      default: Date.now, // Default to the current date
    },
    delivery_date: {
      type: Date,
      // Optional field to indicate when the order is expected to be delivered
    },
    order_status: {
      type: String,
      enum: ["pending", "shipped", "delivered"], // Order status options
      default: "pending", // Default status
    },
    supplier_gst_number: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9A-Z]{15}$/, "Please enter a valid GST number"], // GST number validation
    },
    manufacturer_gst_number: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9A-Z]{15}$/, "Please enter a valid GST number"], // GST number validation
    },
    manufacturer_location: {
      type: String,
      required: true, // Ensure manufacturer's location is always provided
    },
    supplier_location: {
      type: String,
      required: true, // Ensure supplier's location is always provided
    },
    total_amount: {
      type: Number,
      required: true,
      min: 0, // Total amount must be non-negative
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

export const Order = model("Order", schema);
