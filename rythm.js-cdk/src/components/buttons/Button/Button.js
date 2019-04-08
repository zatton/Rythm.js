import React from 'react'
import styled from 'styled-components'
// import withContainer from '../../utils/withContainer'

const Button = styled.button`
  transition: 0.2s;
  padding: 10px;
  background-color: transparent;
  border: solid 1px;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ color }) => color};

  :hover {
    border-color: transparent;
    color: ${({ backgroundColor = 'white' }) => backgroundColor};
    background-color: ${({ color = 'black' }) => color};
  }
`

export default () => <Button />
