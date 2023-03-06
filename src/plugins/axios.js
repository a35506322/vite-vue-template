/* eslint-disable no-alert */
import axios from 'axios'

axios.defaults.baseURL = 'https://8602bced-abcb-4261-883f-736d35ea0baa.mock.pstmn.io'

// 可用於集中處理 狀況
// Error Handle
const errorHandle = (status, error) => {
  switch (status) {
    case 400:
      console.error(status, error)
      alert(error.message)
      break
    default:
      console.error(status, error)
      break
  }
}

// doing something with the request
axios.interceptors.request.use(
  (request) => request,
  (config) => config
)
// doing something with the response
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error
    if (response) {
      // 成功發出請求且收到 response, 但有 error
      errorHandle(response.status, response.data)
      return Promise.reject(error)
    } else {
      // 成功發出請求但沒收到 response
      if (!window.navigator.onLine) {
        //如果是網路斷線
        alert('網路出了問題, 請重新連線')
      } else {
        // 其它問題
        alert('主機伺服器發生問題, 請連絡資訊單位')
        return Promise.reject(error)
      }
    }
  }
)

export default axios
