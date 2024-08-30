import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    batch_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    manufacturer_id: {
      type: Schema.Types.ObjectId,
      ref: "manufacturer", // Reference to the Manufacturer model
      required: true, // Ensure each batch has an associated manufacturer
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "product", // Reference to the Product model
      required: true, // Ensure each batch is associated with a product
    },
    production_date: {
      type: Date,
      default: Date.now, // Default to the current date
    },
    expiry_date: {
      type: Date,
      required: true, // Ensure the expiry date is always provided
      validate: {
        validator: function (v) {
          return v > this.production_date; // Expiry date must be after production date
        },
        message: "Expiry date must be after the production date",
      },
    },
    status: {
      type: String,
      enum: ["Active", "Expired", "Pending"], // Example status values
      required: true, // Ensure the status is always provided
    },
    batch_number: {
      type: Number,
      required: true, // Ensure each batch has a unique number
      unique: true, // Ensure batch numbers are unique
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
