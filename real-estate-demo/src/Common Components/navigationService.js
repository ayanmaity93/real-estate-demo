// import React from 'react';

function NavigationTo (key, history){

    let navigationData = JSON.parse(localStorage.getItem('navData'));

    let navObj;

    for (let x in navigationData.navigation){
        if (navigationData.navigation[x].key===key){
            navObj = navigationData.navigation[x];
            break;
        }
    }

    history.push(navObj.url);
}

export default NavigationTo;