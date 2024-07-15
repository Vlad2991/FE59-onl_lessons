import { TOGGLE_BURGER } from "./constants";
import { IBurgerAction } from "./types";

export const burgerMenuAction = (): IBurgerAction => {
    return {
        type: TOGGLE_BURGER,
    };
};