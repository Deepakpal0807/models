import mongoose, { Schema, model } from "mongoose";
import { Pharmacy } from "../Pharmacy/Pharmacy";
import { Dealer } from "../Wholesaler/wholesale_distributer";
import { Product } from "../Manufacturer/product";

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
pharmacy_id: {
    type: Schema.Types.ObjectId,
    ref: "Pharmacy", // Reference to the Wholesaler model
    required: true,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
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

export const DealerPharma = model("DealerPharma", orderSchema);
