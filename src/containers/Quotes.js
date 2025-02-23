import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {/* {this.props.quotes.map((quote, index) => (
                <li key={index}>
                  {quote.content} */}
                  {/* <QuoteCard quote={quote}/> */}
                {/* </li> */}
               {/* ))} */}
               {/* {this.props.quotes.map((quote, index) => (
                <li key={index}>
                  {quote.content}
                  <QuoteCard quote={quote}/>
                </li>
               ))} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
// export default connect()(Quotes);


const mapStateToProps = state => {
  return { quotes: state.quotes }
}
export default connect(mapStateToProps)(Quotes);
