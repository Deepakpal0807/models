import mongoose, { Schema, model } from "mongoose"
import { Batch } from "./batch";

const schema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    drug_name: {
      type: String,
      required: true, // Ensure the product name is always provided
      trim: true, // Remove whitespace from both ends of the string
    },
    batch_id: {
      type: Schema.Types.ObjectId,
      ref: "Batch", // Reference to the Batch model
      required: true, // Ensure a batch is always associated with a product
    },
    manufactureDate: {
      type: Date,
      default: Date.now(), // Use a function to set the default to the current date
    },
    expiry_date: {
      type: Date,
      required: true, // Ensure the expiry date is always provided
      validate: {
        validator: function (v) {
          return v > this.manufactureDate; // Expiry date must be after manufacture date
        },
        message: "Expiry date must be after the manufacture date",
      },
    },
    description: {
      type: String,
      trim: true, // Remove whitespace from both ends of the string
      maxlength: 500, // Limit the description length to 500 characters
    },
    price:{
      type:Number,
      required:true,
      min:1
    }
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

export const Product = model("Product", schema);
