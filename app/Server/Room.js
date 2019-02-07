const RoomContainer= require("./RoomContainer.js")
class Room extends RoomContainer{

    constructor() {
        super(); //max num of players in a game
    }

    static getRoomList(){
        return Room.list;
    }
    static createNewRoomAndAdd(player) {
        //console.log("inside createNewRoomandadd");
        
        
        Room.list[Room.counter] = [];
        Room.list[Room.counter].push(player);
        player.setRoomId(Room.counter)
        
    }
    
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
                    Player.setRoomId(Room.counter)
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
}
Room.list = {};
Room.counter = 0;
module.exports = Room