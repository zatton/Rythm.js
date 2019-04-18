import styled from 'styled-components'
import { primary, secondary, success, danger } from '../../styles/colors'
import { withContainer } from '../../utils'

export const Box = styled.div`
  background-color: transparent;
  border: solid 1px ${({ color }) => color};
  border-radius: 5px;
  padding: 10px;
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
