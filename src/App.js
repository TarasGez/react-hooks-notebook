import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';

// Components
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './contex/alert/AlertState';
import { FirebaseState } from './contex/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path = {'/'} exact component = { Home } />
              <Route path = {'/about'} component = { About } />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
