var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 3000));

app.post('/', function(req, res) {
	// Example req.body:
	// {
	// token: 'SLACK_TOKEN',
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

	if (req.body.token != process.env.SLACK_TOKEN) {
		res.status(401).send("Sorry, you don't have permission to use this command");
	} else {
		console.log("Req.body: ", req.body);
		var txt = req.body.text,
			nominee,
			reason;
		
		nominee = txt.substr(0, txt.indexOf(' '));
		reason = txt.substr(txt.indexOf(' ') + 1);
		
		console.log('Nominee is ', nominee);
		console.log('Reason is ', reason);
		res.send('message received');
	}
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
