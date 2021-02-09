import { observable, makeObservable, action, runInAction } from 'mobx';
import { IRegionName } from './../index';

export class RegionName {

    Name = ''
    FlagPng = ''

    constructor() {
        makeObservable(this, {
            Name: observable,
            FlagPng: observable,
            setCountry: action,
        });
    }

    setCountry(data: IRegionName) {
        this.Name = data.Name;
        this.FlagPng = data.FlagPng
    }

}
