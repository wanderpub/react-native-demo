import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../../styles'

@observer
export default class FindScreen extends Component {
  static navigationOptions = {
    title: '发现',
    tabBarIcon: ({tintColor}) => (
      <Icon name='search' color={tintColor} size={24}/>
    )
  };

  render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <Icon style={styles.welcome} name="search" size={100} />
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 发现
        </Text>
      </View>
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
    margin: 10,
    marginTop: 100
  },
  text: {
    textAlign: 'center',
    margin: 10,
  },
  textRed: {
    color: 'red',
  },
});