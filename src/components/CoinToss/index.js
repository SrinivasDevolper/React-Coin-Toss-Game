import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imagesetUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  tossChange = () => {
    const lengthofTosses = Math.floor(Math.random() * 2)
    if (lengthofTosses === 0) {
      this.setState(prevHeads => ({
        imagesetUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        heads: prevHeads.heads + 1,
      }))
    } else {
      this.setState(prevTails => ({
        imagesetUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tails: prevTails.tails + 1,
      }))
    }
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
  }

  render() {
    const {imagesetUrl, total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imagesetUrl} alt="toss result" />
          <button type="button" onClick={this.tossChange}>
            Toss Coin
          </button>
          <div className="score-cont">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
