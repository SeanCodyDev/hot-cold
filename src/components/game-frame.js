import React from 'react';

import GuessBox from './guess-box';
import PreviousList from './previous-list';
import ResultBox from './result-box';


import './game-frame.css';

export default class GameFrame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: Math.floor(Math.random() * 100) + 1,
            guessesArray: []
    }
}

    _handleSubmit(data){
        console.log('The user guessed:', data);

        
    }

    addGuesses(guess){
        
    }

    render() {


        return (
            <div className="game-frame">
                <h2>Hot or Cold</h2>
                <GuessBox _handleSubmitButton={e => this._handleSubmit } array={this.guessesArray}/>
                <PreviousList />
                <ResultBox />
            </div>

        );
    }

};
