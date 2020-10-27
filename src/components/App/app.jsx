/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ArnoldCharacters, SpecificCharacter } from '../../containers/heyArnold';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ArnoldCharacters} />
          <Route path="/detail/:_id" component={SpecificCharacter} />
        </Switch>
      </Router>
    </>
  );
}
