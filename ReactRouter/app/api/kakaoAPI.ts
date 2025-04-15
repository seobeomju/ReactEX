

const rest_api_key:string='759e4d6749a0455ed0e7ffd6cb37989d'

const redirect_uri = 'http://localhost:5173/member/kakao'


const auth_code_path = `https://kauth.kakao.com/oauth/authorize`


export const getKakaoLoginLink = () => {


   const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`


   return kakaoURL
}
