import styled from 'styled-components'
import { primary, secondary, success, danger } from '../../styles/colors'
import { withContainer } from '../../utils'
import { Content } from '../layout'

export const Box = styled(Content)`
  background-color: transparent;
  border: solid 1px ${({ color }) => color};
  border-radius: 5px;
  color: ${({ color }) => color};
`

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
