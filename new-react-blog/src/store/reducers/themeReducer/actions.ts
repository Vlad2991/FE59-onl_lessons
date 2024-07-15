import { IBaseActionType } from "../../../tools/types";
import { DAY, NIGHT } from "./constants";

export const ThemeDayAction = (): IBaseActionType => {
    return {
        type: DAY
    };
};

export const ThemeNightAction = (): IBaseActionType => {
    return {
        type: NIGHT
    };
};