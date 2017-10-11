import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import ApplicationStyles from '../styles'

@observer
export default class CheckinScreen extends Component {
  static navigationOptions = {
    title: '我',
    tabBarIcon: ({tintColor}) => (
      <Icon name='user' color={tintColor} size={24}/>
    )
  };

  render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <Text style={styles.welcome} >
          CheckinScreen
        </Text>
        <Button onPress={()=>this.props.navigation.navigate('ThirdScreen')} >
          To ThirdScreen
        </Button>
        <Button onPress={()=>this.props.navigation.navigate('ImageDemo')} >
          To ImageDemo
        </Button>
        <Button onPress={()=>this.props.navigation.navigate('Setting')} >
          To Setting
        </Button>
        <Button onPress={()=>this.props.navigation.navigate('Test')} >
          To Test
        </Button>
        <Button onPress={()=>this.props.navigation.navigate('Talks')} >
          To Talks
        </Button>
        <Button onPress={()=>this.props.navigation.navigate('DetailPage')} >
          To DetailPage
        </Button>
        <Button onPress={()=>this.props.navigation.navigate('Detail')} >
          To Detail
        </Button>
        
        
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
});
