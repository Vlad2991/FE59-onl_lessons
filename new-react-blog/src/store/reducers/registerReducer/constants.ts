import { IRegisterState } from "./types";

const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
const REGISTRATION_FAILED = "REGISTRATION_FAILED";
const ACTIVATION_FAILED = "ACTIVATION_FAILED";
const ACTIVATION_SUCCESS = "ACTIVATION_SUCCESS";
const defaultState: IRegisterState = {
    user: undefined,
    isRegistered: false,
    isActivated: false,
};

export {
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED,
    ACTIVATION_FAILED,
    ACTIVATION_SUCCESS,
    defaultState,
};