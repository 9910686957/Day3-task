let json = [{
    "id" : "pooja1", 
    "msg"   : "hello,how are you",
    "task" : "message",
    "mail": "rs770328@gmail.com"
},
{
    "id" : "pooja2", 
    "msg"   : "hello,how are you",
    "task" : "message ",
    "mail": "rs770328@gmail.com"
}];
//for loop
for (var i=0; i <json.length; i++) {
    console.log(json[i]);

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);
 
