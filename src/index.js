import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameFrame from './components/game-frame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameFrame />, document.getElementById('root'));
registerServiceWorker();
