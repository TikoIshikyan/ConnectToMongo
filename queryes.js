
var creCon=require('./createConect');

var mySchema=creCon.Schema;

var nameSchema=new mySchema({
    name: String,
    sname: String
});

var myModel = creCon.model('names',nameSchema);

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

