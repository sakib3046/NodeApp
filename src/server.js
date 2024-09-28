import http from "http";
import url from "url";
import fs from 'node:fs/promises';
import path from "path"
const PORT =process.env.PORT;
const __filename =url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer( async(req,res)=>{
// res.write("Hello this is test server");
// res.end();

// res.setHeader("Content-Type","text/html")
// res.setHeader('Cookie', ['type=ninja', 'language=javascript']);
// res.end("<h1>This is Test Server</h1>")

// res.writeHead(200, {"Content-Type":"application/json" })
// res.end(JSON.stringify( {msg : 'Server error msg'}))

try {
    if (req.method === 'GET') {
        let filepath;
        console.log("Get Request connected to server");
        if (req.url==='/') {
            filepath = path.join(__dirname, "index.html");
            // res.setHeader("Content-Type","text/html")  
        }
        else if (req.url==='/about') {
            filepath = path.join(__dirname, "about.html");
            // res.setHeader("Content-Type","text/html")  
            // res.end("<h1> About</h1>")     
        } else {
            throw new Error("Page Not Found");
        //    res.writeHead(404, {"Content-Type":"text/plain"}); 
        //    res.end("Server Not Found");
        }
        const data= await fs.readFile(filepath);
        res.write(data);
        res.setHeader("Content-Type","text/html");
        res.end();
    }
    
} catch (error) {
    
}


});

server.listen(PORT,()=>{
console.log(`Server is running in Port: ${PORT}`);
});