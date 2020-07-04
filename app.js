// Require objects.
var express = require('express');
var app = express();
var aws = require('aws-sdk');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Edit this with YOUR email address.
var email = 'indoorsale0@gmail.com';

// Load your AWS credentials and try to instantiate the object.
aws.config.loadFromPath(__dirname + '/config.json');

// Instantiate SES.
var ses = new aws.SES();

// Verify email addresses.
app.get('/verify', function (req, res) {
  var params = {
    EmailAddress: email,
  };

  ses.verifyEmailAddress(params, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// Listing the verified email addresses.
app.get('/list', function (req, res) {
  ses.listVerifiedEmailAddresses(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// Deleting verified email addresses.
app.get('/delete', function (req, res) {
  var params = {
    EmailAddress: email,
  };

  ses.deleteVerifiedEmailAddress(params, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// Sending RAW email including an attachment.
app.post('/sendEmail', function (req, res) {
  const data = req.body;
  var eParams = {
    Destination: {
      ToAddresses: ['indoorsale0@gmail.com'],
    },
    Message: {
      Body: {
        Html: {
          Data:
            '<table><tr><td>First Name:' +
            data.firstName +
            '</td></tr>' +
            '<tr><td>Last Name:' +
            data.lastName +
            '</td></tr>' +
            '<tr><td>Phone: ' +
            data.phone +
            '</td></tr>' +
            '<tr><td>Business Name: ' +
            data.businessName +
            '</td></tr>' +
            '<tr><td>Email: ' +
            data.email +
            '</td></tr>' +
            '<tr><td>Whatisit: ' +
            data.whatisit +
            '</td></tr>' +
            '<tr><td>Materials: ' +
            data.materials +
            '</td></tr>' +
            '<tr><td>weight: ' +
            data.weight +
            '</td></tr>' +
            '<tr><td>contaminants: ' +
            data.contaminants +
            '</td></tr>',
        },
      },
      Subject: {
        //template or environment variable
        Data: 'Scrap Request from ' + data.firstName + ' ' + data.lastName,
      },
    },
    //environment variable
    Source: 'indoorsale0@gmail.com',
  };
  
  ses.sendEmail(eParams, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// Start server.
var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('AWS SES example app listening at http://%s:%s', host, port);
});
