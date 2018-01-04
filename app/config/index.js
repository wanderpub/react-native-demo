import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://t.ziben365.com/i/';
axios.defaults.timeout = 2000;
axios.defaults.headers = {
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With':'XMLHttpRequest',
    'Referer':'https://m.mi.com/'
};

/**
 * 请求拦截器 进行相关参数校验，控制是否继续当次请求
 * @return
 **/
axios.interceptors.request.use(function(config){
    let token = '';
    if (token) {
        config.headers['X-Token'] = token
    }
    return config
},function(error){
    return Promise.reject(error);
});
/**
 * 响应拦截器，打印日志，简单的结果解析
 * @return
 * **/
axios.interceptors.response.use(function(response) {
    return response
}, function(error){
    return Promise.reject(error);
});

//POST请求
export const post = (url, params) => {
    return axios({
        method : "POST",
        url : url,
        data: qs.stringify(params)
    });
    // return axios.post(url,params,params);
}

//GET请求
export const get = (url, params) => {
    return axios({
        method : "GET",
        url : url,
        params : params
    })
}


//合并多个请求
export const all = (args,callback) =>{
    axios.all(args).then(axios.spread((...returns) =>{
        callback(returns)
    }))
}
