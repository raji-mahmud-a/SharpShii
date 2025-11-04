import http from "node:http"
import controller from "./controller.js"
http.createServer(controller).listen(23916, ()=>{
  console.log("server started on port 23916")
})
