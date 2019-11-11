import { headerUrl } from "./url"
import axios from 'axios'

export const acquireHeaderList = () => {
  return axios({
    url: headerUrl.headerListUrl,
    method: 'get'
  })
}
