import {fromJS} from 'immutable'
import {JUDGE_REGISTER_LOGIN} from './actionTypes'

const defaultState = fromJS({
  registerOrLogin: 'login'
})

export default (state = defaultState, action) => {
  if (action.type === JUDGE_REGISTER_LOGIN) {
    return state.set('registerOrLogin', action.value)
  }
  return state
}
