import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import Icon from '@expo/vector-icons/MaterialIcons'

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles'

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      })
    }}>
      <Code>
        <QRCode
          value="https://alexanderaugusto.com"
          size={80}
          color="#FFFFFF"
          backgroundColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFFFFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFFFFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFFFFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFFFFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => { }}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}