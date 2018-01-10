import {CLICK_IMG} from 'actions/home';



const initState = {
    text:0
};



export default function reducer(state = initState, action) {
    switch (action.type) {
        case CLICK_IMG:
            return {
                text:++state.text
            };
        default:
            return state
    }
}