import React from 'react';
import { useSearchParams } from 'react-router';
 
 function KakaoRedirect() {

    const [searchParms] = useSearchParams()
    //code = afsafsdvef
    const authCode = searchParms.get('code')

    if(!authCode){
        return (<div>로그인 실패패</div>)
    }

     return (
         <div>
             <div>이 페이지는 카카오에서 호출해 주는 페이지 입니다</div>
             <div>{authCode}</div>
         </div>
     );
 }
 
 export default KakaoRedirect;