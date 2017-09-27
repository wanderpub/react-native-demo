import {PixelRatio,Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window')

export const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt)
export const px2pt = px=>PixelRatio.roundToNearestPixel(px)

export const px2dp = px => px *  height / 640;