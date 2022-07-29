var mongoose= require("mongoose")
var projectschema = mongoose.Schema(
    
        {title:
            {type: String,
            required : true}
        ,
        details:{
            type:String,
            required : true
        },
        githubresources:{
            type:String,
        }}
        
);

var P = mongoose.model("project",projectschema);
module.exports = P;