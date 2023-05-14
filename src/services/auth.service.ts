import axios from "../config/axios"

import { LoginData, MarkerType, RefreshToken, SignInData } from "./types"

export const loginRequest = async (loginData: LoginData): Promise<any> => {
    return axios.post("api/v1/auth/sign-in", { ...loginData })
}
export const logOutRequest = async (): Promise<any> => {
    return axios.post("api/v1/auth/sign-out", {})
}

export const SignUpRequest = async (signInData: SignInData): Promise<any> => {
    return axios.post("api/v1/auth/sign-up", { ...signInData })
}

export const SignInByRefreshTocenRequest = async (refreshToken: RefreshToken): Promise<any> => {
    return axios.post("api/v1/auth/sign-in-by-refresh-token", { ...refreshToken })
}
export const SendAdressesRequest = async (AddressesList: MarkerType[], userId: string): Promise<any> => {
    return axios.post("api/v1/google-map/addresses", {
        addresses: [...AddressesList],
        userId: userId
    })
}
export const GetAdressesRequest = async (userId: string): Promise<any> => {
    return axios.post("api/v1/google-map/get-addresses", {
        userId: userId
    })
}
