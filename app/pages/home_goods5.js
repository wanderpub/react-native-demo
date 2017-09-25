import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native'
const {height, width} = Dimensions.get('window')
import { observer } from 'mobx-react'
import {CachedImage} from "react-native-img-cache"

@observer
export default class HomeGoods3 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{width:width,flex:1,flexDirection:'row',backgroundColor:'#fff'}}>
				{
					this.props.data.map((item,i) => {
						if(i==0){
							return (
								<TouchableOpacity key={item.action.path+i} activeOpacity={0.75}
									onPress={() => { alert(item.action.type+':'+item.action.path) } }
									>
									<View style={{flex:1}}>
										<CachedImage style={styles.imgs1} source={{ uri: 'https:' + item.img_url }} />
										<View style={{backgroundColor:'#fff',flex:1,justifyContent:'center'}}>
											<View style={{padding:10}}>
												<Text style={{fontSize:16}} selectable={true}>{item.product_name}</Text>
												<View style={{flex:1,flexDirection:'row',paddingTop:5}}>
													<Text style={{fontSize:12,color:'#ff6000'}}>￥</Text>
													<Text style={{fontSize:16,color:'#ff6000'}}>{item.product_price}</Text>
												</View>
											</View>
										</View>
									</View>
								</TouchableOpacity>
							)
						}else{
							return (
								<TouchableOpacity key={item.action.path+i} activeOpacity={0.75}
									onPress={() => { alert(item.action.type+':'+item.action.path) } }
									>
									<View style={{flex:2,paddingLeft:1.5}}>
										<CachedImage style={styles.imgs} source={{ uri: 'https:' + item.img_url }} />
										<View style={{backgroundColor:'#fff',flex:1,justifyContent:'center'}}>
											<View style={{padding:10}}>
												<Text style={{fontSize:16}} selectable={true}>{item.product_name}</Text>
												<View style={{flex:1,flexDirection:'row',paddingTop:5}}>
													<Text style={{fontSize:12,color:'#ff6000'}}>￥</Text>
													<Text style={{fontSize:16,color:'#ff6000'}}>{item.product_price}</Text>
												</View>
											</View>
										</View>
									</View>
								</TouchableOpacity>
							)
						}
					})
				}
			</View>
		)
	}
}
const styles = StyleSheet.create({
	content: {
		flex:1,
		width:width,
		flexDirection:'row'
	},
	imgs: {
		flex:1,
		height:140,
		width:width/3*2,
		resizeMode:'stretch'
	},
	imgs1: {
		flex:1,
		height:140,
		width:width/3,
		resizeMode:'stretch'
	}
})