import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewDeck from './pages/newDeck';
import DeckList from './pages/deckList';
import Details from './pages/deckDetails';
import Provider from './contextAPI/Provider';
import './App.css';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={DeckList} />
            <Route path="/deckdetails/:id" component={Details}/>
            <Route path="/newdeck" component={NewDeck} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
