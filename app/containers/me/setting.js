import React, {Component,PropTypes} from 'react';
import {StyleSheet, View, Text, ScrollView, Switch, TouchableOpacity,TouchableNativeFeedback, Platform, PixelRatio,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {px2dp} from '../../utils/px2dp';

export default class Setting extends Component {
	constructor(props) {
		super(props);
    }
    static navigationOptions = {
        tabBarVisible: true,
        title: '我',
        tabBarIcon: ({tintColor}) => (
            <Icon name='user' color={tintColor} size={24}/>
        )
    }
    _onPressEmail(){
        Alert.alert('提示','111')
    }
    _onChange(value){
        Alert.alert('提示',value+'111')
    }
    render(){
        return (
            <View style={{flex:1,backgroundColor:'#f4f4f4'}}>
            <ScrollView>
                <View style={styles.list}>
                    <Item text="邮箱" subText="未设置" onPress={this._onPressEmail}/>
                    <Item text="手机号" subText="未设置"/>
                    <Item text="修改账户密码" end/>
                </View>
                <View style={styles.list}>
                    <Item text="清除缓存"/>
                    <Item text="向我推送好文章" isHasSwitcher={true} onChange={this._onChange}/>
                    <Item text="移动网络下首页不显示图片" isHasSwitcher={true} onChange={this._onChange}/>
                    <Item text="自动检查粘贴板快速分享" isHasSwitcher={true} switcherValue={true} onChange={this._onChange} end/>
                </View>
            </ScrollView>
            </View>
        )
    }
}

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            switchIsOn: this.props.switcherValue
        };
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        textColor: PropTypes.string,
        subText: PropTypes.string,
        onPress: PropTypes.func,
        isHasSwitcher: PropTypes.bool,
        switcherValue: PropTypes.bool
    };

    static defaultProps = {
        textColor: '#000',
        switcherValue: false
    };

    render(){
        const {text, textColor, subText,onChange, onPress, isHasSwitcher, switcherValue} = this.props;

        if(Platform.OS === 'android'){
            return(
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={styles.listItem}>
                        <Text style={{color: textColor, fontSize: px2dp(15)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}}>
                            <Text style={{color: "#ccc"}}>{subText}</Text>
                            { isHasSwitcher ?
                                <Switch
                                    onValueChange={(value) => {
                                            this.setState({switchIsOn: value})
                                            onChange(value)
                                    }}
                                    style={{marginLeft: px2dp(5)}}
                                    value={this.state.switchIsOn}/>
                                :
                                <View style={{marginLeft:px2dp(5)}}><Icon color="gray" size={20} name='angle-right'/></View>
                            }
                        </View>
                    </View>
                </TouchableNativeFeedback>
            );
        }else if(Platform.OS === 'ios'){
            return(
                <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                    <View style={this.props.end === undefined ? styles.listItem :styles.listItemEnd}>
                        <Text style={{color: textColor, fontSize: px2dp(15)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}}>
                            <Text style={{color: "#ccc"}}>{subText}</Text>
                            { isHasSwitcher ?
                                <Switch
                                    onValueChange={(value) => {
                                            this.setState({switchIsOn: value})
                                            onChange(value)
                                    }}
                                    style={{marginLeft: px2dp(5)}}
                                    value={this.state.switchIsOn}/>
                                :
                                <View style={{marginLeft:px2dp(10)}}><Icon color="gray" size={20} name='angle-right'/></View>
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    list:{
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(12),
        backgroundColor: 'white'
    },
    listItemEnd: {
        flex: 1,
        height: px2dp(47),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(25),
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1 / PixelRatio.get()
    },
    listItem: {
        flex: 1,
        height: px2dp(47),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: px2dp(10),
        paddingLeft:px2dp(5),
        paddingRight: px2dp(25),
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1 / PixelRatio.get()
    },
})