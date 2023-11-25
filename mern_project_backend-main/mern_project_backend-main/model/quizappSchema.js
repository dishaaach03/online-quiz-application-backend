const mongoose=require("mongoose");
const optionSchema=new mongoose.Schema({
    optionText:{
        type:String,
        required:true,
    },
    isCorrect:{
        type:Boolean,
        required:true,
    },
});
const questionSchema=new mongoose.Schema({
    questionText:{
        type:String,
        required:true,
    },
    options:[optionSchema],
});
const quizSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    questions:[questionSchema],
});
const quizappSchema=mongoose.model('quizappSchema',quizSchema,'quiz');
module.exports=quizappSchema;