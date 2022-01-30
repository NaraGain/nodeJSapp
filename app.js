const http = require("http")

const server = http.createServer(function(req,res){
res.write("<h2>Hello world</h2>")
res.end()
})


server.listen(8001,console.log("listening port 8081"))
