import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { Addproduct} from './components/Addproduct';
import { Editproduct} from './components/Editproduct';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>  { /*Ensures that only one component is rendered at a time */ }
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Addproduct} exact />
        <Route path="/edit/:name" component={Editproduct} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
