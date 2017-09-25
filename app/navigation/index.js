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

const WelcomeTab = StackNavigator({
  MainScreen: { screen: MainScreen },
  SecondScreen: { screen: SecondScreen },
  CounterScreen: { screen: CounterScreen },
});

const MyTab = StackNavigator({
  CheckinScreen: { screen: CheckinScreen },
  ThirdScreen: { screen: ThirdScreen },
  ImageDemo: { screen: ImageDemo }
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
