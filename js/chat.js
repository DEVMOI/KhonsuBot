//Files
var core = require('./core.js');

//Command List
core.client.on("chat",function(channel,user,message,self){
  if (message === '!Commands' || message==='!commands') {
    core.client.action('vvarrenstudios','Commands: '+' '+'!twitter')
  }
});
function commMsg(){
  core.client.on("chat",function(channel,user,message,self){

    core.client.say('vvarrenstudios','Please make a clip of your favorite moment! out favorite will be posted in our weeklt montage.')

  }

  })
};

setInterval(commMsg,3000);
