const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.end("Welcome to my home page");}
    else if(req.url==='/about'){
    res.end("Welcome to my about page");    
    }
    else{
    res.end(`
    <h2>OOPS!</h2>
    <p>We can't seem to find the page you are looking for</p>`);}

});
server.listen(5000);