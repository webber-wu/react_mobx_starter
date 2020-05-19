import { observable, action, computed, autorun } from 'mobx';

class UIStore {
    @observable menuOpen = false;
    @observable name = 'None';


    constructor() {
        autorun(() => {
            console.log(`Name: ${this.name}`)
        })

        this.name = "AutoRun"
    }
    // @computed get computeFunction() {
    //     return xxxxx;
    // }



    @action.bound toggleMenu() {
        this.menuOpen = !this.menuOpen
    }

}

export default UIStore