import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import {registerUser}  from '../../actions/authentication';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import 'materialize-css';
import Button from '@material-ui/core/Button';
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from 'mdbreact';
const imgUrl = '../../Background.jpg'
const styles = (theme) => ({
	root: {
        width: '90%'
        
	},
	button: {
		marginTop: theme.spacing.unit,
		marginRight: theme.spacing.unit
    }
})
class Register extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            name:'',
            gender:"Male",
            email:'',
            password:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });

    }
    handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
    }
    handleSubmit(e) {
        e.preventDefault();
        var payload = {
            name: this.state.name,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password
        }
        this.props.registerUser(payload, this.props.history);
    }
    componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
    }
    validateUser() {
		return (
            this.state.name.length <= 50 &&
			this.state.email.length <= 60 &&
			this.state.gender.length >= 4 &&
			this.state.gender.length <= 6 &&
			this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
            this.state.password.length >= 8 &&
            this.state.password.length <= 50
		);
    }
    render() {
		const { classes } = this.props;
		const { errors } = this.state;

		return (
			<div>
				<form>  
                <MDBCard style={{width:"500px" ,marginLeft:"480px" ,marginTop:"100px"}}>
					
					<MDBCardBody>
                    <div style={{marginLeft:"150px"}}>
					    <h1 >Register</h1>	
					</div>

					<div className="form-group">
						<MDBInput
							label="Name"
							type="text"
							className={this.state.name.length >= 3 && this.state.name.length <= 50 ? (
											'is-valid'
										) : (
											'is-invalid'
										)}
							name="name"
                            onChange={this.changeHandler}
                            style={{width:"250px"}}
							value={this.state.name}
							required
						/>
					</div>
					<br />
                    <MDBRow>
						<MDBCol>
							<div className="form-group">
								<label htmlFor="gender">Gender</label>
								<select
									className="form-control"
									id="exampleFormControlSelect1"
									name="gender"
									onChange={this.changeHandler}
									value={this.state.gender}
									style={{ width: '250px' }}
								>
									<option>Male</option>
									<option>Female</option>
								</select>
							</div>
						</MDBCol>
					</MDBRow>
                    <br />
                    <div className="form-group">
						<MDBInput
							label="Email"
							type="email"
							className={this.state.email.length <= 60 && this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? (
                                'is-valid'
                            ) : (
                                'is-invalid'
                            )}
							name="email"
							onChange={this.changeHandler}
                            value={this.state.email}
                            style={{width:"250px"}}
							required
						/>
					</div>
					<br />

					<div className="form-group">
						<MDBInput
							label="Password"
							type="password"
							className={this.state.password.length >= 8 &&
                                this.state.password.length <= 50? ('is-valid'):('is-invalid')}
							name="password"
							onChange={this.changeHandler}
                            value={this.state.password}
                            style={{width:"250px"}}
							required
						/>
					</div>
					<br />
					<div className="form-group">
						<Button
							type="submit"
							disabled={!this.validateUser()}
							onClick={(e) => this.handleSubmit(e)}
							className="btn-block btn-rounded z-depth-1a"
							variant="omar"
							style={{ width: '100px', backgroundColor: '#a3dbf1' }}
						>
							Submit
						</Button>
					</div>
                    </MDBCardBody>
				</MDBCard>

				</form>
                </div>
        )}
}
Register.propTypes = {
	classes: PropTypes.object
};

Register.propTypes = {
	registerUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	errors: state.errors
});

//export default Register
export default withStyles(styles)(connect(mapStateToProps, { registerUser })(withRouter(Register)));