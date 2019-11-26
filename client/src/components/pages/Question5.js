import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Question } from 'react-multiple-choice'
import { MDBCard, MDBCardBody } from 'mdbreact'

class Question5 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionName: '',
      answers: [],
      questionNumber: 5,
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
    choosenAnswersArray[4] = choosenAnswer.target.value
    localStorage.setItem('answers', JSON.stringify(choosenAnswersArray))
    console.log(localStorage.getItem('answers'))
  }

  render() {
    const { choosenAnswer } = this.state
    return (
      <div>
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
                aria-label="question5"
                name="question5"
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
              href="/sixthQuestion"
              style={{ marginRight: '300px' }}
              variant="outline-purple"
            >
              Next
              <Link to={'/sixthQuestion'}></Link>
            </Button>
          </MDBCardBody>
        </MDBCard>
      </div>
    )
  }
}
export default Question5
