import { observable, makeObservable, action, runInAction } from 'mobx';
import { ICurrencies } from './../index';

export class Currencies {

    name = ''
    symbol = ''

    constructor() {
        makeObservable(this, {
            name: observable,
            symbol: observable,
            setCurrencies: action,
        });
    }

    setCurrencies(data: ICurrencies) {
        this.name = data.name;
        this.symbol = data.symbol;
    }
}
