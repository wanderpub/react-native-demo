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

export default class HomeBroadcast extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <View style={{flex:1,flexDirection:'row',height:30,width:width,backgroundColor:'#fff'}}>
            <Image
                style={{width:80,height:30,}}
                source={{uri: 'https:'+this.props.data.title_logo_url}}
            />
            <View style={{flex:1,height:15,marginTop:8,borderLeftWidth:1,borderLeftColor:'gray',paddingLeft:5,}}>
            <Swiper height={15} showsButtons={false} loop={true} horizontal={false} showsPagination={false} autoplay>
                {
                    this.props.data.items.map((item,i) => {
                        return (
                            <TouchableOpacity key={500+i} activeOpacity={0.75}
								onPress={() => { alert(item.action.type+':'+item.action.path) } }
							>
                            <Text numberOfLines={1} style={{color: 'gray',fontSize: 14,width:width-80}}>{item.news_title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </Swiper>
            </View>
            </View>
		)
	}
}