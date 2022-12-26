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
    let p_id = req.body.p_id
    connection.query("delete from products where p_id = "+p_id,(err)=>{
        if(err)
            res.json({'delete':'error'})
        else
            res.json({'delete':'success'})
    })
})
router.post("/deleteUser",(req,res)=>{
    let uname = req.body.uname    
    connection.query(`delete from users where uname = '${uname}'`,(err)=>{
        if(err)
            res.json({'delete':'error'})
        else
            res.json({'delete':'success'})
    })
})

//export router
module.exports = router