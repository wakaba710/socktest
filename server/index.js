var counter =0

var server = require('ws').Server;
var s = new server({port:5001});

s.on('connection',function(ws){

    ws.on('message',function(message){
        console.log("Received: "+message);
        counter =counter +1;
        if (message =="reset"){
            console.log("reset yana");
            counter =0
        }

        s.clients.forEach(function(client){
            client.send(message+' : '+new Date());
            client.send(counter);
        });
    });

    ws.on('close',function(){
        console.log('I lost a client');
    });

});