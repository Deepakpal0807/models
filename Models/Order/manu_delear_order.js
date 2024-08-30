import mongoose, { Schema, model } from "mongoose";
import { Manufacturer } from "../Manufacturer/manufacturer";
import { Dealer } from "../Wholesaler/wholesale_distributer";
import { Batch } from "../Manufacturer/batch";

const orderSchema = new Schema({
  order_id: {
    type: Schema.Types.ObjectId,
    auto: true, // Automatically generates a unique ID
  },
  dealer_id: {
    type: Schema.Types.ObjectId,
    ref: "Dealer", // Reference to the Hospital model
    required: true,
  },
manufacturerr_id: {
    type: Schema.Types.ObjectId,
    ref: "Manufacturer", // Reference to the Wholesaler model
    required: true,
  },
  products: [
    {
      batch: {
        type: Schema.Types.ObjectId,
        ref: "Batch", // Reference to the Product model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1, // Quantity must be at least 1
      },
      unit_price: {
        type: Number,
        required: true,
        min: 0, // Price must be non-negative
        //this will come from the batch schmea in manufacturer.
      },
    },
  ],
  order_date: {
    type: Date,
    default: Date.now(), // Use a function to set the default to the current date
  },
  delivery_date: {
    type: Date,
    required: true, // Delivery date must be provided
  },
  order_status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "canceled"], // Possible statuses for an order
    default: "pending",
  },
  dealer_gst_number: {
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
  dealer_location: {
    type: String,
    required: true, // Ensure supplier's location is always provided
  },
  total_amount: {
    type: Number,
    required: true,
    min: 0, // Total amount must be non-negative
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

export const Order = model("Order", orderSchema);
