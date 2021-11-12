import React from "react";
import OrderForm from './Form'
import Home from './Home'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Pizza' component={OrderForm} />
    </Switch>
  )
}


export default App;