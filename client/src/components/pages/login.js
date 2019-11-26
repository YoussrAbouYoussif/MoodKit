import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authentication'
import { Button } from 'react-bootstrap'
import { MDBInput } from 'mdbreact'
import { InputAdornment } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { RemoveRedEye } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

const styles = theme => ({
  eye: {
    cursor: 'pointer'
  }
})

class PasswordInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      passwordIsMasked: true
    }
  }

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked
    }))
  }

  render() {
    const { classes } = this.props
    const { passwordIsMasked } = this.state

    return (
      <div className="md-form pb-3">
        <TextField
          placeholder="Password"
          type={passwordIsMasked ? 'password' : 'text'}
          {...this.props}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <RemoveRedEye
                  className={classes.eye}
                  onClick={this.togglePasswordMask}
                />
              </InputAdornment>
            )
          }}
        />
      </div>
    )
  }
}

PasswordInput.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired
}

PasswordInput = withStyles(styles)(PasswordInput)

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange1 = this.onChange1.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(user)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onChange1 = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { errors } = this.state
    const { password } = this.state

    return (
      <div>
        <br />
        <br />
        <div className="modal-dialog" role="document">
          <div className="modal-content form-elegant">
            <div className="modal-header text-center">
              <h3
                className="modal-title w-100 dark-grey-text font-weight-bold my-3"
                id="myModalLabel"
              >
                <div>
                  <strong> LOGIN</strong>
                </div>
              </h3>
            </div>
            <div className="modal-body mx-4">
              <div className="md-form mb-5">
                <div>
                  <MDBInput
                    type="email"
                    hint="example@hotmail.com"
                    className={
                      this.state.email.length === 0 ||
                      this.state.email.match(
                        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                      )
                        ? 'is-valid'
                        : 'is-invalid'
                    }
                    id="Form-email1"
                    //className="form-control validate"
                    name="email"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                  >
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please enter a valid email
                    </div>
                  </MDBInput>
                </div>
              </div>
              <div className="md-form pb-3">
                <PasswordInput
                  id="Form-pass1"
                  className={
                    this.state.password.length > 0 ? 'is-valid' : 'is-invalid'
                  }
                  onChange={this.onChange1}
                  name="password"
                  value={this.state.password}
                  style={{ width: '450px' }}
                >
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please enter your password
                  </div>
                </PasswordInput>
                <p className="font-small blue-text d-flex justify-content-end">
                  {' '}
                  <a href="forgotPassword" className="blue-text ml-1">
                    Forgot Password?
                  </a>
                </p>
              </div>
              <div className="text-center mb-3">
                <Button
                  variant="omar"
                  style={{
                    width: '120px',
                    height: '55px',
                    backgroundColor: '#a3dbf1'
                  }}
                  onClick={e => this.handleSubmit(e)}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </div>

            {/* <div className="modal-footer mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?{' '}
                <a href="/register" className="blue-text ml-1">
                  Signup
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login)
