import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MDBRow, MDBCol, MDBInput } from 'mdbreact'
import { registerUser } from '../../actions/authentication'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import 'materialize-css'
import { Button } from 'react-bootstrap'
import { MDBCard, MDBCardBody } from 'mdbreact'
import P1 from '../../p1.jpg'

const styles = theme => ({
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
    super(props)
    this.state = {
      name: '',
      gender: 'Male',
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    var payload = {
      name: this.state.name,
      gender: this.state.gender,
      email: this.state.email,
      password: this.state.password
    }
    this.props.registerUser(payload, this.props.history)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }
  validateUser() {
    return (
      this.state.name.length <= 50 &&
      this.state.email.length <= 20 &&
      this.state.gender.length >= 4 &&
      this.state.gender.length <= 6 &&
      this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
      this.state.password.length >= 8 &&
      this.state.password.length <= 50
    )
  }
  render() {
    const { classes } = this.props
    const { errors } = this.state

    return (
      <div>
        <div>
          <img
            src={P1}
            style={{
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
              position: 'sticky',
              zIndex: '0'
              //transform: 'translate3d(0,-180px,0)'
            }}
          />
        </div>
        <div
          style={{
            zIndex: '30',
            transform: 'translate3d(0,-800px,30px)',
            width: '400px',
            marginLeft: '350px'
          }}
        >
          <form>
            <MDBCard
              style={{
                width: '400px',
                height: '600px',
                marginTop: '100px'
              }}
            >
              <MDBCardBody>
                <div style={{ marginLeft: '100px' }}>
                  <h1>
                    <font color="purple">
                      <strong>Register</strong>
                    </font>
                  </h1>
                </div>

                <div className="form-group">
                  <MDBInput
                    label="Name"
                    type="text"
                    className={
                      this.state.name.length >= 3 &&
                      this.state.name.length <= 50
                        ? 'is-valid'
                        : 'is-invalid'
                    }
                    name="name"
                    onChange={this.changeHandler}
                    style={{ width: '350px' }}
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
                        style={{ width: '350px' }}
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
                    className={
                      this.state.email.length <= 20 &&
                      this.state.email.match(
                        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                      )
                        ? 'is-valid'
                        : 'is-invalid'
                    }
                    name="email"
                    onChange={this.changeHandler}
                    value={this.state.email}
                    style={{ width: '350px' }}
                    required
                  />
                </div>
                <br />

                <div className="form-group">
                  <MDBInput
                    label="Password"
                    type="password"
                    className={
                      this.state.password.length >= 8 &&
                      this.state.password.length <= 50
                        ? 'is-valid'
                        : 'is-invalid'
                    }
                    name="password"
                    onChange={this.changeHandler}
                    value={this.state.password}
                    style={{ width: '350px' }}
                    required
                  />
                </div>
                <br />
                {/* className="form-group" */}
                <div>
                  <Button
                    type="submit"
                    disabled={!this.validateUser()}
                    onClick={e => this.handleSubmit(e)}
                    className="btn-block btn-outline-purple z-depth-1a"
                    variant="outline-purple"
                    style={{ width: '100px' }}
                  >
                    Submit
                  </Button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </form>
        </div>
      </div>
    )
  }
}
Register.propTypes = {
  classes: PropTypes.object
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
})

//export default Register
export default withStyles(styles)(
  connect(mapStateToProps, { registerUser })(withRouter(Register))
)
