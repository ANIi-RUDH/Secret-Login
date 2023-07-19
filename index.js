const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html")
  
  });
   
app.post("/check",(req,res)=>{
  let decide=req.body["password"];
  if (decide==="RProgrammingR"){
    res.sendFile(__dirname+"/public/secret.html");
  }
  else
  {
    res.sendFile(__dirname+"/public/index.html");
  }
})




app.listen(port,()=>{
  console.log(`Server Is Hot & Live at port: ${port}`);
});