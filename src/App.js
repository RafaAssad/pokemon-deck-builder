import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import DeckList from './pages/deckList';
import Provider from './contextAPI/Provider';
import './App.css';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/decks" component={DeckList} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
