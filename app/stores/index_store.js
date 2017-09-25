import {
    observable,
    computed,
    action
} from 'mobx'

import { getMiIndex,getMiTab } from "./api"

class IndexStore {

  @observable
  datalist = []
  @observable
  refreshing = false
  @observable
  page_id = 0

  @observable
  tabsData = []

  @observable
  isShow = false

  @action('获取数据')
  getIndex = () => {
    if (this.refreshing) return
    this.refreshing = true
    let params = {'client_id':'180100031051','recommend_tag':'w8WhMImzrUzx0D9iHupn'}
    getMiIndex(params)
    .then( (res) => {
      this.datalist = res.data.data
      this.tabsData[0] = res.data.data.tabs[0].tab_data
      this.refreshing = false
      this.isShow = true
    })
  }
  @action('获取TAB数据')
  getTab = () => {
    if(this.page_id==0) return
    if(this.refreshing) return
    this.refreshing = true
    let params = {
      'client_id':'180100031051',
      'channel_id':0,
      'page_id':this.page_id,
      'recommend_tag':'w8WhMImzrUzx0D9iHupn'
    }
    getMiTab(params)
    .then((res)=>{
      this.tabsData[this.page_id] = res.data.data
      this.refreshing = false
    })
  }
}
export default new IndexStore();