import { KILL_MONSTER, REMOVE_MONSTER, REVIVE_MONSTER, COPY_MONSTER } from '../ReduxActions/types';

const initialState = {
    monster: [],
    copy: {},
    life: boolean
};

export default function(state = initialState, action) {
    switch (action.type) {
        case KILL_MONSTER:

            return {
                ...state,
                life: action.life
            }
        case REVIVE_MONSTER:
            return {
                ...state,
                life: action.life
            }
        case REMOVE_MONSTER:

            break
        case COPY_MONSTER:

            break
        default :
            return state
    }
}