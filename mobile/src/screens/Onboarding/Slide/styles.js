import styled from 'styled-components/native'

import * as DIMENSIONS from '../../../constants/Dimensions'

export const Container = styled.View`
  width: ${DIMENSIONS.width + 'px'};

  align-items: center;
`

export const Image = styled.Image`
  
`

export const Title = styled.Text`
  width: ${DIMENSIONS.width / 1.5 + 'px'};

  font-size: 36px;
  font-weight: 700;
  color: #262628;

  text-align: center;
  line-height: 42px;
`

export const Description = styled.Text`
  width: ${DIMENSIONS.width / 1.45 + 'px'};

  font-size: 17px;
  font-weight: 400;
  color: #262628;

  text-align: center;
  line-height: 20px;
`
