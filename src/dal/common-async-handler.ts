import {actions as appActions, RequestStatus} from '../redux/app-reducer'
import {ResponseType, ResultCodesEnum} from '../redux/types'

export const withTryCatch = (operation: any, dispatch: any) => async () => {
    try {
        return await operation()
    } catch (error) {
        dispatch(appActions.setErrorMessage(error.message))
        dispatch(appActions.setRequestStatus(RequestStatus.Error));
    }
    return null
}
export const withHandlingErrorResultCode = function <T>(operation: any, dispatch: any) {
    return async () => {
        let result: ResponseType<T> = await operation()
        if (result && result.resultCode && result.resultCode === ResultCodesEnum.Error && result.message) {
            dispatch(appActions.setErrorMessage(result.message))
            dispatch(appActions.setRequestStatus(RequestStatus.Error));
        }
    }
}
export const withProcessVisualization = function (operation: any, dispatch: any) {
    return async () => {
        dispatch(appActions.setRequestStatus(RequestStatus.Loading))
        await operation()
        dispatch(appActions.setRequestStatus(RequestStatus.Success))
    }
}

export const commonAsyncHandler = function (operation: any, dispatch: any, customDispatch?: any) {
    let handledErrorResultCode = withHandlingErrorResultCode(operation, dispatch)
    let tryCatch = withTryCatch(handledErrorResultCode, dispatch);
    let visualized = withProcessVisualization(tryCatch, dispatch)
    return visualized()
}
