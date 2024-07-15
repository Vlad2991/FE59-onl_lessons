import { IResetState } from "./types";

export const RESET_SUCCESS = "RESET_SUCCESS";
export const RESET_FAILED = "RESET_FAILED";
export const defaultState: IResetState = {
    isReset: false,
    errors: null,
};

