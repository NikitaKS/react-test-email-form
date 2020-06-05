export type ResponseType<T> = {
    resultCode: ResultCodesEnum
    message: string
    accessToken: string
    data: T

}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
