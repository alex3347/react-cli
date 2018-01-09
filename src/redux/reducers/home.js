import {FOCUS} from 'actions/home';



const initState = {
    hasFocus:false
};



export default function reducer(state = initState, action) {
    switch (action.type) {
        case FOCUS:
            return {
                hasFocus:true
            };
        default:
            return state
    }
}