const express = require('express');
const app = express();
const fs = require('fs');

app.get('/websites', (req, res) => {
  fs.readFile('websites.json', 'utf8', (err, data) => {
  	if (err) {
  		res.status(500).json("there was an error")
  	} else {
  	  	const objdata = JSON.parse(data);
  		res.send(objdata);
  	}
  })
});

app.listen(3000, () => {
	console.log("running on port 3000")
})