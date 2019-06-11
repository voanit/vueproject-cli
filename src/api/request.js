import axios from 'axios'
let axiosIns = axios.create({});
import {Message} from 'element-ui'

let HOST = process.env.HOST;
HOST = HOST === 'prod' ? 'api' : 'dev';
let baseURL = HOST === 'prod' ? 'https://' + HOST + '.xuebastudy.com':'';
//设置base请求路径
axiosIns.defaults.baseURL = baseURL

function headersCheck(tokentype) {
  let token=sessionStorage.getItem('token')
  let headers = {}
    if(tokentype=='notoken'||tokentype=='formdata'||tokentype=='notokenget'){
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    else {
        if(tokentype=='tokenformdata'){
            headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            }
        }else if(tokentype=='notokenjson'){
            headers = {
                'Content-Type': 'application/json',
            }
        }else{
            headers = {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
    }
  return headers
}

let ajaxMethod = ['get', 'post', 'put', 'delete']
let api = {}
ajaxMethod.forEach((method)=> {
  //数组取值方式
  api[method] = function (uri, data, tokentype) {
    axiosIns.defaults.headers = headersCheck(tokentype);
    axiosIns.defaults.transformRequest=[]
    if(tokentype==='notoken'){
      data=JSON.stringify(data)
    }else if(tokentype==='formdata'){
        axiosIns.defaults.transformRequest=[function (data) {
            let ret = ''
            for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }]
    }
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, data,{}).then((response)=> {
        /*根据后台数据进行处理
         *1 code===200   正常数据+错误数据     code!==200   网络异常等
         *2 code===200   正常数据     code!==200   错误数据+网络异常等
         * 这里使用的是第一种方式
         * ......
         */
         resolve(response)

      }).catch((error)=> {
        reject(JSON.parse(JSON.stringify(error)))
      })
    })
  }
})
//请求方式this.$axios.get / this.$axios.post / this.$axios.put / this.$axios.delete

export default api
