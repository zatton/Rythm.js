import React from 'react'
import styled from 'styled-components'
import {
  primary,
  secondary,
  success,
  danger,
  white,
  shadowNeon,
} from '../../../styles'
import { withContainer } from '../../../utils'
import { Content } from '../../layout'

const BoxContainer = styled.div`
  background-color: transparent;
  box-shadow: ${({ color = white }) => shadowNeon(color)};
  border-radius: 5px;
`
const Box = ({ children, ...props }) => (
  <BoxContainer {...props}>
    <Content>{children}</Content>
  </BoxContainer>
)

export default Box

export const PrimaryBox = withContainer({
  color: primary,
})(Box)

export const SecondaryBox = withContainer({
  color: secondary,
})(Box)

export const SuccessBox = withContainer({
  color: success,
})(Box)

export const DangerBox = withContainer({
  color: danger,
})(Box)
