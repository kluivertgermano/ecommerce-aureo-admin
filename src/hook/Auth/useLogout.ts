import {SessionCookie} from '../../config'
import { RequestAPI } from '../../config'

const removeCookie = async function(entidade:string){

    try {
        const {data:{status, statusCode}} =  await RequestAPI.post(`/empresas/logout`,{entidade})
      
        if(status === "sucesso"){
          document.cookie = SessionCookie.ENTERPRISE+ '=; Max-Age=0'
          window.location.reload();
        }else{
          if(statusCode != 202){
            document.cookie = SessionCookie.ENTERPRISE+ '=; Max-Age=0'
          }
          window.location.reload();
        }
    } catch (error:any) {
      
          if((error?.status > 400) && (error?.status < 500)) document.cookie = SessionCookie.ENTERPRISE+ '=; Max-Age=0'

          window.location.reload();
    }  

}

export default removeCookie;