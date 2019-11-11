import {SEARCH_FOCUS, SEARCH_BLUR} from './actionTypes'

export const createSearchFocusAction = () => ({
  type: SEARCH_FOCUS
})

export const createSearchBlurAction = () => ({
  type: SEARCH_BLUR
})
