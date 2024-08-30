import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    regulatory_id: {
        type: Schema.Types.ObjectId,
        auto: true, // Automatically generates a unique ID
      },
  
    name:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true

    },
    License_approval:{
        type:string,
      
    }
   },
  {
    timestamps: true,
  }
);



export const Regulatory =  model("Regulatory", schema);