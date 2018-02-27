import React from 'react';

import './guess-box.css';

export default class GuessBox extends React.Component {

  constructor(props) {
  	super(props);
    this._handleSubmitButton = this._handleSubmitButton.bind(this);
  }

  _handleSubmitButton(event) {
    event.preventDefault();

    const NumInputValue = this.refs.input.value;
    console.log(NumInputValue);

    this.props._handleSubmitButton(NumInputValue);


  }

  render() {

      return (
        <form>
            <label htmlFor="search">Guess</label>
            <input ref="input" placeholder="42" 
                 />
            <input type="submit" onClick={this._handleSubmitButton} />
        </form>
    );
  }
};