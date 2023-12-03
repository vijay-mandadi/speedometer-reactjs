// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prev => {
      if (prev.count < 200) {
        return {count: prev.count + 10}
      }
      return null
    })
  }

  decrement = () => {
    this.setState(prev => {
      if (prev.count > 0) {
        return {count: prev.count - 10}
      }
      return null
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="paragraph">Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="button1" onClick={this.increment} type="button">
            Accelerate
          </button>
          <button className="button2" onClick={this.decrement} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
