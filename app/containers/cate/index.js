import React, { Component } from 'react'
import { Text, View, StyleSheet,Image,Dimensions,StatusBar,ScrollView,ImageBackground} from 'react-native'
import Button from 'react-native-button'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const {height, width} = Dimensions.get('window'); 

@observer
export default class CateScreen extends Component {
  static navigationOptions = {
    title: '分类',
    header:null,
    tabBarIcon: ({tintColor}) => (
      <Icon name='list' color={tintColor} size={24}/>
    )
  };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}/>
        
        <ScrollView style={{flex:1,width}}>
        <ImageBackground
          style={{width, height: 273}}
          source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505562936743&di=8e509b407a9bfbaf20ff612c773fe6d1&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F902397dda144ad34706d889adaa20cf430ad85d8.jpg'}}>
          <Text style={styles.text} >
            Welcome to Mobx React Native Template 分类
          </Text>
          <Text style={styles.text} >
            Welcome to Mobx React Native Template 分类
          </Text>
        </ImageBackground>
        <Icon style={styles.welcome} name="list" size={100} />
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        <Text style={styles.text} >
          Welcome to Mobx React Native Template 分类
        </Text>
        
        </ScrollView>
      </View>
    )
  }

  _renderHeader() {
    let icon = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496299246419&di=f6d9e7d99236cb4319782d95cbd7f740&imgtype=0&src=http%3A%2F%2Fwww.pptbz.com%2FSoft%2FUploadSoft%2F200911%2F2009110521380826.jpg';
    let icon2 = 'http://pic28.nipic.com/20130503/9252150_153601831000_2.jpg';
    return (
        <Image
            ref={(ref)=>this.topView = ref}
            style={styles.headerContainer}
            source={{uri: icon2}}>
            <View style={styles.headerBottomStyle}>
                <Image
                    style={styles.storeIcon}
                    source={{uri: icon}}
                />
            </View>
        </Image>
    );
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
    backgroundColor:'transparent'
  },
  textRed: {
    color: 'red',
  },
  headerContainer: {
    width: width,
    height: 273,
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
  },
  headerBottomStyle:{
    flex:1
  },
  storeIcon:{
    flex:1
  }
});
