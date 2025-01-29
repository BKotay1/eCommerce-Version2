const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(cors())

const db = mysql2.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5760050',
    password: '5lHpmwgXjL',
    name: 'sql5760050'
})

app.get('/', (req, res) => {
    return res.json("Hold");
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