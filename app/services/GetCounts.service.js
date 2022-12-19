const con = require('../models/db');

exports.testTakerToday = function(code,date_of_exam,next){
  console.log("in service............");
  var sqlQuery = `SELECT COUNT(tkt.wheeboxID) AS count FROM test_score_logiin AS tsl INNER JOIN te_key_test AS tkt ON tsl.wheeboxID = tkt.wheeboxID WHERE tkt.date_of_exam LIKE '%${date_of_exam}%' AND tsl.code = '${code}'`;
  con.query(sqlQuery,function(error,result){
    
    if(error){
       next(err,null);
    }else{
      next(null,result);
    }
  });
}

exports.testTakerBetweenTwoDates = function(code,start_date,end_date,next){

  var sqlQuery = `SELECT COUNT(tkt.wheeboxID) AS count FROM test_score_logiin AS tsl INNER JOIN te_key_test AS tkt`;
  sqlQuery = sqlQuery+` ON tsl.wheeboxID = tkt.wheeboxID WHERE tkt.date_of_exam BETWEEN '${start_date}' AND '${end_date}' AND tsl.code = '${code}'`;
  con.query(sqlQuery,function(error,result){
    
    if(error){
       next(err,null);
    }else{
      next(null,result);
    }
  });
}
