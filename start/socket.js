const Server = use('Server')
const io = use('socket.io')(Server.getInstance())
const Player = require("../app/Server/Player.js")
const Room = require("../app/Server/Room.js");
var room = new Room()
io.on('connection', function (socket) {
    console.log("socket conn")
    
    var p = new Player("akash")
    room.addPlayerToRoom(p);
   // console.log(Player.list)
    console.log(Room.list);
    
})