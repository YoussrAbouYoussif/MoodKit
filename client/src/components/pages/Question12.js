import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Question } from 'react-multiple-choice'
import { MDBCard, MDBCardBody } from 'mdbreact'
import P1 from '../../p1.jpg'

class Question12 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disable:true,
      questionName: '',
      answers: [],
      questionNumber: 12,
      choosenAnswer: null
    }
  }
  componentDidMount() {
    axios
      .get('/routes/api/questions/getByNumber/' + this.state.questionNumber)
      .then(res => {
        console.log(res.data.data)
        this.setState({
          questionName: res.data.data.questionName,
          answers: res.data.data.answers
        })
      })
      .catch(res => {
        console.log(res)
      })
  }

  handleChange = choosenAnswer => {
    var choosenAnswersArray = []
    choosenAnswersArray = JSON.parse(localStorage.getItem('answers'))
    choosenAnswersArray[10] = choosenAnswer.target.value
    this.setState({disable:false})
    localStorage.setItem('answers', JSON.stringify(choosenAnswersArray))
    console.log(localStorage.getItem('answers'))
  }

  handleClick = () => {
    var choosenAnswersArray = []
    choosenAnswersArray = JSON.parse(localStorage.getItem('answers'))
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    )
    var payload = {
      arrayOfAnswers: choosenAnswersArray
    }
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('jwtToken')
    console.log('world')
    axios
      .put('/routes/api/users/UpdateUser/', payload, {
        headers: { Authorization: localStorage.getItem('jwtToken') }
      })
      .then(res => {
        console.log(res)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    const { choosenAnswer } = this.state
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
            transform: 'translate3d(0,-680px,30px)',
            width: '400px'
          }}
        >
          <MDBCard
            style={{ width: '500px', height: '500px', marginLeft: '340px' }}
          >
            <MDBCardBody>
              <FormControl component="fieldset">
                <Question>
                  <h2>
                    <font color="purple">
                      <strong>{this.state.questionName}</strong>
                    </font>
                  </h2>
                </Question>
                <RadioGroup
                  aria-label="question12"
                  name="question12"
                  value={choosenAnswer}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="a"
                    control={<Radio color="purple" />}
                    label={this.state.answers[0]}
                  />
                  <FormControlLabel
                    value="b"
                    control={<Radio color="purple" />}
                    label={this.state.answers[1]}
                  />
                  <FormControlLabel
                    value="c"
                    control={<Radio color="purple" />}
                    label={this.state.answers[2]}
                  />
                  <FormControlLabel
                    value="d"
                    control={<Radio color="purple" />}
                    label={this.state.answers[3]}
                  />
                  <FormControlLabel
                    value="e"
                    control={<Radio color="purple" />}
                    label={this.state.answers[4]}
                  />
                  <FormControlLabel
                    value="f"
                    control={<Radio color="purple" />}
                    label={this.state.answers[5]}
                  />
                </RadioGroup>
              </FormControl>
              <Button
                onClick={this.handleClick()}
                href="/thirteenthQuestion"
                style={{ marginRight: '300px' }}
                variant="outline-purple"
                disabled={this.state.disable}
              >
                Next
              </Button>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    )
  }
}
export default Question12
