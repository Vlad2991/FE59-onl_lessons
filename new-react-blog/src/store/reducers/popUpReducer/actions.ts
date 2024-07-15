import { CLOSE_POPUP, OPEN_POPUP } from "./constants";
import { IPopupAction } from "./types";

export const popUpOpenAction = (image: string): IPopupAction => {
    return {
        type: OPEN_POPUP,
        image: image
    };
};

export const popUpCloseAction = (): IPopupAction => {
    return {
        type: CLOSE_POPUP,
    };
};