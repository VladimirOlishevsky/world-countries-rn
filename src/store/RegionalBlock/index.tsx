// import { makeObservable, observable, runInAction } from "mobx"
// import { ICountry } from "../Country"

// class RegionalBlocks {
//     countries = []
//     errorMessage = ''

//     constructor() {
//         makeObservable(this, {
//             countries: observable
//         })
//     }

//     async fetchRegionalBlocks(props: string) {

//         this.errorMessage = ''
//         try {
//             const response = await fetch(props)
//             const data = await response.json();
//             runInAction(() => {
//                 if (data.message) {
//                     this.errorMessage = data.message
//                     return
//                 }
//                 this.regionalBlockAdapter(data)
//                 // this.param = false
//             });
//         } catch (error) {
//             runInAction(() => {
//                 console.log(error)
//             })
//         }
//     }

//     regionalBlockAdapter(data: ICountry[]) {
//         data.map(el => {
//             const regionalCountry = new CountryStore()
//             regionalCountry.fromApi(el)
//             return regionalCountry
//         })
//     }
// }