import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native'
import Button from 'react-native-button'

import ApplicationStyles from '../styles'

export default class ThirdScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
    title: 'Third Screen',
  };

  render() {
    return (
      <View style={styles.container}>
      <View style={{flexDirection: 'row', height: 200, backgroundColor:"#fefefe", padding: 20}}>
      <View style={{flex: 1, flexDirection:'column', padding: 15, backgroundColor:"#eeeeee"}}>  
          <View style={{flex: 1, backgroundColor:"#bbaaaa"}}>  
          </View>
          <View style={{flex: 1, backgroundColor:"#aabbaa"}}>
          </View>
      </View>
      <View style={{flex: 1, padding: 15, flexDirection:'row', backgroundColor:"#eeeeee"}}>
          <View style={{flex: 1, backgroundColor:"#aaaabb"}}>  
              <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeaaaa"}}> 
                 <View style={{flex: 1, backgroundColor:"#eebbaa"}}>  
                </View>
                <View style={{flex: 1, backgroundColor:"#bbccee"}}>
                </View> 
              </View>
              <View style={{flex: 1, backgroundColor:"#eebbdd"}}>
              </View>
          </View>
          <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
            <ScrollView style={{flex: 1, backgroundColor:"#bbccdd", padding: 5}}>
                  <View style={{flexDirection: 'row', height: 50, backgroundColor:"#fefefe"}}>
                    <View style={{flex: 1, flexDirection:'column', backgroundColor:"#eeeeee"}}>  
                        <View style={{flex: 1, backgroundColor:"#bbaaaa"}}>  
                        </View>
                        <View style={{flex: 1, backgroundColor:"#aabbaa"}}>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeeeee"}}>
                        <View style={{flex: 1, backgroundColor:"#aaaabb"}}>  
                            <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeaaaa"}}> 
                               <View style={{flex: 1, backgroundColor:"#eebbaa"}}>  
                              </View>
                              <View style={{flex: 1, backgroundColor:"#bbccee"}}>
                              </View> 
                            </View>
                            <View style={{flex: 1, backgroundColor:"#eebbdd"}}>
                            </View>
                        </View>
                        <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
                        </View>
                    </View>
                  </View>
                  <Text style={[styles.text, styles.header, {color: '#ffffff', fontSize: 12}]}>
                    {(function(){
                      var str = '';
                      var n = 100;
                      while(n--) {
                        str += '嵌套的网格' + '\n';
                      }
                      return str;
                    })()}
                  </Text>
            </ScrollView> 
          </View>
      </View>
    </View>
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
  circle: {
    backgroundColor: '#fe0000',
    borderRadius: 10,
    width: 20,
    height: 20
  }
});
