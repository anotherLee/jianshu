import {JUDGE_REGISTER_LOGIN} from './actionTypes'
import {fromJS} from 'immutable'

export const createJudgeRegisterLoginAction = (value) => {
  return {
    type: JUDGE_REGISTER_LOGIN,
    value: fromJS(value)
  }
}
