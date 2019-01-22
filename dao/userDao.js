var mysql = require('mysql');
var mysqlConf = require('../congig/mysql');
var userSqlMap = require('./userSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports={
    list(callback){
        console.log('list');
        pool.query(userSqlMap.list,(err,result)=>{
            if(err) throw err;
            callback(result);
        })
    }
};