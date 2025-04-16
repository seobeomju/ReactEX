import axios, {AxiosError, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig} from "axios";
import { getToken } from "~/api/memberAPI";
import {getCookie} from "~/util/cookieUtil";

const jwtAxios = axios.create()

//before request
//요청 보내기 전에 추가 작업
const beforeReq = (config: InternalAxiosRequestConfig) => {
    console.log("before request.............")

    const accessToken = getCookie("access_token");

    config.headers.Authorization = `Bearer ${accessToken}`;


    return config
}
//fail request
const requestFail = (err: AxiosError) => {
    console.log("request error............")

    return Promise.reject(err)
}

//before return response
//성공적인 응답이 왔을 때 추가 작업
const beforeRes = async (res: AxiosResponse): Promise<AxiosResponse> => {
    console.log("before return response...........")

    return res
}

//fail response
//에러 상태 코드가 전달되었을 때 추가작업
const responseFail = (err: AxiosError) => {
    console.log("response fail error.............")
    console.log(err)

    //401 unauthorized
    if (err.status === 401) {
        const msg = getErrorMsg(err)
        //msg Expired token인 경우에는 refresh 이용해서 다시한번 시도 --자동으로 조용히 slient refreshing

        if(msg == 'Expired token'){
            console.log("token expired so refreshing tokens")
            refreshTokens(err.config)
        }
    }
    return Promise.reject(err);
}

function refreshTokens(config: InternalAxiosRequestConfig|undefined){

    const accessToken = getCookie("access_token");
    const refreshToken = getCookie("refresh_token");

    //API 서버에게 토큰들을 갱신해 주세요 라고 말해 주어야 함

    //새로운 accessToken과 새로운 refreshToken을 받아야 함

    //다시 쿠기로 저장

    //다 됐으면 원래 호출하려고 했던 요청을 재시도



}


function getErrorMsg(err: AxiosError){
    const errorObj = err.response?.data as { msg?: string }

    if (errorObj?.msg) {
        const errorMsg: string = errorObj.msg
        console.log("에러 메시지:", errorMsg)
        return errorMsg
    }
}

jwtAxios.interceptors.request.use( beforeReq, requestFail )

jwtAxios.interceptors.response.use( beforeRes, responseFail)

export default jwtAxios