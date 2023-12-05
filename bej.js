const http = require("http");
const fs= require("fs")

const PORT = 2000;
const hostname = "localhost";
const home =fs.readFileSync("./index.html","utf8");
const contact =fs.readFileSync("./index.html","utf8");
const services=fs.readFileSync("./index.html","utf8");

const server = http.createServer((req,res)=> {
    if (req.url=="/"){
       return res.end(home);
    }
    if(req.url==="/#web"){

       return res.end("<h1>ABOUT</h1>");
    }
    if(req.url==="/contact"){

        return res.end("<h1>CONTACT </h1>");
    }
    if(req.url==="/hello"){

       return res.end("<h1>Hello World </h1>");
    }
    else{
       return res.end("<h1>404 PAGE NOT FOUND</h1>");
    }
   
});

 server.listen(PORT,hostname,()=>{
    console.log(`Server is fvyegv  weferwv woring on http://${hostname}:${PORT})`);
 });