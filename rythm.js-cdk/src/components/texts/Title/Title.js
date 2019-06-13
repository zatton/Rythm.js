import styled from 'styled-components'
import { withContainer } from '../../../utils'
import { success, danger, white, background, shadowNeon } from '../../../styles'

const titleNeon = color => `2px 0 3px ${color}, -2px 0 3px ${color}, 0 2px 3px ${color}, 0 -2px 3px ${color},
    1px 1px ${color}, -1px -1px 3px ${color}, 1px -1px 3px ${color}, -1px 1px 3px ${color},
    ${shadowNeon(color, 2)}`

const Title = styled.h1`
  color: ${background};
  font-family: 'Courier';
  text-shadow: ${({ color = white }) => titleNeon(color, 2)};
`

export default Title.withComponent('h3')
