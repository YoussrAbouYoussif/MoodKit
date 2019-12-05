import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { MDBAnimation } from 'mdbreact'
import Quiz from '../../quiz.png'
import P1 from '../../p1.jpg'
import firebase from 'firebase'
import axios from 'axios';
import swal from 'sweetalert'

class Profile extends Component {
  onAnimationEnd(e) {
    document.location.href = '/firstQuestion'
  }

  logOut(e) {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('jwtToken')
    var apiBaseUrl = '/routes/api/users/SpecificUser'

    axios
      .get(apiBaseUrl, {
        headers: { Authorization: localStorage.getItem('jwtToken') }
      })
      .then(res => {
        console.log(res)
        var specificUser = res.data.data
        if (
          specificUser.password === 'Not Needed' &&
          specificUser.gender === 'Null'
        ) {
          firebase.auth().signOut()
          localStorage.setItem('isLoggedIn', false)
          if (localStorage.getItem('isLoggedIn') === 'false') {
            document.location.href = '/'
          }
        } else {
          localStorage.setItem('isLoggedIn', false)
          if (localStorage.getItem('isLoggedIn') === 'false') {
            document.location.href = '/'
          }
        }
      })
      .catch(err => swal(err.response.data.errmsg || err.response.data))
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
              class="btn btn-transparent btn-rounded waves-effect"
              onClick={this.changePassword}
            >
              <font color="white">Change Password</font>
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
              class="btn btn-transparent btn-rounded waves-effect"
              onClick={this.logOut}
            >
              <font color="white">Logout</font>
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
            src={P1}
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
