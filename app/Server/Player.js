class Player{
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
    
}
Player.counter=0;
Player.list={};
module.exports=Player;