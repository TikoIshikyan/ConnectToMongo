
var creCon=require('./createConect');

var mySchema=creCon.mong.Schema;

var nameSchema=new mySchema({
    name: String,
    sname: String
});

nameSchema.methods.anun= function(){
    console.log(this.get('name'));
}

var myModel = creCon.mong.model('names',nameSchema);

console.log("for new commit");

var gago=new myModel({name:'Gago',sname:'www'});

gago.save(function(err,gago,att){
    gago.anun();

});




var x=creCon.x;
/*
myModel.find({'name':'mek@'},'name', function (err, users) {
    for (var j = 0; j < users.length; j++) {
        console.log(users[j]);
    }

});
*/

exports.find=function(conditions,output) {

    console.log(conditions+'  '+arguments.length)

    if (arguments.length == 1) {

        if (output == null) {
            console.log("output")

            myModel.find(conditions, function (err, users) {
                for (var j = 0; j < users.length; j++) {
                    console.log(users[j]);
                }

            });
        }
        else {
            myModel.find(output, function (err, users) {
                for (var j = 0; j < users.length; j++) {
                    console.log(users[j]);
                }

            });
        }
    } else {
        myModel.find(conditions, output, function (err, users) {
        for (var j = 0; j < users.length; j++) {
            console.log(users[j]);
        }

    });
  }
}

