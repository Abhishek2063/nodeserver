//import express module
let express = require('express')
//import database connection
let conn = require("../config/db_connection")
//get connection object
let connection = conn.getConnection()
//connect to database
connection.connect()
//create router instance
let router = express.Router()
//create rest api
router.get("/",(req,res)=>{
    connection.query("select * from products",(err,recordsArray,fields)=>{
        if(err)
            res.json({'message':'error'})
        else
            res.json(recordsArray)
    })
})
router.post("/authUser",(req,res)=>{
    let uname = req.body.uname
    let upwd = req.body.upwd
    connection.query(`select * from users where uname = '${uname}' and upwd = '${upwd}'`,(err,recordsArray,fields)=>{
        if(err)
        {
            res.json({'auth':'failed'})
        }
        else
        {
            res.json({'auth':'success','user':uname})
        }
    })
})
//export router
module.exports = router