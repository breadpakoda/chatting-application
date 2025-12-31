const express=require("express");
const mysql=require("mysql2");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"chatting_application"
})

app.listen(8081,()=>{
    console.log("Listning....");
})

app.post('/login',(req, res)=>{
    const sql="SELECT * FROM admin where email=? and password=?";
    
    db.query(sql,[req.body.email, req.body.password],(err,data)=>{
        if(err) return  res.json("Error");
        if(data.length>0){
            return res.json("Login successfully")
        }
        else{
            return res.json("No record")
        }
    })
})

