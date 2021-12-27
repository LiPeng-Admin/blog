const express=require("express")
const path=require("path")
const router=require("./router")
const bodyParser=require("body-parser")

const app=express()
const port=3000

app.use("/public/",express.static(path.join(__dirname,"public")))
app.use("/node_modules/",express.static(path.join(__dirname,"node_modules")))

app.engine('html', require('express-art-template'))

app.use(bodyParser.json())     // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))   // for parsing application/x-www-form-urlencoded

app.use(router)

app.listen(port,()=>{
  console.log("app listening at http://localhost:3000")
})