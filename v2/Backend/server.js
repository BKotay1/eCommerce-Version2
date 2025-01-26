const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(cors())

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_NAME
})

app.get('/', (req, res) => {
    return res.json("From the Backend");
})

app.get('/productinfo', (req, res)=>{
    const sql = "Select * FROM products";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})


app.listen(8081, ()=>{
    console.log("listening")
})