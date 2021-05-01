import mongoose from mongoose
const reviewsSchema= mongoose.Schema({
    name:{type:"string",required:true},
    rating:{type:Number,required:true},
    comment:{type:String,required:true}
},{timestamps:true})
const productSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    reviews:[reviewsSchema],
    rating:{
        type:SNumber,
        required: true,
        default:0,
    },
    numReviews:{
        type:Number,
        required: true,
        default:0,S
    },
    price:{
        type:Number,
        required: true,
        default:0,S
    },
    countInStock:{
        type:Number,
        required: true,
        default:0,S
    },

},{
    timestamps:true
})

const Product= mongoose.models('Product',productSchema)
export default Product