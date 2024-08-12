import mongoose from "mongoose"

// Define course schema
const courseSchema= new  mongoose.Schema({

coursename:{
    type:String,
    require:true
},

description: {
    type: String,
    required: true
},

liveClasses: [{
    title: String,
    timing: Date, 
    link: String,
    status: {
        type: String,
        enum: ['upcoming', 'in-progress', 'completed'],
        default: 'upcoming'
      }
  }],

enrolledteacher:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "teacher",
    require:true
},

enrolledStudent: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'student' 
  }],



},{timestamps:true})

const course= mongoose.model('course',courseSchema)

export {course}