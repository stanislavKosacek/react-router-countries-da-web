import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CountryDetail } from './components/CountryDetail';
import { CountrySelect } from './components/CountrySelect';
import { Home } from './components/Home';

import './style.css';

const App = () => (
  <Router>
    <header className="header">
      <ul>
        <li>
          <Link to="/">Úvod</Link>
        </li>
        <li>
          <Link to="/vyber-zeme">Výběr země</Link>
        </li>
      </ul>
    </header>
    <main>
      <Switch>
        <Route path="/vyber-zeme" exact>
          <CountrySelect />
        </Route>
        <Route path="/detail-zeme/:name" exact>
          <CountryDetail />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </main>
  </Router>
);

render(<App />, document.querySelector('#app'));
