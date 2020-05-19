import { observable, action, computed } from 'mobx';

class UIStore {
    @observable isLogin = false;

    // @computed get computeFunction() {
    //     return xxxxx;
    // }

    @action.bound login() {
        this.isLogin = true
    }

    @action.bound logout() {
        this.isLogin = false
    }

}

export default UIStore