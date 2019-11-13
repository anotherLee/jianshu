import {acquireArticleList, acquireMoreArticle, acquireAuthor} from "../../../api"
import {CHANGE_ARTICLE_LIST, ADD_MORE_ARTICLE, CHANGE_AUTHOR_LIST} from './actionTypes'
import {fromJS} from "immutable"

const createChangeListAction = (value) => ({
  type: CHANGE_ARTICLE_LIST,
  value: fromJS(value)
})

const createAddListAction = (value) => ({
  type: ADD_MORE_ARTICLE,
  value: fromJS(value)
})

const createChangeAuthorAction = (value) => ({
  type: CHANGE_AUTHOR_LIST,
  value: fromJS(value)
})

export const createGetListAction = () => {
  return (dispatch) => {
    acquireArticleList().then(res => {
      dispatch(createChangeListAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const createReadMoreAction = () => {
  return (dispatch) => {
    acquireMoreArticle().then(res => {
      console.log(res.data)
      dispatch(createAddListAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const createGetAuthorAction = () => {
  return (dispatch) => {
    acquireAuthor().then(res => {
      dispatch(createChangeAuthorAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}
