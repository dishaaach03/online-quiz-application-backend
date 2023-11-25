const express=require("express");
const mongoose=require("mongoose");
const quizappSchema=require("../model/quizappSchema");
const quiz=express.Router();
quiz.get("/",(req,res)=>{
    quizappSchema.find((err,data)=>{
    if(err)
        return err;
    else 
        res.json(data);
})
})
quiz.post("/create-quiz",(req,res)=>{
    quizappSchema.create(req.body,(err,data)=>{
    if(err)
        return err;
    else
       res.json(data);
    })
});
quiz.route("/edit-quiz/:id")
.get((req,res)=>{
    quizappSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
    if(err)
        return err;
    else
        res.json(data);
    })
})
.put((req,res)=>{
    quizappSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},(err,data)=>{
    if(err)
        return err;
    else
        res.json(data);
    })
});
quiz.delete("/delete-quiz/:id",(req,res)=>{
    quizappSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
    if(err)
        return err;
    else
        res.json(data);
    })
})
module.exports=quiz;