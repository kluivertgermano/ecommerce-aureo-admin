import {SessionCookie} from '../../config'

const saveCookie = function(cname:string = SessionCookie.CLIENT, cvalue:string, exdays:number){
    
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    const cvalueNew = btoa(JSON.stringify(cvalue))
    document.cookie = cname + "=" + cvalueNew + ";" + expires + ";path=/";


}

export default saveCookie;