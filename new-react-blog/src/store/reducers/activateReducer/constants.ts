import { IActivate } from "./types";

export const ACTIVATION_SUCCESS = "ACTIVATION_SUCCESS";
export const ACTIVATION_FAILED = "ACTIVATION_FAILED";
export const defaultState: IActivate = {
    isActivated: false,
    errors: null,
};

