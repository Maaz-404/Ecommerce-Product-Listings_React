import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { Addemployee } from './components/Addemployee';
import { Editemployee } from './components/Editemployee';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>  { /*Ensures that only one component is rendered at a time */ }
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Addemployee} exact />
        <Route path="/edit/:name" component={Editemployee} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
