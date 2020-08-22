import React from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'
import { Animated } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'

import {
  Container,
  CardHeader,
  CardBody,
  CardFooter,
  Title,
  Description,
  Annotation
} from './styles'

export default function Card({ translateY, onHandlerStateChanged }) {
  const animatedEvent = Animated.event([
    {
      nativeEvent: {
        translationY: translateY
      }
    }
  ], { useNativeDriver: true })

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}
    >
      <Container style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [-350, 0, 380],
            outputRange: [-50, 0, 380],
            extrapolate: 'clamp'
          })
        }]
      }}>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </CardHeader>
        <CardBody>
          <Title>Saldo disponível</Title>
          <Description>R$ 210.000.091,95</Description>
        </CardBody>
        <CardFooter>
          <Annotation>
            Transferência de R$ 18.000 recebida de Sergio Gama hohe às 06:00h
        </Annotation>
        </CardFooter>
      </Container>
    </PanGestureHandler>
  )
}