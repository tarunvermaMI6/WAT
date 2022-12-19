const e = require('express');
const countServ = require('../services/GetCounts.service');

exports.home = (req,res)=>{

    res.json({message:"Welcome to WAT"});
}

exports.getTestTakerToday = (req,res)=>{
   
    const {code,date_of_exam} = req.query;
    var errMsg;
    
    if(!code){
       errMsg = "code is empty, "   
     }
     if(!date_of_exam){
        errMsg = errMsg + "date_of_exam is empty"   
      }
    if(errMsg){

        return res.json({"error":errMsg});
      }
    countServ.testTakerToday(code,date_of_exam,function(err,data){
         if(err){
            res.json({"message":"some error occured"});  
         }else{
            if(data.length>0){
               // data = data[0].count;
                res.json(data);    
            }else{
                res.json({"message":"not data found"});
            }
            
         }
     });
 }

 exports.testTakerBetweenTwoDates = (req,res)=>{

    const {code,startDate,endDate} = req.query;
    var errMsg;
    
    if(!code){
       errMsg = "code is empty, "   
     }
     if(!startDate){
        errMsg = errMsg + "startDate is empty, "   
      }
      if(!endDate){
        errMsg = errMsg + "endDate is empty"   
      }
    if(errMsg){

        return res.json({"error":errMsg});
      }
    countServ.testTakerBetweenTwoDates(code,startDate,endDate,(err,data)=>{
            if(err){
             res.json({"error":"some error occurred, please try again"});
            }else{
             if(data.length>0){
                res.json(data);
             }else{
                res.json({"message":"no data found"});
             }
            }
    });
 }