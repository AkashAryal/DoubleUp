const Server = use('Server')
const io = use('socket.io')(Server.getInstance())
const Player = require("../app/Server/Player.js")
const Room = require("../app/Server/Room.js");
const room = new Room()

io.on('connection', function (socket) {
    var ttt="PPP";
    const util = require('util'),
        obj=Player.list;
    const util2 = require('util'),
        obj2 = Room.list;
   // var SOCKET_LIST={};
    console.log("socket conn")
    var rl = Room.list;
    var player = new Player("akash")
   // socket.id=player.id
    //SOCKET_LIST[socket.id]=socket;
    room.addPlayerToRoom(player);
   // console.log(Player.list)
    console.log(Room.list);
    socket.emit('test');

    socket.on('disconnect', () => {
       // delete SOCKET_LIST[socket.id]
        Player.onDisconnect(player.id)
        Room.onDisconnect(player.id);
        console.log("dis "+rl);
        console.log(util.inspect(obj, { depth: null }));
        console.log(util2.inspect(obj2, { depth: null }) + "   len:" + Object.keys(obj2).length);
        //delete PLAYER_LIST[socket.id];
       // console.log("pl: " + Player.list);
        //console.log("rl: " + Room.list);
        

    });
    
})