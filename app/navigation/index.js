import { TabNavigator, StackNavigator } from 'react-navigation'

import WelcomeScreen from '../containers/welcome_screen'
import SecondScreen from '../containers/second_screen'
import CounterScreen from '../containers/counter_screen'
import CheckinScreen from '../containers/checkin_screen'
import ThirdScreen from '../containers/third_screen'
import CateScreen from '../containers/cate/'
import FindScreen from '../containers/find/'
import MainScreen from '../containers/main/'

import ImageDemo from '../containers/image_demo'

import Setting from '../containers/setting'
import MeSetting from '../containers/me/setting'
import Test from '../containers/me/test'
import Talks from '../containers/me/talk'
import DetailPage from '../containers/goods'

import Detail from '../containers/me/detail'

const WelcomeTab = StackNavigator({
  MainScreen: { screen: MainScreen },
  SecondScreen: { screen: SecondScreen },
  CounterScreen: { screen: CounterScreen },
});

const MyTab = StackNavigator({
  CheckinScreen: { screen: CheckinScreen },
  Talks: { screen: Talks },
  DetailPage: { screen: DetailPage },
  MeSetting: { screen: MeSetting },
  ThirdScreen: { screen: ThirdScreen },
  ImageDemo: { screen: ImageDemo },
  Setting: { screen: Setting },
  Test: {screen: Test},
  Detail:{screen:Detail}
})

const CateTab = StackNavigator({
  CateScreen: { screen: CateScreen }
})

const FindTab = StackNavigator({
  FindScreen: { screen: FindScreen }
})

const Navigation = TabNavigator({
  Home: { screen: WelcomeTab },
  Cate: { screen: CateTab },
  Find: { screen: FindTab },
  My: { screen: MyTab }
},{
  lazy:true,
  tabBarOptions:{
    activeTintColor:'orange'
  }
});

export default Navigation
