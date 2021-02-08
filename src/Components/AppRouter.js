import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import App from '../App';
import App2 from './App2';
import { App3 } from './App3';
import { App4 } from './App4';
import { App5 } from './App5';


import { Login } from './Login';
import { Movie2 } from './Movie2';
import { Registrar } from './Registrar';


export const AppRouter = () => {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Home" component={App} />
          <Route path="/Registrar" component={Registrar} />

          <Route path="/Pagina2" component={App2} />
          <Route path="/Pagina3" component={App3} />
          <Route path="/Pagina4" component={App4} />
          <Route path="/Pagina5" component={App5} />

          <Redirect to="/Login" component={Login} />

        </Switch>


      </div>


    </Router>
  )
}
