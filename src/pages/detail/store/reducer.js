import {fromJS} from 'immutable'

const defaultState = fromJS({
  article: {}
})

export default (state = defaultState, action) => {
  return state
}
