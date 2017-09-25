import {post,get,all} from '../config/'

//获取数据
export const datalist = params => post('http://t.ziben365.com/i/more', params)

export const githublist = () => get('https://api.github.com/search/repositories?q=javascript&sort=stars')

export const getType = () => get('http://t.ziben365.com/i/type')

export const getlist = params => post('http://t.ziben365.com/i/list',params)

export const getIndex = (params,callback) => all([getType(),getlist(params),datalist({page:1})],callback)

export const getMiIndex = (params) => post('https://m.mi.com/v1/home/index2',params)

export const getMiTab = (params) => post('https://m.mi.com/v1/home/tab_page',params)

// getIndex(params,(args)=>{
//     console.log(args)
// })