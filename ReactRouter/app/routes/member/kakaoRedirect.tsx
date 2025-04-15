import { log } from 'console';
import React, { useEffect } from 'react';
import { data, useSearchParams } from 'react-router';
import { getAccessToken } from '~/api/kakaoAPI';
 
 function KakaoRedirect() {

    const [searchParms] = useSearchParams()
    //code = afsafsdvef
    const authCode = searchParms.get('code')

    useEffect(()=>{

        if(authCode){
            getAccessToken(authCode).then((data) => {
                console.log(data)
            });
        }
    },[authCode])


    if(!authCode){
        return (<div>로그인 실패</div>)
    }

     return (
         <div>
             <div>이 페이지는 카카오에서 호출해 주는 페이지 입니다</div>
             <div>{authCode}</div>
         </div>
     );
 }
 
 export default KakaoRedirect;