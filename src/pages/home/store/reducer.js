import {fromJS} from "immutable"
import {CHANGE_ARTICLE_LIST, ADD_MORE_ARTICLE, CHANGE_AUTHOR_LIST} from './actionTypes'

const defaultState = fromJS({
  articleList: [],
  authorList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ARTICLE_LIST:
      return state.set('articleList', action.value)
    case ADD_MORE_ARTICLE:
      return state.set('articleList', state.get('articleList').concat(action.value))
    case CHANGE_AUTHOR_LIST:
      return state.set('authorList', action.value)
    default:
      return state
  }
}
