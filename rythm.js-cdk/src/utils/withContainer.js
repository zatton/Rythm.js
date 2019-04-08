import React from 'react'

const getExecuteResult = (execute, props) => {
  if (typeof execute === 'function') return execute(props)
  return execute
}

const withContainer = execute => Component => props => (
  <Component {...getExecuteResult(execute, props)} {...props} />
)

export default withContainer
