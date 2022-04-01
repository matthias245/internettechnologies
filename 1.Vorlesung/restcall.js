var https = require('https');

const options = {
    path: '/82.165.229.152/json/',
    host: 'ipapi.co',
    port: 443,
    headers: {'User-Agent':'nodejs-ipapi-v1.02'}
};

https.get(options, function(resp){
    var body = '';


});