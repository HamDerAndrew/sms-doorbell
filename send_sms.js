// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config({path: './config/env.env'})
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);


// client.messages
//   .create({
//      body: 'Nu kigger Tina med',
//      from: '+4592453155',
//      to: '+4561672471'
//    })
//   .then(message => console.log(message.sid));
