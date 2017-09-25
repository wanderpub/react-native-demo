import React, { Component } from 'react'
import { Text, View, StyleSheet,Image,Dimensions,ScrollView } from 'react-native'
import Button from 'react-native-button'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import ApplicationStyles from '../styles'
const {height, width} = Dimensions.get('window'); 

import counterStore from '../stores/counter_store'

import {getMiIndex} from '../stores/api'

@observer
export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this._onScroll = this._onScroll.bind(this);
    this._gotop = this._gotop.bind(this);
  }
  
  static navigationOptions = {
    title: '首页',
    header:null,
    tabBarIcon: ({tintColor}) => (
      <Icon name='home' color={tintColor} size={24}/>
    )
  };
  componentDidMount() {
    // getMiIndex({'client_id':'180100031051','recommend_tag':'w8WhMImzrUzx0D9iHupn'}).then((r)=>{
    //   console.log(r)
    // })
  }
  
  _onScroll(e){
    let y = e.nativeEvent.contentOffset.y
    if(y>300){
      let top = height-150+y
      let left = width-50
      this.refs.gotop.setNativeProps({
        style:{
          left:left,
          top:top
        }
      })
    }else{
      this.refs.gotop.setNativeProps({
        style:{
          top:-150
        }
      })
    }
  }
  _gotop(){
    console.log('1111')
    this.refs.scrollview.scrollTo({x: 0, y: 0, animated: true})
  }

  render() {
    return (
      <ScrollView 
          ref='scrollview' 
          onScroll={this._onScroll}
          scrollEventThrottle={1}
          >
      <View style={styles.container}>
      <View style={{height:60,width}}>
        <View style={{flex:1,flexDirection:'row',marginTop:30,height:30}}>
          <Image
            style={{width:80,height:30,}}
            source={{uri: 'https://m.mi.com/component/list/img/sczb_ed0a4af.png'}}
          />
          <View style={{flex:1,height:15,borderLeftWidth:1,borderLeftColor:'gray',paddingLeft:5,marginTop:8}}>
          <Swiper style={styles.wrapper} showsButtons={false} horizontal={false} showsPagination={false} autoplay>
            <View style={styles.slide1}>
              <Text numberOfLines={1} style={styles.text}>Hello Swiper1 Hello Swiper1 Hello Swiper1 Hello Swiper1</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful1</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple1</Text>
            </View>
          </Swiper>
          </View>
        </View>
      </View>
      <View style={{height: 100,width, backgroundColor: '#000'}}>
        
      </View>
      <View style={{height:1500,width}}>
      <View style={styles.centerRow}>
        <View style={[styles.row,{backgroundColor:"blue"}]}>
        <Text style={{height:100}}>sfddsfs</Text>
        </View>
        <View style={styles.row}>
        <Text>sfddsfs</Text>
        </View>
      </View>
      </View>
        <Icon style={styles.welcome} name="home" size={30} />
        <Text style={styles.text} >
          Welcome to Mobx React Native Template
        </Text>
        <Text style={styles.text} >
          Now counter is <Text style={styles.textRed}>{counterStore.counter}</Text>
        </Text>
        <Text style={styles.text} >
          Now remote counter is {counterStore.remoteCounter}
        </Text>
        <Button style={ApplicationStyles.button} onPress={ ()=> counterStore.getFromRemote() }>
          Click to get api data
        </Button>
        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigation.navigate('SecondScreen') }>
          Click to second screen
        </Button>

        <Button style={ApplicationStyles.button} onPress={ ()=> this.props.navigation.navigate('CounterScreen') }>
          Click to counter screen
        </Button>
      </View>
      <View ref="gotop" style={[styles.circle, {position: 'absolute', top: -150, left: 180}]}>
      <Icon onPress={this._gotop} style={{color:'#fff'}} name="arrow-up" size={15} />
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    margin: 10
  },

  textRed: {
    color: 'red',
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'gray',
    fontSize: 14,
  },
  centerRow:{
    flex:1,
    backgroundColor:"red",
    flexDirection:"row"
  },
  row:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
  circle: {
    backgroundColor: 'orange',
    borderRadius: 15,
    width:30,
    height:30,
    justifyContent: 'center',
    alignItems:'center',
  }
});
