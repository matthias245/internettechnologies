var https = require('https');
const { getSystemErrorMap } = require('util');

const options = {
    path: '/195.37.242.201/json/',
    host: 'ipapi.co',
    port: 443,
    headers: { 'User-Agent': 'nodejs-ipapi-v1.02' }
};

https.get(options, function(resp){
    var body = '';
    resp.on('data', function(data){
        body += data;
    }
    );
resp.on('end', function(){
    var loc = JSON.parse(body);
    console.log(loc);
    console.log("Die IP-Adresse ist in " + loc.city + " beheimatet.")
    });
});
