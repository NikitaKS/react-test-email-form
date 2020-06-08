import {AppStateType, InferActionsTypes} from "./store";
import {ThunkAction} from "redux-thunk";
import {commonAsyncHandler} from "../dal/common-async-handler";
import {emailAPI} from "../dal/api";
import {MailFormData} from "../components/email-form/emailForm";

export enum RequestStatus {
    NotInit = 0,
    Loading = 1,
    Error = 2,
    Success = 3
}

export enum OperationStatus {
    Closed = 0,
    InProgress = 1
}

const initState = {
    isInitialized: false,
    requestStatus: RequestStatus.NotInit,
    errorMessage: '',
    popUpStatus: OperationStatus.Closed
};

type StateType = typeof initState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

const AppReducer = (state = initState, action: ActionsTypes): StateType => {
    switch (action.type) {
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
        case "APP_REDUCER/SET_POPUP_STATUS":
            return {...state, popUpStatus: action.status}

        default:
            return state
    }
}

export const actions = {
    setRequestStatus: (status: RequestStatus) => ({type: 'APP_REDUCER/SET_REQUEST_STATUS', status}) as const,
    setErrorMessage: (errorMessage: string) => ({type: 'APP_REDUCER/SET_ERROR_MESSAGE', errorMessage}) as const,
    setPopUpStatus: (status: OperationStatus) => ({
        type: 'APP_REDUCER/SET_POPUP_STATUS',
        status
    }) as const,
}


export const sendMail = (formData: MailFormData): ThunkActionType => async (dispatch, getState) => {
    await commonAsyncHandler(async () => {
        const response = await emailAPI.sendMail(formData)
        dispatch(actions.setPopUpStatus(OperationStatus.InProgress))
        return response
    }, dispatch);
}

export default AppReducer
