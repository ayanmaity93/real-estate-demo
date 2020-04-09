import { useHistory } from "react-router-dom";

function navigationTo (key){
    let history = useHistory();

    let navigationData = JSON.parse(localStorage.getItem('navData'));

    let navObj;

    for (let x in navigationData.navigation){
        if (x.key==key){
            navObj = x;
            break;
        }
    }

    history.push(navObj.url);
}

export default navigationTo;