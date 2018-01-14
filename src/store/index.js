import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import { createLogger } from 'redux-logger'

const middleware = applyMiddleware(thunk, createLogger())

const store = createStore(
  reducer, 
  {},
  middleware
)

export default store
