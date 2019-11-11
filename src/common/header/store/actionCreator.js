import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST} from './actionTypes'
import { acquireHeaderList } from '../../../api/'
import { fromJS } from 'immutable'

export const createSearchFocusAction = () => ({
  type: SEARCH_FOCUS
})

export const createSearchBlurAction = () => ({
  type: SEARCH_BLUR
})

const createListAction = (list) => ({
  type: CHANGE_LIST,
  value: fromJS(list)
})

export const getHeaderList = () => {
  return (dispatch) => {
    acquireHeaderList().then(res => {
      dispatch(createListAction(res.data))
    }).catch(error => {
      console.log(error)
    })
  }
}
