import { observable, action, computed, runInAction } from 'mobx'

class Store {

    @observable countriesInfo = ''

    @action async fetchCountries(props) {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${props}?fullText=true`)
        const data = await response.json()
        //console.log(data)

        runInAction(() => {
            this.countriesInfo = data[0].name
        })
    }

    @action clearItem() {
        runInAction(() => {
            this.countriesInfo = ''
        })
    }
    @computed get commentsCount(){
        return this.countriesInfo;
    }
}


const storeInstance = new Store()

export default storeInstance 