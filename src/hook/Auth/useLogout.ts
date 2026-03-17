import {SessionCookie} from '../../config'
import { RequestAPI } from '../../config'

const removeCookie = async function(entidade:string){

    try {
        const {data:{status}} =  await RequestAPI.post(`/clientes/logout`,{numero_entidade:entidade})
      
        if(status === "sucesso"){
          document.cookie = SessionCookie.CLIENT+ '=; Max-Age=0'
          window.location.reload();
        }else{
          window.location.reload();
        }
    } catch (error) {
          window.location.reload();
    }  

}

export default removeCookie;