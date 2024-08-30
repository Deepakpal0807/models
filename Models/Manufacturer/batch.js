import mongoose, { Schema, model } from "mongoose";
import { Manufacturer } from "./manufacturer";
const schema = new Schema(
  {
    batch_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    manufacturer_id: {
      type: Schema.Types.ObjectId,
      ref: "Manufacturer", // Reference to the Manufacturer model
      required: true, // Ensure each batch has an associated manufacturer
    },
    status: {
      type: String,
      enum: ["Active", "Expired", "Pending"], // Example status values
      required: true, // Ensure the status is always provided
    },
    quantity_produced: {
      type: Number,
      required: true,
      min: 0, // Ensure quantity is non-negative
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

// Virtual field to get the drug name from the Product model
schema.virtual("drug_name").get(function () {
  return this.product_id ? this.product_id.name : "Unknown";
});

// Ensure virtual fields are serialized
schema.set("toJSON", { virtuals: true });
schema.set("toObject", { virtuals: true });

export const Batch = model("Batch", schema);
