import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import axios from 'axios';
import setAuthToken from '../../actions/setAuthToken';
import swal from 'sweetalert';

firebase.initializeApp({
  apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
  authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
})

class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        email:'',
        password:'',
        gender:'',
        isSignedIn:false
    }
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    console.log(this.state.isSignedIn)
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: user})
      if(this.state.isSignedIn)
      {
        this.setState({name: firebase.auth().currentUser.displayName, email:firebase.auth().currentUser.email})
        var body={
          name:this.state.name,
          email:this.state.email
          }
      axios.post('/routes/api/users/googleLogin',body)
      .then(res => {
        const token = res.data.data
        localStorage.setItem('jwtToken', token)
        localStorage.setItem('isLoggedIn', true)
        setAuthToken(token)
        if (localStorage.getItem('isLoggedIn') === 'true') {
          document.location.href = '/profile'
          this.setState({isSignedIn:false})
        }
      })
      .catch(err => {
        localStorage.setItem('isLoggedIn', false)
        swal('Wrong Email or Password!')
        return err
      })
    }
    })
    
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default GoogleLogin