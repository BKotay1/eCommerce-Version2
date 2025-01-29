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
    database:  process.env.DB_NAME,
    port: process.env.DB_PORT
})

app.get('/', (req, res) => {
    const sql = "Select * FROM products";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/productinfo', (req, res)=>{
    const sql = "Select * FROM products";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})


app.listen(3000, ()=>{
    console.log("listening")
})