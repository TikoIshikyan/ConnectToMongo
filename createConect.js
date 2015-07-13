
var mongoose = require('mongoose');
var dbUrl='mongodb://localhost/test';
mongoose.connect(dbUrl);

module.exports=mongoose;









/*


myModel.findOne({ 'name': 'mek@' }, 'name sname', function (err, person) {
    if (err) return handleError(err);
    console.log( person.name, person.sname);
})

var valod=new myModel({name:'Valod',sname:'yano'});

myModel.find('name sname',function (err,result){
    if (err) return handleError(err);
    //console.log(result[5]);
    for(var i= 0;i<result.length;i++){
        console.log(result[i]);
    }
})
*/

//exports.nameModel=myModel;

//valod.save(function(err){
  //  if (err) return handleError(err);
//});



//var x=5;
//module.exports.x = x;

