import { fromJS } from 'immutable'
import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST} from './actionTypes'

const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if (action.type === CHANGE_LIST) {
    return state.set('list', action.value)
  }
  return state
}
