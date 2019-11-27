import React, { Component } from 'react';
import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from './setAuthToken';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';

export const registerUser = (user) => (dispatch) => {
	axios
		.post('/routes/api/users/register', user)
		.then(function(response) {
					swal({
						title: 'Good job!',
						text:
							'The Account has been created successfully! A verification email has been sent to you. Please check your email to verify the account!',
						icon: 'success',
						button: 'Aww yess!'
					});
		})
		.catch((err) => {
			swal(err.response.data.error || err.response.data);
		});
};
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};