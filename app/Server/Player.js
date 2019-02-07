class Player{
    /**
     * Creates an Player object.
     * 
     * Sets:
     * 1. name
     * 2. id - auto increment
     * 3. roomId (-1 initially)
     * 4. pushes to Player.list
     * 5. increments Player.counter (id)
     */
    constructor(name){
        this.name=name
        this.id = Player.counter
        this.roomId = -1;
        Player.list[this.id]=this
        Player.counter++
    }

    /**
     * After player is added to room, this function gives the player obj knowledge about which room it is in
     */
    setRoomId(rmId){
        this.roomId = rmId;
       // console.log("setRmId called");        
        
    }

    /**
     * Actions for player class to take after player disconnects
     * 1. delete from Player.list
     * 
     * More disconnect actions in Room class
     */
    static onDisconnect(playerId){
        delete Player.list[playerId]
        console.log("pl: " + Player.list);
        
    }
    
}
Player.counter=0;
Player.list={};
module.exports=Player;