import { combineReducers } from 'redux'; 
import user from './index_user'; 
import goals from './index_goals'; 

export default combineReducers({
    user, goals
})
