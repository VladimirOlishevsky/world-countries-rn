import { observable, makeObservable, action, computed, runInAction, makeAutoObservable } from 'mobx';


interface IRegionName {
    name: string
}

class RegionsStore {

    countries = [];

    constructor() {
        makeObservable(this, {
            countries: observable,
        })
    }
    workerAfterFetch(data: []) {
        data.forEach(item => this.setItem(item))
    }

    setItem = (item: IRegionName) => {
        const some = new RegionName();
        some.fromApi(item);
    }

    async fetchRegions(props: string) {
        const response = await fetch(props)
        const data = await response.json();
    }

    // @computed get commentsCount(){
    //     return this.countriesInfo;
    // }
}


export class RegionName {

    name = ''

    constructor() {
        makeObservable(this, {
            name: observable,
        });
    }
    fromApi(data: IRegionName) {
        this.name = data.name;
    }

}

const storeInstance = new RegionsStore()

export default storeInstance 