import {Dimensions} from 'react-native';

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

// horizontal scale
export const hs = size =>
  Math.round((WINDOW_WIDTH / guidelineBaseWidth) * size);
// vertical scale
export const vs = size =>
  Math.round((WINDOW_HEIGHT / guidelineBaseHeight) * size);
// moderate scale
export const ms = (size, factor = 0.5) =>
  Math.round(size + (hs(size) - size) * factor);
