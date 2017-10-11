import React, {Component,PropTypes} from 'react'
import {StyleSheet, View, Text,Image,Dimensions,Modal,Alert,Button,TouchableOpacity} from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome'
const {height, width} = Dimensions.get('window')

export default class Test extends Component {
    static navigationOptions = {
        tabBarVisible: true,
        title: '我',
        header:null,
        tabBarIcon: ({tintColor}) => (
            <Icon name='user' color={tintColor} size={24}/>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            transparent: true,
          }
    }
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ParallaxScrollView
                    style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
                    renderBackground={() => <Image source={{ uri: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505562936743&di=8e509b407a9bfbaf20ff612c773fe6d1&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F902397dda144ad34706d889adaa20cf430ad85d8.jpg`, width: width, height: 350 }}/>}
                    renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'blue', padding: 5, fontSize: 20 }}>Hello</Text>}
                    parallaxHeaderHeight={ 350 }>
                    <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
                    <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
                    <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
                    <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
                    <View style={{ alignItems: 'center',height:300,backgroundColor:'red' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
                    <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
                    <Button title='显示Modal' onPress={()=>{this.setState({visible:true})}}/>
                    <Modal
                        visible={this.state.visible}
                        transparent={this.state.transparent}
                        onRequestClose={()=>{
                            Alert.alert("Modal has been closed.");
                        }}
                        onShow={()=>{
                        }}>
                        <TouchableOpacity style={{flex:1}} onPress={()=>{this.setState({visible:false})}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
                            <View style={{height:200,width:width,backgroundColor:'white',position:'absolute',bottom:0,left:0}}>
                                <Button title='关闭Modal' onPress={()=>{this.setState({visible:false})}}/>
                                <Button title={this.state.transparent?'不透明':'透明'} onPress={()=>{this.setState({transparent:!this.state.transparent})}}/>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </Modal>
                </ParallaxScrollView>
            </View>
        )
    }
}