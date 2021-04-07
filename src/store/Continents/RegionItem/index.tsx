import { observable, makeObservable, action, runInAction } from 'mobx';
import { IRegionName } from '../index';

export class RegionName {

    Name = ''
    FlagPng = ''
    Alpha2Code = ''

    constructor() {
        makeObservable(this, {
            Name: observable,
            FlagPng: observable,
            Alpha2Code: observable,
            setCountry: action,
        });
    }

    setCountry(data: IRegionName) {
        this.Name = data.Name;
        this.FlagPng = data.FlagPng;
        this.Alpha2Code = data.Alpha2Code
    }

}
