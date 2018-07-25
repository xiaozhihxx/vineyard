import axios from 'axios';
import {stringify} from 'qs';

/**
 * Ajax 请求
 * @param {string} method 请求方法，post/get
 * @param {string} url 请求地址
 * @param {Object} data 参数
 * @param {Object} options post请求时，other配置
 * @return {Promise} 返回Promise对象
 */
const ajax = (method, url, data, options = {}) => {
    const isPost = method === 'post';
    const config = {
        url,
        method,
        header: {'X-From': 'web'},
        ...options
    };

    if (isPost) {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        config.data = stringify(data);
    } else {
        config.params = data;
    }

    return axios(config)
        .then(res => res.data)
        .then(({retCode, retMsg, retData}) => {
            return retCode === 0
                ? Promise.resolve(retData)
                : Promise.reject(retMsg);
        })
        .catch(errMsg => {
            if (typeof errMsg === 'object') {
                console.error(errMsg);
                return Promise.reject(new Error('服务异常'));
            }
            return Promise.reject(errMsg);
        });
};

/**
 * 解析url参数
 */
export function urlParse() {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);

    if (arr) {
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
};
