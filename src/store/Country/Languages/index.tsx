import { observable, makeObservable, action, runInAction } from 'mobx';
import { ILanguages } from '../index';

export class Languages {

    name = ''
    nativeName = ''

    constructor() {
        makeObservable(this, {
            name: observable,
            nativeName: observable,
            setLanguages: action,
        });
    }

    setLanguages(data: ILanguages) {
        this.name = data.name;
        this.nativeName = data.nativeName;
    }
}
