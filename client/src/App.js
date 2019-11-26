import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import logo from './logo.svg'
import './App.css'
import Login from './components/pages/login'
import Profile from './components/pages/profile'
import Test from './components/pages/test'
import ChangePassword from './components/pages/changePassword'
import Quiz from './components/pages/quizNow'
import Nada from './components/pages/nada'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/changePassword" component={ChangePassword} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/nada" component={Nada} />
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App
