/**
 * author vsioly
 * email liwsh666@126.com
 */
import http from '@/common/js/http.js'
// import qs from 'qs' // 可能需要对参数处理 qs.stringify(config.data)
// import { genUrl } from '../util.js'
export function get(url, p) {
    return http.get(url, {params: p})
}

export function post(url, p) {
    return http.post(url, JSON.stringify(p))
    // return axios.post(url, p)
}

export function login (p) {
    return post('login', p)
}

// export function getAuthority (p) {
//     return get('opdmp/purview/functionlist', p)
// }
