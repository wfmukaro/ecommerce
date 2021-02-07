const mongoose=require('mongoose');
const uri="mongodb://localhost:27017/ecommerce"
const connectDB=async ()=>{
    try {
        await mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true})
        console.log("Mongodb connection SUCCESS");

    } catch (error) {
        console.error("MongoDB connection FAIL")
        process.exit(1);
    }
}

module.exports=connectDB;