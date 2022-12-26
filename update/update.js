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
router.post("/",(req,res)=>{
    let obj = req.body
    let p_id = obj.p_id
    let p_name = obj.p_name
    let p_cost = obj.p_cost
    let p_desc = obj.p_desc
    let pic = obj.pic 
    connection.query(`update products set p_name = '${p_name}', p_cost = ${p_cost}, p_desc = '${p_desc}', pic = '${pic}' where p_id = ${p_id}`,(err,result)=>{
        if(err)
            res.json({'update':'error'})
        else
            res.json({'update':'success'})
    })
})
router.post("/updateUser",(req,res)=>{
    let uname = req.body.uname
    let upwd = req.body.upwd
    connection.query(`update users set upwd ='${upwd}' where uname = '${uname}'`,(err)=>{
        if(err)
            res.json({'update':'error'})
        else
            res.json({'update':'success'})
    })
})

//export router
module.exports = router