var http = require('http')
var ur= require('url')
http.createServer(function(req,res){
    var route= req.url
    if(route==='/'){
        res.end('This is information from backend to homepage')
    }
    if(route==='/getusernames'){
        var usernames=['Kavinaya', 'Ananthi', 'jothi']
        res.end(JSON.stringify(usernames))
    }
    console.log('My node js server started')
}).listen(5000)