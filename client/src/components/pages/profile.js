import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import Image from '../../nada.jpeg'

import { MDBAnimation } from 'mdbreact'
import Quiz from '../../quiz.png'
import '../../App.css'

class Profile extends Component {
  onAnimationEnd(e) {
    document.location.href = '/firstQuestion'
  }

  logOut(e) {
    localStorage.setItem('isLoggedIn', false)
    if (localStorage.getItem('isLoggedIn') === 'false') {
      document.location.href = '/landingPage'
    }
  }

  changePassword(e) {
    document.location.href = '/changePassword'
  }

  render() {
    return (
      <div>
        <div
          style={{
            zIndex: '20',
            transform: 'translate3d(-200px,200px,20px)',
            position: 'sticky',
            display: 'flex'
          }}
        >
          <div>
            <button
              type="button"
              style={{
                zIndex: '30',
                transform: 'translate3d(350px,100px,30px)'
              }}
              class="btn btn-outline-secondary btn-rounded waves-effect"
              onClick={this.changePassword}
            >
              Change Password
            </button>
          </div>
          <MDBAnimation type="bounce" onClick={this.onAnimationEnd} count={300}>
            <img
              className="img-fluid"
              alt=""
              src={Quiz}
              style={{ marginLeft: '370px' }}
            />
          </MDBAnimation>
          <div>
            <button
              type="button"
              style={{ zIndex: '30', transform: 'translate3d(0,100px,30px)' }}
              class="btn btn-outline-secondary btn-rounded waves-effect"
              onClick={this.logOut}
            >
              Logout
            </button>
          </div>
        </div>

        <div
          className="bg"
          style={{
            zIndex: '0',
            position: 'sticky',
            display: 'flex'
          }}
        >
          <img
            src={Image}
            style={{
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
              position: 'sticky',
              transform: 'translate3d(0,-180px,0)'
            }}
          />
        </div>
      </div>
    )
  }
}

export default Profile
