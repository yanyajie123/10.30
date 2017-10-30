/**
 * Created by ¿Ó—≈Ê√ on 2017/10/30.
 */
var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '666666',
    database : 'item'
});



/* GET home page. */
router.get('/list', function(req, res, next) {
    connection.query('SELECT id,name FROM baobao', function(err, rows, fields) {
        if (err) throw err;
        res.header("Access-Control-Allow-Origin","*");
        res.send(rows);
    });
});
router.post('/detail', function(req, res, next) {
    var abc=req.body.abc;
    res.header("Access-Control-Allow-Origin","*");
    connection.query('SELECT detail FROM baobao WHERE id='+abc, function(err, rows, fields) {
        res.send(rows);
    });
});
module.exports = router;