import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './components/pages/Register'
import Question1 from './components/pages/Question1'
import Question2 from './components/pages/Question2'
import Question3 from './components/pages/Question3'
import Question4 from './components/pages/Question4'
import Question5 from './components/pages/Question5'
import Question6 from './components/pages/Question6'
import Question7 from './components/pages/Question7'
import Question8 from './components/pages/Question8'
import Question9 from './components/pages/Question9'
import Question10 from './components/pages/Question10'
import Question11 from './components/pages/Question11'
//import Google from './components/pages/GoogleLogin' 
import Login from './components/pages/login'
import Profile from './components/pages/profile'
import ChangePassword from './components/pages/changePassword'
import LandingBody from './components/pages/landingBody';
import Result from './components/pages/Result';



class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Provider store={store}>
        <Router>
        <Route exact path="/register"
            render={(props) => <Register {...props} />} />
          <Route exact path="/firstQuestion"
            render={(props) => <Question1 {...props} />} />
            <Route exact path="/secondQuestion"
            render={(props) => <Question2 {...props} />} />
            <Route exact path="/thirdQuestion"
            render={(props) => <Question3 {...props} />} />
            <Route exact path="/fourthQuestion"
            render={(props) => <Question4 {...props} />} />
            <Route exact path="/fifthQuestion"
            render={(props) => <Question5 {...props} />} />
            <Route exact path="/sixthQuestion"
            render={(props) => <Question6 {...props} />} />
            <Route exact path="/seventhQuestion"
            render={(props) => <Question7 {...props} />} />
            <Route exact path="/eighthQuestion"
            render={(props) => <Question8 {...props} />} />
            <Route exact path="/ninthQuestion"
            render={(props) => <Question9 {...props} />} />
            <Route exact path="/tenthQuestion"
            render={(props) => <Question10 {...props} />} />
            <Route exact path="/eleventhQuestion"
            render={(props) => <Question11 {...props} />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/changePassword" component={ChangePassword} />
            <Route	exact path="/"
				    render={(props) => <LandingBody {...props} />} />
			      <Route exact path="/result"
				    render={(props) => <Result {...props} />}/>
        </Router>
        </Provider>
      </div>
    )
  }
}

export default App
