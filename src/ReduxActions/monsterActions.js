import { KILL_MONSTER, REMOVE_MONSTER, REVIVE_MONSTER, COPY_MONSTER } from './types';

// NO FETCH REQUEST BEING MADE FOR LOCAL MACHINE
//fetch(url)
//    .then(res => res.json())
//    .then(res => dispatch({
//        type: ...
//        X: res
//    }))
    

export const killMonster = () => dispatch({
    type: KILL_MONSTER,
    life: false

})

export const reviveMonster = () => dispatch({
    type: REVIVE_MONSTER,
    life: true

})
    
export const copyMonster = () => dispatch({
    type: KILL_MONSTER,
    life: false

})