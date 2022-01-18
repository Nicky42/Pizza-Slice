import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    customer:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    total:{
        type:Number,
        required:true,
    },
    status:{
        type:Number,
        default:0,
    },
    method:{
        type:Number,
        default:0,
    },
    
},{ timestamps: true })

export default mongoose.models.Product || mongoose.model("Product",ProductSchema);