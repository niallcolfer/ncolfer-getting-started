var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.post('/', function(req, res) {
	// Example req.body:
	// {
	// token: 'i0FRbfqZqHCJcG3g9OfUL7hf',
	// team_id: 'T04A3HTAQ',
	// team_domain: 'oxegen',
	// channel_id: 'D1KGYH5GV',
	// channel_name: 'directmessage',
	// user_id: 'U04A5D86G',
	// user_name: 'niall',
	// command: '/ping',
	// text: 'hello there',
	// response_url: 'https://hooks.slack.com/commands/T04A3HTAQ/120695578774/jHln0XCIbPbJpLqCOCF0nKbm'
	// }

	if (req.body.token != "i0FRbfqZqHCJcG3g9OfUL7hf") {
		res.status(401).send("Sorry, you don't have permission to use this command");
	}

	res.send('message received');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
