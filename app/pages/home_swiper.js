import React, { Component } from 'react'
import {
	AppRegistry,
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
import Swiper from 'react-native-swiper'
// import CacheImage from'@remobile/react-native-cache-image'
import {CachedImage} from "react-native-img-cache"
const defaultIcon = require('../images/logo.png')

export default class HomeSwiper extends Component {
	constructor(props) {
		super(props);
		//
	}
	render() {
		return (
			<View style={{height:150}}>
			<Swiper
				height={150}
				loop={true}
				autoplay={true}
				dot={<View style={styles.customDot} />}
				activeDot={<View style={styles.customActiveDot} />}
				paginationStyle={styles.paginationStyle}
				>
				{this.props.data.map((banner) => {
					return (
						<TouchableOpacity key={banner.material_id} activeOpacity={0.75}
							onPress={() => { alert('我是banner') } }>
							<CachedImage style={styles.bannerImage} source={{ uri: 'https:' + banner.img_url }} />
						</TouchableOpacity>
					)
				}) }
			</Swiper>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	customDot: {
		backgroundColor: '#ddd',
		height: 6,
		width: 6,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 2,
		borderRadius:3
	},
	customActiveDot: {
		backgroundColor: 'white',
		height: 6,
		width: 6,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 2,
		borderRadius:3
	},
	bannerImage: {
		height: 150,
		width: width
	},
	paginationStyle:{
		justifyContent:'flex-end',
		marginRight:20,
		bottom: 10
	}
});


