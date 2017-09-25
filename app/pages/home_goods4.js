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
export default class HomeGoods4 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{width:width,flex:1,backgroundColor:'#fff'}}>
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
											onLoadEnd = {(e)=>{console.log(e)}}
											source={{ uri: 'https:' + item.product_tag }}
										/>
									   :
									   <View style={{height:15}}></View>
									}
									<View style={{backgroundColor:'#fff',flex:1,width:width,marginTop:-15}}>
										<View style={{padding:10}}>
											<View style={{flex:1,flexDirection:'row'}}>
                                                <Text style={{fontSize:16}} selectable={true}>{item.product_name}</Text>
                                                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                                    <Text style={{fontSize:12,color:'#ff6000'}}>￥</Text>
                                                    <Text style={{fontSize:16,color:'#ff6000'}}>{item.product_price}</Text>
                                                </View>
                                            </View>
                                            <Text style={{fontSize:12,color:'gray',paddingTop:5,lineHeight:15}}>{item.product_brief}</Text>
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
		width:width,
	},
	imgs: {
		flex:1,
		width:width,
		height:150,
		resizeMode:'stretch'
    },
    tag: {
		width:40,
		height:15,
		position:'relative',
		top:-150,
		left:0,
		resizeMode:'stretch'
    },
})