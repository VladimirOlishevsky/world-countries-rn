import { observable, action, computed, runInAction, makeAutoObservable } from 'mobx'

class Store {

    @observable countriesInfo = ''
    @observable value = ''

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

    async fetchRegions(props: string) {
        const response = await fetch(props)
        const data = await response.json();
        console.log(data)
    }

    setValueToStore(val: string) {
        this.value = val
        console.log(this.value)
    }

    @computed get commentsCount(){
        return this.countriesInfo;
    }
}


const storeInstance = new Store()

export default storeInstance 