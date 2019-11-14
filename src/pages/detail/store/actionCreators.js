import {CHANGE_ARTICLE} from './actionTypes'
import {acquireArticle} from "../../../api"
import {fromJS} from "immutable"

const createChangeArticleAction = (value) => ({
  type: CHANGE_ARTICLE,
  value: fromJS(value)
})

export const createGetArticleAction = (id) => {
  return (dispatch) => {
    acquireArticle().then(res => {
      const data = res.data.find(item => id === item.articleId)
      dispatch(createChangeArticleAction(data))
    }).catch(err => {
      console.log(err)
    })
  }
}
