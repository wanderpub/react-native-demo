import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import {CachedImage} from "react-native-img-cache"
const {height, width} = Dimensions.get('window')
import NavBar from '../../components/NavBar'

class Talks extends Component {
    static navigationOptions = {
        tabBarVisible: true,
        header:null,
        tabBarIcon: ({tintColor}) => (
            <Icon name='user' color={tintColor} size={24}/>
        )
    }
  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'Simplicity Matters',
        'Hammock Driven Development',
        'Value of Values',
        'Are We There Yet?',
        'The Language of the System',
        'Design, Composition, and Performance',
        'Clojure core.async',
        'The Functional Database',
        'Deconstructing the Database',
        'Hammock Driven Development',
        'Value of Values'
      ])
    };
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={ this.state.dataSource }
        renderRow={(rowData) => (
          <View key={rowData} style={ styles.row }>
            <Text style={ styles.rowText }>
              { rowData }
            </Text>
          </View>
         )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            backgroundColor='black'
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}
            renderForeground={() => (
              <View key="background">
                <View style={{height:PARALLAX_HEADER_HEIGHT,width:width}}>
                <Swiper
                  height={PARALLAX_HEADER_HEIGHT}
                  loop={true}
                  autoplay={true}
                  dot={<View style={styles.customDot} />}
                  activeDot={<View style={styles.customActiveDot} />}
                  paginationStyle={styles.paginationStyle}
                  >
                  <View style={styles.bannerImage}>
                  <TouchableOpacity key={1} activeOpacity={1}
                    onPress={() => { alert('我是banner') } }>
                    <Image style={styles.bannerImage} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505562936743&di=8e509b407a9bfbaf20ff612c773fe6d1&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F902397dda144ad34706d889adaa20cf430ad85d8.jpg' }} />
                  </TouchableOpacity>
                  </View>
                  <View style={styles.bannerImage}>
                  <TouchableOpacity key={2} activeOpacity={1}
                    onPress={() => { alert('我是banner') } }>
                    <Image style={styles.bannerImage} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505562936743&di=8e509b407a9bfbaf20ff612c773fe6d1&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F902397dda144ad34706d889adaa20cf430ad85d8.jpg' }} />
                  </TouchableOpacity>
                  </View>
                  <View style={styles.bannerImage}>
                  <TouchableOpacity key={3} activeOpacity={1}
                    onPress={() => { alert('我是banner') } }>
                    <Image style={styles.bannerImage} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505562936743&di=8e509b407a9bfbaf20ff612c773fe6d1&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F902397dda144ad34706d889adaa20cf430ad85d8.jpg' }} />
                  </TouchableOpacity>
                  </View>
                </Swiper>
                </View>
              </View>
            )}
            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
              </View>
            )}
            renderFixedHeader={() => (
              <NavBar
                title={''}
                style={{backgroundColor: "transparent", position:"absolute", top:0, width}}
                leftIcon="ios-arrow-back"
                rightIcon="ios-more"
                leftPress={()=>{this.props.navigation.goBack()}}
                rightPress={()=>{}}
              />
            )}/>
        )}
      />
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 300;
const STICKY_HEADER_HEIGHT = (Platform.OS === 'ios' ? 64 : 42);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: window.width,
    justifyContent: 'center'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    marginLeft:30,
    paddingTop:15
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  },
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
		height: PARALLAX_HEADER_HEIGHT,
		width: width
	},
	paginationStyle:{
		justifyContent:'flex-end',
		marginRight:20,
		bottom: 10
	}
});

export default Talks;