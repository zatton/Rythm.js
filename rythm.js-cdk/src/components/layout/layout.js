import styled, { css } from 'styled-components'
import { withContainer } from '../../utils'
import { background, white } from '../../styles/colors'
import { Text } from '../texts'

const getFlexValue = value =>
  !value
    ? '1 1 auto'
    : `${parseFloat(value)}` !== value
    ? `0 0 ${value}`
    : `${value} 1 0%`

export const Flex = styled(Text)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${({ layout }) =>
    (layout || '').split(' ').map(
      (value, index) => css`
        & > :nth-child(${index + 1}n) {
          flex: ${getFlexValue(value)};
        }
      `
    )};
  ${({ gap = '15px', direction }) =>
    css`
      & > :not(:last-child) {
        margin-${direction === 'column' ? 'bottom' : 'right'}: ${gap};
      }
    `};
`

export const Rows = withContainer({
  direction: 'column',
})(Flex)

export const Cols = withContainer({
  direction: 'rows',
})(Flex)

export const Background = styled(Rows)`
  background-color: ${({ backgroundColor = background }) => backgroundColor};
  color: ${white};
`

export const Content = styled(Rows)`
  padding: 10px;
`
