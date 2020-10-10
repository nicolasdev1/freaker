import styled from 'styled-components/native'

import * as DIMENSIONS from '../../constants/Dimensions'

export const Wrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
`

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  width: ${DIMENSIONS.width + 'px'};
  height: 67px;

  justify-content: center;
  align-items: flex-end;

  padding-right: 18px;
`

export const Skip = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
`

export const SkipTitle = styled.Text`
  font-size: 16px;
  color: #E84C4F;

  line-height: 19px;
`

export const SkipImage = styled.Image`
  margin-left: 4px;
`

export const Slider = styled.View`
  height: ${(0.78 * DIMENSIONS.height) + 'px'};
`

export const Swiper = styled.ScrollView.attrs({
  horizontal: true,
  snapToInterval: DIMENSIONS.width,
  decelerationRate: 'fast',
  bounces: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
`

export const Footer = styled.View`
  flex: 1;
`
