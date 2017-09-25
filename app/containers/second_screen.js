import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView,TextInput} from 'react-native'
import Button from 'react-native-button'

import ApplicationStyles from '../styles'

export default class SecondScreen extends Component {
  
  constructor(props) {
    super(props);
    // 初始状态
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  static navigationOptions = {
    tabBarVisible: false,
    title: 'Second Screen',
  };

  buttonPressed() { //当按钮按下的时候执行此函数
    // let textInputValue = 'new value';
    // this.setState
    // this.setState({textInputValue:textInputValue});

    //修改文本输入框的属性值
    // this.refs.textInputRefer.setNativeProps({
    //   editable:false
    // });

    this.refs.text2.setNativeProps({
      style:{
        color:'blue',
        fontSize:30
      }
    });
      //使文本输入框变为不可编辑
  }

  render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <Text style={styles.welcome}>
          Second Screen Container
        </Text>
        <Button style={styles.instructions} onPress={ ()=> this.props.navigation.goBack() }>
          Back to Prev Screen
        </Button>
        <Text style={styles.buttonStyle} onPress={this.buttonPressed}>
            按我
        </Text>
        <Text style={styles.textPromptStyle} ref="text2">
            文字提示
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    margin: 10
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: '#FF0000'
},
box2: {
    width: 50,
    height: 50,
    backgroundColor: '#00FF00'
},
box3: {
    width: 50,
    height: 50,
    backgroundColor: '#0000FF'
},
buttonStyle: { //文本组件样式,定义简单的按钮
  fontSize: 20,
  backgroundColor: 'grey'
},
textPromptStyle: { //文本组件样式
  fontSize: 20
},
textInputStyle: { //文本输入组件样式
  width: 150,
  height: 50,
  fontSize: 20,
  backgroundColor: 'grey'
}
});
