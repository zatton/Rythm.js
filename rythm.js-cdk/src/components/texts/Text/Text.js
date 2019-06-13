import styled from 'styled-components'
import { withContainer } from '../../../utils'
import {
  primary,
  secondary,
  success,
  danger,
  white,
  background,
  shadowNeon,
} from '../../../styles'

const Text = styled.span`
  font-family: 'Courier';
  text-shadow: ${({ color }) => shadowNeon(color)};
  color: ${white};
`

export default withContainer({
  color: white,
  backgroundColor: background,
})(Text)

export const SuccessText = withContainer({
  color: success,
})(Text)

export const DangerText = withContainer({
  color: danger,
})(Text)
