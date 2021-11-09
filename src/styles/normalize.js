import {Dimensions} from 'react-native';

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

const compareScreenWidth = 390;

export const normalize = size => {
  const width = WINDOW_HEIGHT > WINDOW_WIDTH ? WINDOW_WIDTH : WINDOW_HEIGHT;
  return Math.round((size * width) / compareScreenWidth);
};
