import { fromJS } from 'immutable'
import {SEARCH_FOCUS, SEARCH_BLUR} from './actionTypes'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}
