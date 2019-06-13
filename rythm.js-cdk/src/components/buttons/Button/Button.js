import styled from 'styled-components'
import { withContainer } from '../../../utils'
import { darken } from 'polished'
import {
  primary,
  secondary,
  success,
  danger,
  white,
  background,
  shadowNeon,
} from '../../../styles'

const Button = styled.button`
  transition: 0.2s;
  padding: 10px;
  background-color: ${({ color = 'white' }) => color};
  text-align: center;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${({ color = 'white' }) => shadowNeon(color)};
  color: ${({ backgroundColor = 'white' }) => backgroundColor};
  text-transform: uppercase;
  :hover {
    color: inherit;
    background-color: transparent;
  }
`

export default withContainer({
  color: white,
  backgroundColor: background,
  justifyContent: 'center',
})(Button)

export const PrimaryButton = withContainer({
  color: primary,
  backgroundColor: background,
})(Button)

export const SecondaryButton = withContainer({
  color: secondary,
})(Button)

export const SuccessButton = withContainer({
  color: success,
  backgroundColor: background,
})(Button)

export const DangerButton = withContainer({
  color: danger,
})(Button)
