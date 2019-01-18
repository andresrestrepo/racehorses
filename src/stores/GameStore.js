import { observable, computed, action, decorate } from 'mobx';

class GameStore {

   positions = []

   addPosition(name){
       this.positions.push(name)
   }
}

decorate(GameStore, {
    positions: observable,
    addPosition: action
})

const gameStore = new GameStore();
export default gameStore;