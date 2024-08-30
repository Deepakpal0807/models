import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    shipment_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },

    batchId:{
        type:Schema.Types.ObjectId,
        ref:"batch"
    },
    distributorId:{
        type:Schema.Types.ObjectId,
        ref:"manufacturer"
    },
    warehouseid:{
      type:Schema.Types.ObjectId,
      ref:"warehouse"
    },
    shipment_date:{
      type:Date,
      default:Date.now()
    },
    delivery_date:{
      type:Date,
    },
    shipment_status: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending",
    }
   }
);



export const shipment =  model("shipment", schema);