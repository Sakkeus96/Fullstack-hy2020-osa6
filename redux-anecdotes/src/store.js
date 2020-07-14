import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducerAnecdote from './reducers/anecdoteReducer'
import reducerNotification from './reducers/notificationReducer'
import reducerFilter from './reducers/filterReducer'

const reducer = combineReducers({
    anecdotes: reducerAnecdote,
    notification: reducerNotification,
    filter: reducerFilter
})

const Store = createStore(reducer, composeWithDevTools())

export default Store