import { action, runInAction, makeAutoObservable } from 'mobx';
import { IRegionName } from 'store/types';
import { Region } from './Region/index';

export class Continents {

    countries: IRegionName[] = [];

    constructor() {
        makeAutoObservable(this, {
            workerAfterFetch: action,
            fetchRegions: action
        })
    }
    async fetchRegions(props: string) {
        this.countries = [];

        try {
            const response = await fetch(props)
            const data = await response.json();
            const adaptData = this.workerAfterFetch(data.Response)
            runInAction(() => {
                this.countries = adaptData;
            });
        } catch (error) {
            console.log(error)
        }
    }

    workerAfterFetch(data: IRegionName[]) {
      return data.map(el => new Region(el))
    }
}