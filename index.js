// code your solution here
function superbowlWin(tmRec){
    let result = undefined;
    for (let item of tmRec){
        if (wonSB(item)){
            result = item.year;
            break;
        }
    }
    return result;
}

function wonSB(elem){
    return (elem.result === "W");
}