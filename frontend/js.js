var fs =require('fs');

var js= fs.readFileSync(__dirname+'/../frontend/index.js',{encoding:'utf8'});
module.exports=function(req,res){

res.writeHead(200,{
'Content-type': 'application/javascript' 	
})


res.write(js)
res.end()

}