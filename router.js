const express=require("express")
const router=express.Router()
router.get("/",(req,res)=>{
  res.render("index.html")

})

router.get("/login",(req,res)=>{
  res.render("login.html")

})
router.post("/login",(req,res)=>{


})
router.get("/register",(req,res)=>{
  res.render("register.html")

})
router.post("/register",(req,res)=>{
  //获取表单提交的数据
  console.log(req.body)
  //操作数据库
  //发送响应


})
module.exports=router
