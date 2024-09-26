import http from "http";
const PORT =process.env.PORT;

const server = http.createServer((req,res)=>{
// res.write("Hello this is test server");
// res.end();

res.setHeader("Content-Type","text/html")
res.setHeader('Cookie', ['type=ninja', 'language=javascript']);
res.end("<h1>This is Test Server</h1>")

// res.writeHead(200, {"Content-Type":"application/json" })
// res.end(JSON.stringify( {msg : 'Server error msg'}))

});

server.listen(PORT,()=>{
console.log(`Server is running in Port: ${PORT}`);
});