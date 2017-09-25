import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
	Dimensions,
	ScrollView,
	RefreshControl
} from 'react-native'
import { observer } from 'mobx-react'
const {height, width} = Dimensions.get('window')
import Swiper from 'react-native-swiper'
import RefreshListView, {RefreshState} from '../../components/RefreshListView'
import LoadingView from '../../components/LoadingView'

import IndexStore from '../../stores/index_store'

import HomeSwiper from '../../pages/home_swiper'
import HomeAutoFill from '../../pages/home_autofill'
import HomeGoods1 from '../../pages/home_goods1'
import HomeGoods2 from '../../pages/home_goods2'
import HomeGoods3 from '../../pages/home_goods3'
import HomeGoods4 from '../../pages/home_goods4'
import HomeGoods5 from '../../pages/home_goods5'
import HomeGoods6 from '../../pages/home_goods6'
import HomeLine from '../../pages/home_line'
import HomeBroadcast from '../../pages/home_broadcast'

@observer
export default class Tab_Content extends Component {
	constructor(props) {
			super(props);
	}
	componentDidMount() {
		// IndexStore.getTab()
	}
	renderCell({item,index}) {
		switch (item.view_type) {
			case 'gallery':
				return (
					<HomeSwiper data={item.body.items}/>
				)
			case 'list_two_type1':
				return (
					<HomeGoods1 data={item.body.items}/>
				)
			case 'list_one_type2':
				return (
					<HomeGoods2 data={item.body.items}/>
				)
			case 'list_one_type3':
				return (
					<HomeGoods3 data={item.body.items}/>
				)
			case 'list_one_type12':
				return (
					<HomeGoods4 data={item.body.items}/>
				)
			case 'list_two_type2':
				return (
					<HomeGoods5 data={item.body.items}/>
				)
			case 'list_two_type3':
				return (
					<HomeGoods6 data={item.body.items}/>
				)
			// case 'divider_line':
			// 	return (
			// 		<HomeLine data={item.body}/>
			// 	)
			case 'list_broadcast':
				return (
					<HomeBroadcast data={item.body}/>
				)
		}
	}
	keyExtractor = (item,index) => {
		return index
	}
	renderTabs(page_id){
		console.log(page_id)
		const isEmpty = IndexStore.tabsData[page_id] === undefined || IndexStore.tabsData[page_id].length === 0;
		if (isEmpty) {
			return (
				<ScrollView
					automaticallyAdjustContentInsets={false}
					horizontal={false}
					contentContainerStyle={styles.no_data}
					style={{ flex: 1 }}
					refreshControl={
						<RefreshControl
						refreshing={IndexStore.refreshing}
						onRefresh={() => IndexStore.getTab()}
						title="加载中..."
						colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
						/>
					}
					>
				</ScrollView>
			)
		}
		return (
			<RefreshListView
				data={IndexStore.tabsData[page_id].sections}
				keyExtractor={this.keyExtractor}
				onHeaderRefresh={IndexStore.getTab}
				renderItem={this.renderCell}
			/>
		)
		
	}
	render() {
		return (
			<View style={styles.container}>
			{
				this.renderTabs(this.props.page)
			}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: 'rgb(240, 240, 240)',
	},
	no_data: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 100
	},
})