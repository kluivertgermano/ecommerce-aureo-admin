import {SessionCookie} from '../../config'

const saveCookie = function(cvalue:string, exdays:number, cname:string = SessionCookie.ENTERPRISE){
    
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    const cvalueNew = btoa(JSON.stringify(cvalue))
    document.cookie = cname + "=" + cvalueNew + ";" + expires + ";path=/";


}

export default saveCookie;