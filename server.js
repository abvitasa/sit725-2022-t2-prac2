const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/js'));
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.port || 3000;

app.get('/', function (req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

app.post('/answer', (req, res) => {
  let equation = req.body.equation;
  let answer = eval(equation);

  res.write(`<h1>The answer is ${answer}</h1>`);
  res.send();
});

app.listen(port, () => {
  console.log('App running at http://localhost:' + port);
  console.log('Type Ctrl+C to shutdown the web server');
});
