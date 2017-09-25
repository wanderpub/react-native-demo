import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	ListView,
	PixelRatio,
	Dimensions
} from 'react-native'
const {height, width} = Dimensions.get('window')
const dp = width/720

export default class HomeAutoFill extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{width:width,flex:1}}>
				{
					this.props.data.map((item,i) => {
						let x = item.y === undefined ? 0 : item.y * dp
						let y = item.x === undefined ? 0 : item.x * dp
						let w = item.w * dp
						let h = item.h * dp
						return (
							<TouchableOpacity key={item.material_id} activeOpacity={0.75}
								onPress={() => { alert('我是photo') } }
								>
									<Image
										style={{width:w,height:h,position:'relative',top:x,left:y}}
										source={{ uri: 'https:' + item.img_url }}
									/>
							</TouchableOpacity>
						)
					})
				}
			</View>
		)
	}
}