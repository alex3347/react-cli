export const CLICK_IMG = "header/CLICK_IMG";



function clickImgType() {
    return {type:CLICK_IMG}
}

export function clickImg() {
    return function(dispatch){
        dispatch(clickImgType())
    }
}
