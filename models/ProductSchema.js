import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    prices:{
        type:[Number],
        required:true,
    },
    extraOptions:{
       type:[{
        text:String,
        price:Number
       }],
       default:undefined
    }
},{timestamps:true})

export default mongoose.models.Product || mongoose.model("Product",ProductSchema);