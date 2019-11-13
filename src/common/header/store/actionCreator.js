import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, LIST_CHANGE} from './actionTypes'
import { acquireHeaderList } from '../../../api/'
import { fromJS } from 'immutable'

const createListAction = (list) => ({
  type: CHANGE_LIST,
  value: fromJS(list)
})

export const createSearchFocusAction = () => ({
  type: SEARCH_FOCUS
})

export const createSearchBlurAction = () => ({
  type: SEARCH_BLUR
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

export const createMouseEnterAction = () => ({
  type: MOUSE_ENTER
})

export const createMouseLeaveAction = () => ({
  type: MOUSE_LEAVE
})

export const createListChangeAction = (value) => ({
  type: LIST_CHANGE,
  value
})
