import mongoose, { Schema, model } from "mongoose";

const complianceSchema = new Schema(
  {
    // Unique identifier for each compliance record
    compliance_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },

    // Foreign key linking the compliance record to a specific product
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    // Foreign key linking the compliance record to a specific regulatory body
    regulatory_id: {
      type: Schema.Types.ObjectId,
      ref: "Regulatory",
      required: true,
    },

    // The date on which compliance was checked or certified
    compliance_date: {
      type: Date,
      default: Date.now,
      required: true,
    },

    // Additional information about the compliance check
    details: {
      type: String,
      trim: true,
    },

    // The current compliance status
    status: {
      type: String,
      enum: ["compliant", "non-compliant", "under review"],
      default: "non-compliant",
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Model creation
export const Compliance = model("Compliance", complianceSchema);
