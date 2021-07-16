import { Region } from "..";

const mockData = {
    Name: 'England',
    FlagPng: '111',
    Alpha2Code: '22'
}

describe('Region', () => {
    it('test region store', () => {
        const region = new Region(mockData);
        expect(region.Name).toEqual(mockData.Name);
        expect(region.FlagPng).toEqual(mockData.FlagPng);
        expect(region.Alpha2Code).toEqual(mockData.Alpha2Code);
    })
})