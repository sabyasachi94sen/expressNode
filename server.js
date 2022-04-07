const express=require("express");

const server=express();

const middleware1=(req,res,next)=>{
    console.log("this is a middleware 1");
    next();
}



server.get("/",(req,res)=>{
   res.send("hello japan");
})

server.get("/china",middleware1,(req,res)=>{
    res.send("hello china");
 })


 

server.listen(3001)