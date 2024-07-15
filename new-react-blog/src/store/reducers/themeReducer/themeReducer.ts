import { IBaseActionType } from "../../../tools/types"
import { DAY, defaultTheme, NIGHT } from "./constants"
import { ITheme } from "./types"

const themeReduser = (state: ITheme = defaultTheme, action: IBaseActionType): ITheme => {
    switch (action.type) {
        case DAY:
            return {
                color: '#313037'
            }
        case NIGHT:
            return {
                background: '#313037',
                color: '#ffffff'
            }
        default:
            return state
    }
}

export default themeReduser