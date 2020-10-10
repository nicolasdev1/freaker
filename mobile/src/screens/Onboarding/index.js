import React from 'react'
import Animated from 'react-native-reanimated'

import Slide from './Slide'

import * as DIMENSIONS from '../../constants/Dimensions'

import arrowsRight from '../../assets/arrows-right.png'

import {
  Wrapper,
  Container,
  Header,
  Skip,
  SkipTitle,
  SkipImage,
  Slider,
  Pagination
} from './styles'

const slides = [
  {
    title: "Discover places near you",
    description: "We make it simple to find the food you crave. Enter your address and let us do the rest."
  },
  {
    title: "Choose A Tasty Dish",
    description: "When you order Est Street, we'll hook you up with exclusive coupons, specials and rewards."
  },
  {
    title: "Pick Up Your Delivery",
    description: "We make food ordeling fast, simples and free - no matter if you order online or cash."
  }
]

const Onboarding = () => {
  // const x = useValue(0)
  // const onScroll = onScrollEvent({ x })
  // const { scrollHandler, x } = useScrollHandler()

  return (
    <Wrapper>
      <Container>
        <Header>
          <Skip>
            <SkipTitle>Pular</SkipTitle>
            <SkipImage source={arrowsRight} />
          </Skip>
        </Header>
        <Slider>
          <Animated.ScrollView
            horizontal
            snapToInterval={DIMENSIONS.width}
            decelerationRate="fast"
            bounces={false}
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            // {...scrollHandler}
          >
            {slides.map(({ title, description }, index) => (
              <Slide
                key={index}
                // image={}
                {...{ title, description }}
              />
            ))}
          </Animated.ScrollView>
        </Slider>
        <Animated.View>
          <Pagination>

          </Pagination>
        </Animated.View>
      </Container>
    </Wrapper>
  )
}

export default Onboarding
