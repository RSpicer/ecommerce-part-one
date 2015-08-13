var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var db = mongojs('ecommerce', ['products']);

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

app.post('/api/ecommerce', function (req, res) {
	console.log("Post Hit");
	db.products.insert(req.body, function (err, result) {
			if(!err) {
				res.json(result);
			}
			else{
				
				res.status(500).json(err);
			}
	});
})
app.get('/api/ecommerce', function (req, res) {
	db.products.find(req.query, function (err, result) {
		if(!err){
			res.json(result);
		}
		else{
			res.status(500).json(err);
		}
	});
	console.log("Get Hit");
})
app.put('/api/ecommerce', function (req, res) {
	db.products.update(req.query, req.body, function (err, results) {
		if(!err){
			res.json(bird);
		}
		else{
			res.status(500).json(err);
		}
	})
	console.log("Put Hit");
	res.send();
})
app.delete('/api/ecommerce', function (req, res) {
	db.products.remove(req.query, function() {
		if(!err){
			res.json(bird);
		}
		else{
			res.status(500).json(err);
		}
	});
	console.log("Delete Hit");
})

app.listen(8888, function () {
	console.log('It always feels like...')
})