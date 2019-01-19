import { observable, computed, action, decorate } from 'mobx';

class GameStore {

   positions = []

   addPosition(name){
       this.positions.push(name)
   }

   get positionsLen(){
       return this.positions.length;
   }
}

decorate(GameStore, {
    positions: observable,
    positionsLen: computed,
    addPosition: action
})

const gameStore = new GameStore();
export default gameStore;