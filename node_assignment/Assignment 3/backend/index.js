const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('index.html','utf-8');

const myserver = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(home);
});

myserver.listen(8000, ()=> {
    console.log("Server is running");
});
