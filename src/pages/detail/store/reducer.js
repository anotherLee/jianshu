import {fromJS} from 'immutable'
import {CHANGE_ARTICLE} from "./actionTypes"

const defaultState = fromJS({
  article: {}
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_ARTICLE:
      return state.set('article', action.value)
    default:
      return state
  }
}
