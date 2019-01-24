import axios from 'axios';
import _ from 'lodash';
import C from '../constant/const';
import { deleteCookie } from '../utils/cookie';
import { proxy } from '../config';
import Notify from '../utils/Notify';
import logger from '../utils/logger';

export class BaseService {
  constructor() {
    this.$http = axios.create({
      // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
      // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
      baseURL: proxy,
      // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
      // 如果请求话费了超过 `timeout` 的时间，请求将被中断
      timeout: 5000,
      // `withCredentials` 表示跨域请求时是否需要使用凭证, 是否携带cookies发起请求
      withCredentials: true, // TODO: 正式环境使用 Nginx 转发，不存在跨域问题，正式环境设置该值为 false
      // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus`
      // 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 reject
      validateStatus: status => {
        return status >= 200 && status < 300;
      }
    });
  }

  axios(method, url, data) {
    return new Promise((resolve, reject) => {
      logger.info('🚀 http request: ', method, url, data);
      this.$http[method](url, data)
        .then(function(resp) {
          const data = resp.data;
          const code = _.get(data, 'code');
          /**
           * @Description: 不使用 http 标准状态码，使用自定义状态码，自行处理返回状态
           * @author Martin
           * @date 2018-12-14
           */
          if (code && code !== 200) {
            if (_.get(data, 'errorCode') === C.ERROR_CODE.TOKEN_ERROR) {
              deleteCookie('token');
            }
            logger.warn('💣 request warning: ', data);
            reject(data);
          }
          resolve(resp.data);
        })
        .catch(function(error) {
          Notify.info(C.ERROR_CODE.DESC[C.ERROR_CODE.SYSTEM_ERROR]);
          logger.warn('🐞 request error: ', error);
          reject(error);
        });
    });
  }

  get(url) {
    return this.axios('get', url);
  }

  post(url, data) {
    return this.axios('post', url, data);
  }

  put(url, data) {
    return this.axios('put', url, data);
  }

  delete(url) {
    return this.axios('delete', url);
  }
}
