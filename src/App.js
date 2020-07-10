import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {QUOTES} from './Quotes'

const getRandomQuote = () => {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)]
}

class Card extends React.Component {
  constructor(props) {
    const item = getRandomQuote()
    super(props)
    this.state = {
      quote: item.quote,
      author: item.author
    }
    this.getNewQuote = this.getNewQuote.bind(this)
  }
  getNewQuote() {
    const item = getRandomQuote()
    this.setState({
      quote: item.quote,
      author: item.author
    })
  }
  render() {
    return (
      <div className='flex-container'>
        <div className='card styleCard' id='quote-box'>
        <div className='card-body'>
          <div className='quote'>
            <h2 className='card-title' id='text'>«{this.state.quote}»</h2>
            <p className='card-text' id='author'>{this.state.author}</p>
          </div>
          <div className='button-row'>
            <a className='btn btn-info' id='tweet-quote' target='_blank' rel='noopener noreferrer' href={`https://twitter.com/intent/tweet?&text="${this.state.quote}" ${this.state.author}`}>tweet</a>
          <button className='btn btn-primary' id='new-quote' onClick={this.getNewQuote}>New quote</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Card />
    </div>
  )
}

export default App
