import React from 'react'
import { Animated } from 'react-native'
import { State } from 'react-native-gesture-handler'

import { Header, Tabs, Menu, Card } from '../../components'
import {
  Container,
  Content
} from './styles'

export default function Home() {
  let offset = 0;
  const translateY = new Animated.Value(0)

  const onHandlerStateChanged = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY

      translateY.setOffset(offset)
      translateY.setValue(0)

      if (translationY >= 100) {
        opened = true
      }else{
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <Card translateY={translateY} onHandlerStateChanged={onHandlerStateChanged} />
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  )
}