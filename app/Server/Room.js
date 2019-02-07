const RoomContainer= require("./RoomContainer.js")
class Room extends RoomContainer{

    /**
     * calls RoomContainer's constructor which sets the max num of people in a room
     */
    constructor() {
        super(); //max num of players in a game
    }

    /**
     * called when rooms are full. Creates a new room and adds player. Also updates
     * player's roomId var 
     */
    static createNewRoomAndAdd(player) {
        //console.log("inside createNewRoomandadd");
        
        
        Room.list[Room.counter] = [];
        Room.list[Room.counter].push(player);
        player.setRoomId(Room.counter)
        
    }
    
    /**
     * adds a player to a room based on following rules
     * 1. Max num of players in a room: this.max -> currently 2
     * 2. Room "index" auto increments
     * 3. format of Room.list: { 0:[ {PLAYEROBJ}, {PLAYEROBJ} ], 1:[ {PLAYEROBJ},{PLAYEROBJ} ] }
     */
    addPlayerToRoom(Player) {
        var max = this.max
        //console.log("Player id:" + " " + Player.id);
        //console.log(max);
        
        var exception = {};
        try {
            //console.log("try");
            
            Object.keys(Room.list).forEach(function (key) {
                //console.log("inside object loop  " + Object.keys(Room.list[key]).length);
               
                
                if (Object.keys(Room.list[key]).length != max) {
                    Room.list[key].push(Player);
                    Player.setRoomId(parseInt(key))
                    ////console.log("in looped. added person" + Object.keys(Room.list[key]).length);
                    
                    //if after adding the person there are 2 players in the room, then inc room counter
                    if (Object.keys(Room.list[key]).length ==max){
                        Room.counter++;
                    }
                    
                    throw exception;
                }

                
            });
           // //console.log("after obj loop");
            
            Room.createNewRoomAndAdd(Player);
        } catch (e) {

        }


    }

    static onDisconnect(playerId){
        Object.keys(Room.list).forEach(function (key) {
            const util2 = require('util'),
                obj2 = Room.list[key];
            console.log("kljknhj" + util2.inspect(obj2, { depth: null }) );
            
            Object.keys(Room.list[key]).forEach((key2) => {
                
                //console.log(Object.keys(Room.list[key][key2]).length)
                if (Room.list[key][key2].id == playerId) {
                    delete Room.list[key][key2];
                    // console.log(Room.list[key][key2])
                }
                //console.log(Room.list[key][key2].name)
                Room.list[key]=Room.list[key].filter(function (e) { return e === 0 || e });
            });
        })
        //Room.list.filter(function (e) { return e === 0 || e });
        console.log("rl: " + Room.list);
    }
    
    
}
Room.list = {};
Room.counter = 1;
module.exports = Room