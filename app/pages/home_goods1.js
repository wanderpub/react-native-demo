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
const imgWidth = width/2-1
import { observer } from 'mobx-react'
import {CachedImage} from "react-native-img-cache"

@observer
export default class HomeGoods1 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{width:width,flex:1,flexDirection:'row',backgroundColor:'#fff'}}>
				{
					this.props.data.map((item,i) => {
						return (
							<TouchableOpacity key={item.action.path+i} activeOpacity={0.75}
								onPress={() => { alert(item.action.type+':'+item.action.path) } }
								>
								<View style={styles.content}>
									<CachedImage style={styles.imgs} source={{ uri: 'https:' + item.img_url }} />
									{ item.product_tag != undefined ?
										<Image style={styles.tag}
											source={{ uri: 'https:' + item.product_tag }}
										/>
									   :
									   <View style={{height:15}}></View>
									}
									<View style={{backgroundColor:'#fff',paddingLeft:10,paddingBottom:10}}>
										<Text style={{fontSize:14}} selectable={true}>{item.product_name}</Text>
										<Text numberOfLines={1} style={{fontSize:12,color:'gray',paddingTop:5}}>{item.product_brief}</Text>
										<View style={{flex:1,flexDirection:'row',paddingTop:5}}>
											<Text style={{fontSize:12,color:'#ff6000'}}>￥</Text>
											<Text style={{fontSize:14,color:'#ff6000'}}>{item.product_price}</Text>
											<Text style={{fontSize:12,color:'#ff6000',paddingTop:6,marginLeft:5}}>{item.show_price_qi!=undefined?'起':''}</Text>
										</View>
									</View>
								</View>
							</TouchableOpacity>
						)
					})
				}
			</View>
		)
	}
}
const styles = StyleSheet.create({
	content: {
		flex:1,
		width:imgWidth,
		margin:0.5,
	},
	tag: {
		width:40,
		height:15,
		position:'relative',
		top:-imgWidth,
		left:0,
		resizeMode:'stretch'
	},
	imgs: {
		height:imgWidth,
		width:imgWidth,
		resizeMode:'stretch'
	}
});
