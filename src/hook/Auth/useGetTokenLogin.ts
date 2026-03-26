import {SessionCookie} from '../../config'

const getCookie = function(cname:string = SessionCookie.ENTERPRISE){

    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return JSON.parse(atob(c.substring(name.length, c.length)));
        }
    }

    return {};

}

export default getCookie;