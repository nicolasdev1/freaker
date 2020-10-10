import React from 'react'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Slide from './Slide'

import arrowsRight from '../../assets/arrows-right.png'

import {
  Wrapper,
  Container,
  Header,
  Skip,
  SkipTitle,
  SkipImage,
  Slider,
  Swiper,
  Footer
} from './styles'

const Onboarding = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Skip>
            <SkipTitle>Skip</SkipTitle>
            <SkipImage source={arrowsRight} />
          </Skip>
        </Header>
        <Slider>
          <Swiper>
            <Slide
              // image={}
              title="Discover places near you"
              description="We make it simple to find the food you crave. Enter your address and let us do the rest."
            />

            <Slide
              // image={}
              title="Choose A Tasty Dish"
              description="When you order Est Street, we'll hook you up with exclusive coupons, specials and rewards."
            />

            <Slide
              // image={}
              title="Pick Up Your Delivery"
              description="We make food ordeling fast, simples and free - no matter if you order online or cash."
            />
          </Swiper>
        </Slider>
        <Footer>

        </Footer>
      </Container>
    </Wrapper>
  )
}

export default Onboarding
