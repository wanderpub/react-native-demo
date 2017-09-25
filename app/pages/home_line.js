import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Image,
	Dimensions
} from 'react-native'
const {height, width} = Dimensions.get('window')
import { observer } from 'mobx-react'
import {px2pt} from '../utils/px2dp'

@observer
export default class HomeLine extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{width:width,backgroundColor:this.props.data.line_color,height:px2pt(this.props.data.line_height*1)}}>
			</View>
		)
	}
}