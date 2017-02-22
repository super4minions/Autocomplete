var fs =require('fs');

var index= fs.readFileSync(__dirname+'/../frontend/index.html');

module.exports=function(req,res){

res.end(index)

}