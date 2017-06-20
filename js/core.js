//FILES
var tmi = require('tmi.js');
////
var users = ['KhonsuBot','vvarrenstudios'];//sleezysaleem','eoxyod1','TotallyCaitlyn',
module.exports.users=users;

var options = {
  options: {
    debug:true
  },
  connection: {
    cluster: "aws",
    reconnect:true
  },
  identity :{
    username:"KhonsuBot",
    password: "oauth:1tydm72yvcrii8rdjzspqk5e6zmkj1"
  },
  channels:users
};

//////////////////////////////////////
////ExporT CONNECTON//////////////////
var client= new tmi.client(options);//
module.exports.client = client;///////
//////////////////////////////////////
//////////////////////////////////////
