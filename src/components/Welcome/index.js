// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>

        <button type="button" className="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
