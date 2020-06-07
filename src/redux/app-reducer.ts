import {AppStateType, InferActionsTypes} from "./store";
import {ResultCodesEnum} from './types'
import {ThunkAction} from "redux-thunk";
import {commonAsyncHandler} from "../dal/common-async-handler";
import {emailAPI} from "../dal/api";
import {MailFormData} from "../components/email-form/email-form";

export enum RequestStatus {
    NotInit = 0,
    Loading = 1,
    Error = 2,
    Success = 3
}

const initState = {
    isInitialized: false,
    requestStatus: RequestStatus.NotInit,
    errorMessage: '',
};

type StateType = typeof initState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

const AppReducer = (state = initState, action: ActionsTypes): StateType => {
    switch (action.type) {
        case "APP_REDUCER/SET_IS_INIT":
            return {
                ...state,
                isInitialized: true
            }
        case "APP_REDUCER/SET_REQUEST_STATUS":
            return {
                ...state,
                requestStatus: action.status
            }
        case "APP_REDUCER/SET_ERROR_MESSAGE":
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export const actions = {
    setIsInit: () => ({type: 'APP_REDUCER/SET_IS_INIT'}) as const,
    setRequestStatus: (status: RequestStatus) => ({type: 'APP_REDUCER/SET_REQUEST_STATUS', status}) as const,
    setErrorMessage: (errorMessage: string) => ({type: 'APP_REDUCER/SET_ERROR_MESSAGE',errorMessage}) as const,
}

export const isInit = (): ThunkActionType => async (dispatch) => {
    // await dispatch(getSettings())
    // await dispatch(authMe())
}

export const sendMail = (formData:MailFormData): ThunkActionType => async (dispatch, getState) => {
    await commonAsyncHandler(async () => {
        const response = await emailAPI.sendMail(formData)

        return response
    }, dispatch);
}

export default AppReducer
