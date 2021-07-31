import { creatStore, applyMiddleware } from 'redux'
import thunk from 'react-thunk'
import rootReducer from './ReduxReducers'

const initialize = {};
const middle = [thunk];
const store = createStore(reducers, initialize, applyMiddleware(...middle));

export default Store