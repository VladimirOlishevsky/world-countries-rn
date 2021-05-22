import { action, makeAutoObservable } from 'mobx';
import { IRegionName } from 'store/types';

export class Region {

    Name = ''
    FlagPng = ''
    Alpha2Code = ''

    constructor(data: IRegionName) {
        makeAutoObservable(this, {
            fromapi: action,
        });
        data && this.fromapi(data)
    }

    fromapi(data: IRegionName) {
        this.Name = data.Name;
        this.FlagPng = data.FlagPng;
        this.Alpha2Code = data.Alpha2Code
    }

}
