import {GET_ARTICLE} from './actionTypes'
import {acquireArticle} from "../../../api"

export const createGetArticleAction = () => {
  return (dispatch) => {
    acquireArticle().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
