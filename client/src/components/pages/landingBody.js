import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'
import Image1 from '../layout/Image1.jpeg'
import Image2 from '../layout/Image2.jpg'
import Image3 from '../layout/Image3.jpeg'
import Image4 from '../layout/Image4.jpeg'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import axios from 'axios'
import setAuthToken from '../../actions/setAuthToken'
import swal from 'sweetalert'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Wave } from 'react-animated-text'

firebase.initializeApp({
  apiKey: 'AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk',
  authDomain: 'fir-auth-tutorial-ed11f.firebaseapp.com'
})

class LandingBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      gender: '',
      isSignedIn: false
    }
  }
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    console.log(this.state.isSignedIn)
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: user })
      if (this.state.isSignedIn) {
        this.setState({
          name: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email
        })
        var body = {
          name: this.state.name,
          email: this.state.email
        }
        axios
          .post('/routes/api/users/googleLogin', body)
          .then(res => {
            const token = res.data.data
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('isLoggedIn', true)
            setAuthToken(token)
            if (localStorage.getItem('isLoggedIn') === 'true') {
              document.location.href = '/profile'
              this.setState({ isSignedIn: false })
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
  props = {
    startStyle: { opacity: 0 },
    endStyle: { opacity: 1 }
  }
  login() {
    document.location.href = '/login'
  }
  register() {
    document.location.href = '/register'
  }
  render() {
    return (
      <div style={{ minHeight: '100hv' }}>
        <Carousel position="sticky" zIndex="0" style={{ minHeight: '100hv' }}>
          <Carousel.Item>
            <div>
              <img src={Image1} width="1250px" height="580px" />
            </div>
            <Carousel.Caption>
              <h3 style={{ color: '	#9932CC' }}>How are you feeling today?</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img src={Image2} width="1250px" height="580px" />
            </div>
            <Carousel.Caption>
              <h3 style={{ color: '	#9932CC' }}>
                Feeling lonely? We're there for you!
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img src={Image3} width="1250px" height="580px" />
            </div>
            <Carousel.Caption>
              <h3 style={{ color: '	#9932CC' }}>
                Feeling happy? We're supporting you!
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img src={Image4} width="1250px" height="580px" />
            </div>
            <Carousel.Caption>
              <h3 style={{ color: '	#9932CC' }}>
                Feeling down? We're here to motivate you!
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h1
          zIndex="3"
          text="MoodKit"
          style={{
            fontFamily: 'serif',
            fontSize: '80px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#4B0082',
            opacity: '1.0',
            transform: 'translate3d(460px,-300px,100px)'
          }}
        ></h1>

        <div>
          <Button
            variant="outline-purple"
            className="btn-block btn-outline-purple z-depth-1a"
            href="/login"
            style={{
              transform: 'translate3d(500px,-490px,0px)',
              width: '80px'
            }}
          >
            <font color="purple" fontSize="20px">
              {' '}
              Login
            </font>
          </Button>
        </div>
        <br />

        <Button
          variant="outline-purple"
          block
          href="/Register"
          style={{ transform: 'translate3d(620px,-565px,0px)', width: '100px' }}
        >
          <font color="purple" fontSize="20px">
            {' '}
            Register
          </font>
        </Button>

        <br />

        {this.state.isSignedIn ? (
          <span></span>
        ) : (
          <div
            style={{
              transform: 'translate3d(490px,-550px,0px)',
              width: '240px'
            }}
          >
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
              transform="translate3d(615px,-350px,0px)"
              style={{ width: '100px' }}
            />
          </div>
        )}
      </div>
    )
  }
}

export default LandingBody
