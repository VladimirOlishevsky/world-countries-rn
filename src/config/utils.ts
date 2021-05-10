import { flagsDescription } from "./flagDescriptions"

export const getFlagDescription = (alpha2code: string) => {
    return flagsDescription.find(el => {
        return el.iso_2cc === alpha2code
    })
}
