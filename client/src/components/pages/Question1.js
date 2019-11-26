import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Question } from 'react-multiple-choice'
import { MDBCard, MDBCardBody } from 'mdbreact'
class Question1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionName: '',
      answers: [],
      questionNumber: 1,
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
    choosenAnswersArray[0] = choosenAnswer.target.value
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
                aria-label="question1"
                name="question1"
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
              href="/secondQuestion"
              style={{ marginRight: '300px' }}
              variant="outline-purple"
            >
              Next
              <Link to={'/secondQuestion'}></Link>
            </Button>
          </MDBCardBody>
        </MDBCard>
      </div>
    )
  }
}
export default Question1
