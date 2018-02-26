import React, { Component } from 'react'
import Reveal from 'reveal.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SuccessService from './SuccessService'
import trophy from './trophy.png'

let nbSuccess = 0

class Success extends Component {

  constructor(props) {
    super(props)
    this.state = {
      success: [],
    }
  }

  componentDidMount = () => {
    SuccessService.onSuccess(this.addSuccess)
  }

  addSuccess = (label) => {
    const id = ++nbSuccess
    const success = {
      id,
      label,
    }
    this.setState(
      { success: [...this.state.success, success]}
    )
    setTimeout(() => this.removeSuccess(id), 4000)
  }

  removeSuccess = (id) => {
    this.setState({
      success: this.state.success.filter(s => s.id !== id)
    })
  }

  render() {
    return (
      <div style={{position: 'absolute', bottom: 10, left: 'calc(50% - (50vw / 2))', width: '50vw'}}>
        <ReactCSSTransitionGroup
          transitionName="success"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {
            this.state.success.map(success => (
              <div key={success.id} style={{ display: 'flex', alignItems: 'center', borderRadius: 5, position: 'relative', zIndex: 8000, backgroundColor: '#333333', color:'white', padding: 20, margin: 5, height: 70 }}>
                <img alt='' src={trophy} style={{ width: 70 }}/>
                <div style={{ fontSize: 20, width: '100%', display: 'flex', justifyContent: 'center'}}>
                  {success.label}
                </div>
              </div>
            ))
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Success
