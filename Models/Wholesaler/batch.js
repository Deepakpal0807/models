import mongoose, { Schema, model } from "mongoose";
import { Wholesaler } from "./wholesale_distributer";
import { Batch } from "../Manufacturer/batch";
const schema = new Schema(
  {
    owner_id:{
        type: Schema.Types.ObjectId,
        ref: 'Wholesaler'
  
    },
    batch_id: {
      type: Schema.Types.ObjectId,
      auto: 'Batch', // Automatically generates a unique ID
    },
     drug_name:{
        type:String,
        required:true,
      },
    
    status: {
      type: String,
      enum: ["Active", "Expired", "Pending"], // Example status values
      required: true, // Ensure the status is always provided
    
    },
    quantity_ordered: {
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
