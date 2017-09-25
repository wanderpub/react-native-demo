import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Image,
	PixelRatio,
	Platform
} from 'react-native'
import { observer } from 'mobx-react'
import ScrollableTabView,{ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view'
import RefreshListView, {RefreshState} from '../../components/RefreshListView'
import Icon from 'react-native-vector-icons/FontAwesome'
import LoadingView from '../../components/LoadingView'
import IndexStore from '../../stores/index_store'
import TabContent from './tab_content'

const {height, width} = Dimensions.get('window')
const dp = width/720

@observer
export default class Index extends Component {
  constructor(props) {
    super(props);
	}
	static navigationOptions = {
		title: '首页',
		header:null,
		tabBarIcon: ({tintColor}) => (
			<Icon name='home' color={tintColor} size={24}/>
		)
	}
	componentDidMount() {
		// console.log(dp)
		// console.log(width/720)
		// console.log(720/PixelRatio.get())
		// console.log(PixelRatio.get())
		IndexStore.getIndex()

		/*
		<View style={{width:width,backgroundColor:'blue',height:508*dp}}>
				<View style={{width:358*dp,height:508*dp,position:'relative',top:0,left:0,backgroundColor:"red"}}></View>
				<View style={{width:358*dp,height:252*dp,position:'relative',top:-508*dp,left:362*dp,backgroundColor:"green"}}></View>
				<View style={{width:358*dp,height:252*dp,position:'relative',top:-504*dp,left:362*dp,backgroundColor:"yellow"}}></View>
			</View>
			<View style={{width:width,backgroundColor:'gray',height:508*dp}}>
				<View style={{width:358*dp,height:508*dp,backgroundColor:"blue",position:'relative',}}></View>
				<View style={{width:358*dp,height:252*dp,position:'relative',top:-508*dp,left:362*dp,backgroundColor:"gray"}}></View>
				<View style={{width:358*dp,height:252*dp,position:'relative',top:-504*dp,left:362*dp,backgroundColor:"green"}}></View>
			</View>
		*/
	}
	onChangeTab(tab){
		let page_id = tab.ref.props.page_id
		IndexStore.page_id = page_id
		if(page_id !=0 ){
			if(IndexStore.tabsData[page_id] == undefined){
				IndexStore.getTab()
			}
		}
	}
	renderContent(item,page_id){
		// if(page_id==0){
		// 	return (
		// 		<TabContent {...this.props} data={item} page={page_id}/>
		// 	)
		// }else{
			return (
				<TabContent {...this.props} data={item} page={page_id}/>
			)
		// }
	}
	render(){
		return (
			<View style={styles.container}>
			<View style={{flex:1,width}}>
				{
					IndexStore.isShow ?
					<ScrollableTabView
						ref="tabView"
						renderTabBar={()=> 
							<ScrollableTabBar
								underlineHeight={1}
								textStyle={{fontSize:14}}
							/>
						}
						scrollWithoutAnimation={true}
						tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
						tabBarBackgroundColor="white"
						tabBarActiveTextColor="#E82931"
						tabBarInactiveTextColor="#aaaaaa"
						onChangeTab= {this.onChangeTab}
						>
						{
							IndexStore.datalist.tabs.map((item,i) => {
								let page_id = item.params.page_id != undefined ? item.params.page_id : 0
								return (
									<View
										key={'key'+i}
										page_id={page_id}
										ref={'el'+i}
										tabLabel={item.tab_name}
										style={{ flex: 1}}>
										{
											this.renderContent(item,page_id)
										}
									</View>
								)
							})
						}
					</ScrollableTabView>
					:
					<LoadingView />
				}
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
    flex: 1,
		alignItems: 'center',
		marginTop: Platform.OS === 'ios' ? 20 : 0,
	},
	content: {
		width,
		paddingLeft: 10,  
		paddingRight: 10,  
		height: Platform.OS === 'ios' ? 68 : 48,// 处理iOS状态栏  
		backgroundColor: '#d74047',  
		alignItems: 'center',
	},
	text: {
		color: 'gray',
    fontSize: 14,
	},
	tabBarUnderlineStyle: {
		backgroundColor:'#E82931',
		height:1
	}
})