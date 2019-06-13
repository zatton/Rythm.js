import React from 'react'
import { Background, Content } from '../layout'

export const Showcase = ({ children, ...props }) => (
  <Background>
    <Content>{children}</Content>
  </Background>
)
