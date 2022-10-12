const connection = require('./connection');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
let port =3000;
app.get('/employees',(req,res)=>{
    connection.query('select * from employee ',(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            //console.log(rows);
            res.send(rows);
        }
    });
})
app.get('/employees/:id',(req,res)=>{
    connection.query('select * from employee where id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            //console.log(rows);
            res.send(rows);
        }
    });
})

app.delete('/employees/:id',(req,res)=>{
    connection.query('delete from employee where id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            //console.log(rows);
            res.send(rows);
        }
    });
})

app.post('/employees',(req,res)=>{
    let emp = req.body;
    let empData = [emp.name,emp.salary];
    connection.query('insert into employee(name,salary) values(?)',[empData],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            //console.log(rows);
            res.send(rows);
        }
    });
});

app.patch('/employees',(req,res)=>{
    let emp = req.body;

    connection.query('update employee set ? where id='+emp.id,[emp],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            //console.log(rows);
            res.send(rows);
        }
    });
});

app.put('/employees',(req,res)=>{
    let emp = req.body;

    connection.query('update employee set ? where id='+emp.id,[emp],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            //console.log(rows);
            if(rows.affectedRows==0){
                let empData = [emp.name,emp.salary];
    connection.query('insert into employee(name,salary) values(?)',[empData],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            //console.log(rows);
            res.send(rows);
        }
    });
            }else{
            res.send(rows);
        }
    }
    });
});

app.listen(port,()=>{
    console.log('express server running on port '+port);
});