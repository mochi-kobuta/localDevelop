const express = require('express');
const mysql = require('mysql');
var moment = require("moment");
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bunbunji1',
    database: 'escape'
});


connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success!!!!!');
});




app.get('/TOP', (req, res) => {
    connection.query(
        'SELECT * FROM position_master',
        (error, results) => {
        
            //console.log(res);
            //res.render('top.ejs');
            //console.log(moment().toDate());

            //res.send(results);
            //res.json(results);
//            res.json({
//            message:"Hello,world"
//            });
        
        console.log({data: results});
            res.json( {data: results} );
        }
    );

});

app.listen(3000);
