import React, { Component } from 'react'
import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_USER } from './types'
import setAuthToken from './setAuthToken'
import jwt_decode from 'jwt-decode'
import swal from 'sweetalert'

export const loginUser = user => dispatch => {
  axios
    .post('/routes/api/users/login', user)
    .then(res => {
      const token = res.data.data
      localStorage.setItem('jwtToken', token)
      console.log(token)
      console.log(res.data.data)
      localStorage.setItem('isLoggedIn', true)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
      console.log(res.data)
      console.log(localStorage.getItem('isLoggedIn'))
      if (localStorage.getItem('isLoggedIn') === 'true') {
        document.location.href = '/profile'
      }
    })
    .catch(err => {
      console.log(err)
      localStorage.setItem('isLoggedIn', false)
      swal('Wrong Email or Password!')
      return err
    })
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
