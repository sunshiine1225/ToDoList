
var express=require("express");
var mongoose= require("mongoose")
var Project = require("./projectModel")
var url="mongodb+srv://sunshiine_1225:password@cluster0.iv1gn.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser : true ,useUnifiedTopology:true})
.then(() => {
    console.log("DB CONNECTED");})
var app=express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extend :true}));

app.delete("/lists/:id",(req,res)=>{
  console.log("del");
  Project.findByIdAndDelete(req.params.id)
  .then(res.redirect("/"));
})
app.get("/lists", (req, res) => {
    Project.find()
    .then((data)=>res.send(data))
    .catch(err => console.log(err.message))
    

  });
  app.post("/lists",(req,res)=>
  { //console.log(req);
    const add= new Project(req.body)
    add.save().then(()=>{console.log("add done");
    res.redirect("/");})
    
  }
  )
  
  app.use( (req, res) => {
    
    res.send({message : "|  Page Not Found  |" });
    

  });

 const port=process.env.PORT || 3001;
 app.listen(port,()=>{
     console.log(`server at http://localhost:${port}`);
 })
