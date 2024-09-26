import http from "http";
import url from "url";

const PORT =process.env.PORT;
const __filename =url.fileURLToPath(import.meta.url)


const server = http.createServer((req,res)=>{
// res.write("Hello this is test server");
// res.end();

// res.setHeader("Content-Type","text/html")
// res.setHeader('Cookie', ['type=ninja', 'language=javascript']);
// res.end("<h1>This is Test Server</h1>")

// res.writeHead(200, {"Content-Type":"application/json" })
// res.end(JSON.stringify( {msg : 'Server error msg'}))

try {
    if (req.method === 'GET') {
        console.log("Get Request connected to server");
        if (req.url==='/') {
            console.log(__filename);
            
            res.setHeader("Content-Type","text/html")  
            res.end("<h1> Home</h1>")          
        }
        if (req.url==='/about') {
            res.setHeader("Content-Type","text/html")  
            res.end("<h1> About</h1>")     
        } else {
           res.writeHead(404, {"Content-Type":"text/plain"}); 
           res.end("Server Not Found");
        }
    }
    
} catch (error) {
    
}


});

server.listen(PORT,()=>{
console.log(`Server is running in Port: ${PORT}`);
});