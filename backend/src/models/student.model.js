import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// Define student schema
const studentSchema = new mongoose.Schema({

    Email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        index:true,
    },

    Firstname:{
        type:String,
        required:true,
        trim:true,
        
    },

    Lastname:{
        type:String,
        required:true,
        trim:true,
    },

    Password:{
        type:String,
        required: true,
    },

    Isverified: {
        type:Boolean,
        default:false,
    },

    Isapproved:{
        type: String,
        enum: ['approved', 'rejected', 'pending', 'reupload'],
        default: 'pending',
    },

    Remarks:{
        type:String
    },
    
    Refreshtoken:{
        type:String,
    },

    Studentdetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"studentdocs"
    },
    
},
{
    timestamps:true,
}
)

studentSchema.pre("save", async function(next) {
    if(this.isModified('Firstname') || this.isNew){
        this.Firstname = this.Firstname.charAt(0).toUpperCase() + this.Firstname.slice(1).toLowerCase();
    }

    if(this.isModified('Lastname') || this.isNew){
        this.Lastname = this.Lastname.charAt(0).toUpperCase() + this.Lastname.slice(1).toLowerCase();
    }

    next()
})

studentSchema.pre("save", async function (next) {
    if(!this.isModified("Password")) return next(); 
      this.Password = await bcrypt.hash(this.Password, 10)
    next()
})

studentSchema.methods.isPasswordCorrect = async function (Password){
    return await bcrypt.compare(Password, this.Password)
}

studentSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id,
        Email:this.Email,
    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}

studentSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id:this._id,
        Email:this.Email,
    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}



const studentDetailsSchema = new mongoose.Schema({
    Phone:{
        type:Number,
        required: true,
        trim:true,
        unique:true,
    },

    Address:{
        type:String,
        required:true,
    },

    Idpic:{
        type:String,
        required:true,
    },

}, {
    timestamps:true,
})



const student = mongoose.model("student",studentSchema)

const studentdocs = mongoose.model("studentdocs", studentDetailsSchema)

export {student, studentdocs}