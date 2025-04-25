"use server"

import { cookies } from "next/headers"
import {createJWT} from "@/app/util/jwtUtil";

export async function loginServerAction() {

    console.log("loginServerAction");

    //API 서버를 이용해서 사용자 정보를 조회

    //JWT 문자열을 생성
    const accessToken = await createJWT({mid:'user00'},"5m")
    const refreshToken = await createJWT({mid:'user00'},"7d")

    console.log("-------------------------")
    console.log(accessToken)
    console.log(refreshToken)

    const cookieObj = await cookies()

    cookieObj.set("access-token", accessToken, {
        path: "/",
        maxAge: 60 * 60, // 1시간
    });

    cookieObj.set("refresh-token", refreshToken, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7 //7days
    });

    cookieObj.set("mid", "user00", {
        path: "/",
        maxAge: 60 * 60 * 24 * 7 //7days
    });

    await new Promise(resolve => setTimeout(resolve, 2000));


    return {mid:'user00', accessToken: accessToken, refreshToken:refreshToken};
}