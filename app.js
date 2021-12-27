const express=require("express")
const path=require("path")

const app=express()
const port=3000

app.use("/public/",express.static(path.join(__dirname,"public")))
app.use("/node_modules/",express.static(path.join(__dirname,"node_modules")))

app.engine('html', require('express-art-template'))


app.get("/",(req,res)=>{
  res.render("index.html",{
    name:"zhangsan"
  })
})
app.listen(port,()=>{
  console.log("app listening at http://localhost:3000")
})