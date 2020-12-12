import { observable, action, computed, runInAction, makeAutoObservable } from 'mobx'

class Store {

    @observable countriesInfo = ''

    constructor() {
        // Don't need decorators now, just this call
        makeAutoObservable(this);
      }

    async fetchCountries(props: string) {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${props}?fullText=true`)
        const data = await response.json();

        runInAction(() => {
            this.countriesInfo = data[0].name
        })
    }

    @computed get commentsCount(){
        return this.countriesInfo;
    }
}


const storeInstance = new Store()

export default storeInstance 