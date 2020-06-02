import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: ['red','orange','yellow','green', 'blue', 'indigo', 'violet'],
      color: 0,

      quotes: [
        {"quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
        {"quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
        {"quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
        {"quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
        {"quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
        {"quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
        {"quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
        {"quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},
        {"quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
        {"quote":"We must balance conspicuous consumption with conscious capitalism.","author":"Kevin Kruse"},
        {"quote":"Life is what happens to you while you’re busy making other plans.","author":"John Lennon"},
        {"quote":"We become what we think about.","author":"Earl Nightingale"},
      ],
      quote: 0,

      tweet: "https://twitter.com/intent/tweet?text="
    }

    this.setColor = this.setColor.bind(this);
    this.setQuote = this.setQuote.bind(this);
    this.setTweet = this.setTweet.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setColor() {
    this.setState({
      color: Math.floor(Math.random() * this.state.colors.length)
    });
  }

  setQuote() {
    this.setState({
      quote: Math.floor(Math.random() * this.state.quotes.length)
    });
  }

  setTweet() {
    this.setState({
      tweet: "https://twitter.com/intent/tweet?text=" + 
        this.state.quotes[this.state.quote].quote + " - " + this.state.quotes[this.state.quote].author
    });
  }

  handleClick(e) {   
    e.preventDefault();    
    this.setColor();  
    this.setQuote();
  }

  render () {
    return ( 
      <div className="App" style={{backgroundColor: this.state.colors[this.state.color]}}>
        <div id="quote-box">
          <h1 id="text">"{this.state.quotes[this.state.quote].quote}"</h1>
          <h1 id="author">{this.state.quotes[this.state.quote].author}</h1>
          <a onClick={this.setTweet} id="tweet-quote" href={this.state.tweet} data-text="hello" 
            target="_blank" rel="noopener noreferrer">Tweet this quote</a>
          <button id="new-quote" onClick={this.handleClick} style={{color: this.state.colors[this.state.color]}}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
