import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import axios from 'axios';
import P1 from '../../p1.jpg'
import food from '../layout/food.jpg';
import song from '../layout/song.jpg';
import quote1 from '../layout/quote1.png';
import book11 from '../layout/book11.png';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Button } from 'react-bootstrap'

class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {
            food:'',
            song:'',
            quote:'',
            saidBy:'',
            book:'',
            bookDescription:'',
            moodName:''
		};

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios.get('/routes/api/users/CalculateScore/', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((response) => {
				this.setState({
                    food:response.data.activities[0],
                    song:response.data.activities[1],
                    quote:response.data.activities[2],
                    saidBy:response.data.activities[3],
                    book:response.data.activities[4],
                    bookDescription:response.data.activities[5],
                    moodName:response.data.moodName
				});
            });
	}
    buttonOnClick(e){
        axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('jwtToken')
    var apiBaseUrl = '/routes/api/users/SpecificUser'

    axios
      .get(apiBaseUrl, {
        headers: { Authorization: localStorage.getItem('jwtToken') }
      })
      .then(res => {
        var specificUser = res.data.data
        if (
          specificUser.password === 'Not Needed' &&
          specificUser.gender === 'Null'
        ) {
            document.location.href = '/yourProfile'
        }
        else{
            document.location.href = '/profile'
        }
    })
}
	render() {
        var Happy=(
        <div style=
            {
                {
                 fontFamily:"serif",
                 fontStyle:"italic",
                 transform:'translate3d(590px,-140px,0)',
                 color:'black'
                }
            }>
                
                <h3
                style={{fontWeight:"bold", fontSize:"45px",transform:"translate3d(-20px,0px,0)",color:"	#800080"}} 
                right="150px"
                left="300px"
                color="red"
                >
                    Happy
                </h3>
            </div>
        );
        var Sad=(
            <div style=
                {
                    {
                     fontFamily:"serif",
                     fontStyle:"italic",
                     transform:'translate3d(590px,-140px,0)',
                     color:'black'
                    }
                }>
                    
                    <h3
                    style={{fontWeight:"bold", fontSize:"45px",transform:"translate3d(10px,0px,0)",color:"	#800080"}} 
                    right="150px"
                    left="300px"
                    color="red"
                    >
                        Sad
                    </h3>
                </div>
            );
            var Lonely=(
                <div style=
                    {
                        {
                         fontFamily:"serif",
                         fontStyle:"italic",
                         transform:'translate3d(590px,-140px,0)',
                         color:'black'
                        }
                    }>
                        
                        <h3
                        style={{fontWeight:"bold", fontSize:"45px",transform:"translate3d(-20px,0px,0)",color:"	#800080"}} 
                        right="150px"
                        left="300px"
                        color="red"
                        >
                            Lonely
                        </h3>
                    </div>
                );
                var Frustrated=(
                    <div style=
                        {
                            {
                             fontFamily:"serif",
                             fontStyle:"italic",
                             transform:'translate3d(590px,-140px,0)',
                             color:'black'
                            }
                        }>
                            
                            <h3
                            style={{fontWeight:"bold", fontSize:"45px",transform:"translate3d(-55px,0px,0)",color:"	#800080"}} 
                            right="150px"
                            left="300px"
                            color="red"
                            >
                                Frustrated
                            </h3>
                        </div>
                    );
                    var Stressed=(
                        <div style=
                            {
                                {
                                 fontFamily:"serif",
                                 fontStyle:"italic",
                                 transform:'translate3d(590px,-140px,0)',
                                 color:'black'
                                }
                            }>
                                
                                <h3
                                style={{fontWeight:"bold", fontSize:"45px",transform:"translate3d(-35px,0px,0)",color:"	#800080"}} 
                                right="150px"
                                left="300px"
                                color="red"
                                >
                                    Stressed
                                </h3>
                            </div>
                        );
                        var Depressed=(
                            <div style=
                                {
                                    {
                                     fontFamily:"serif",
                                     fontStyle:"italic",
                                     transform:'translate3d(590px,-140px,0)',
                                     color:'black'
                                    }
                                }>
                                    
                                    <h3
                                    style={{fontWeight:"bold", fontSize:"45px",transform:"translate3d(-55px,0px,0)",color:"	#800080"}} 
                                    right="150px"
                                    left="300px"
                                    color="red"
                                    >
                                        Depressed
                                    </h3>
                                </div>
                            );
		return (
            <div
            style=
            {
                {
                    backgroundImage:"url("+P1+")",
                    backgroundSize:'1250px',
                    height:'620px',
                    position:'sticky'
                }
            }
        >
            <span 
            class="dot" 
            style=
            {
                {
                 height: "300px",
                 width: "300px",
                 backgroundColor: "#BA55D3",
                 borderRadius: "50%",
                 display: "inline-block" ,
                 transform:'translate3d(480px,150px,0)',
                 opacity: '0.2'
                }
            }
            >
            </span>
            
            <h5
            style=
            {
                {
                 fontFamily:"Courier New",
                 fontSize:"30px",
                 fontWeight:"bold",
                 transform:'translate3d(615px,-130px,0)',
                 color:"black"
                }
            }
            >
                So
            </h5>    

            <h6
            style=
            {
                {
                 fontFamily:"Courier New",
                 fontSize:"19px",
                 fontWeight:"bold",
                 transform:'translate3d(505px,-135px,0)',
                 color:"black"
                }
            }
            >
                based on your answers,
            </h6>    

            <h5
            style=
            {
                {
                 fontFamily:"Courier New",
                 fontSize:"20px",
                 fontWeight:"bold",
                 transform:'translate3d(590px,-140px,0)',
                 color:"black"
                }
            }
            >
               you feel
            </h5>    

            <div >
            {this.state.moodName==='Happy'? Happy:null}
            {this.state.moodName==='Sad'? Sad:null}
            {this.state.moodName==='Lonely'? Lonely:null}
            {this.state.moodName==='Frustrated/Annoyed'? Frustrated:null}
            {this.state.moodName==='Stressed/Nervous'? Stressed:null}
            {this.state.moodName==='Depressed'? Depressed:null}
            </div>

            <h5
            style=
            {
                {
                 fontFamily:"Courier New",
                 fontSize:"16px",
                 fontWeight:"bold",
                 transform:'translate3d(493px,-140px,0)',
                 color:"black"
                }
            }
            >
               And here are some activities
            </h5>    

            <h5
            style=
            {
                {
                 fontFamily:"Courier New",
                 fontSize:"20px",
                 fontWeight:"bold",
                 transform:'translate3d(510px,-140px,0)',
                 color:"black"
                }
            }
            >
              that suit your mood.
            </h5>

            <Button
                variant="outline-purple"
                block
                onClick={this.buttonOnClick}
                style={{ transform: 'translate3d(520px,-65px,0px)', width: '200px' }}
            >
          <font color="purple" fontSize="10px">
            {' '}
            Go to your profile
          </font>
        </Button>

            <Flippy
               
				flipOnHover={true}
				flipOnClick={false}
				flipDirection="horizontal"
				ref={(r) => (this.flippy = r)}
				style={{ width: '230px', height: '210px' , transform:'translate3d(50px,-500px,0)',}}
			>
				<FrontSide
					style={{
						borderStyle: 'solid',
						borderWidth: '5px',
						backgroundSize: '230px 210px'
					}}
				>
					<div
						style={{
							textAlign: 'center',
							fontSize: '50px',
							textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'
						}}
					>
						<img src={food} width="230px" height="210px" style={{transform:'translate3d(-20px,-20px,0)'}} />
					</div>
				</FrontSide>
                <BackSide
					style={{
						backgroundColor: '#BA55D3',
						borderStyle: 'solid',
                        borderWidth: '5px',
                        backgroundSize: '230px 210px',
					}}
			    >
					<h2
                    style=
                    {
                        {
                         fontFamily:"Courier New",
                         fontSize:"30px",
                         fontWeight:"bold",
                         transform:'translate3d(5px,60px,0px)',
                         color:"black",
                         opacity:'0.5'
                        }
                    }
                    >
						{this.state.food}
					</h2>
				</BackSide>
			</Flippy>

            <Flippy
				flipOnHover={true}
				flipOnClick={false}
				flipDirection="horizontal"
				ref={(r) => (this.flippy = r)}
				style={{ width: '230px', height: '210px' , transform:'translate3d(900px,-710px,0)',}}
			>
				<FrontSide
					style={{
						borderStyle: 'solid',
						borderWidth: '5px',
						backgroundSize: '230px 210px'
					}}
				>
					<div
						style={{
							textAlign: 'center',
							fontSize: '50px',
							textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'
						}}
					>

						<img src={song} width="230px" height="210px" style={{transform:'translate3d(-20px,-20px,0)'}} ></img>
						<br />
					</div>
				</FrontSide>
				
                <BackSide
					style={{
						backgroundColor: '#BA55D3',
						borderStyle: 'solid',
                        borderWidth: '5px',
                        backgroundSize: '230px 210px',
					}}
			    >
					<a
                    style=
                    {
                        {
                         fontFamily:"Courier New",
                         fontSize:"6.5px",
                         fontWeight:"bold",
                         transform:'translate3d(-5px,200px,0)',
                         color:"black"
                        }
                    }
                    href= {this.state.song } target="_blank"
                    >
						{this.state.song}
					</a>
			</BackSide>
			</Flippy>

            <Flippy
				flipOnHover={true}
				flipOnClick={false}
				flipDirection="horizontal"
				ref={(r) => (this.flippy = r)}
				style={{ width: '230px', height: '210px' , transform:'translate3d(900px,-635px,0)'}}
			>
				<FrontSide
					style={{
						borderStyle: 'solid',
						borderWidth: '5px',
                        backgroundSize: '230px 210px',
                        backgroundColor: '#282c34'
                        
					}}
				>
					<div
						style={{
							textAlign: 'center',
							fontSize: '50px'
						}}
					>
						<img src={book11} width="230px"  height="210px" style={{transform:'translate3d(-20px,-20px,0)'}} />

						<br />
						<i
							class="fas fa-angle-double-left"
							title="click to view details"
							style={{ paddingRight: '650px' }}
						/>
						<i
							class="fas fa-angle-double-right"
							title="click to view details"
							style={{ paddingLeft: '650px' }}
						/>
						<br />
					</div>
				</FrontSide>
				
                <BackSide
					style={{
						backgroundColor: '#BA55D3',
						borderStyle: 'solid',
                        borderWidth: '5px',
                        backgroundSize: '230px 210px',
					}}
			    >
					<h5
                    style=
                    {
                        {
                         fontFamily:"Courier New",
                         fontSize:"11px",
                         fontWeight:"bold",
                         transform:'translate3d(3px,0px,0)',
                         color:"black",
                         opacity:'0.5'
                        }
                    }
                    >
						{this.state.book}
					</h5>

                    <h6
                    style=
                    {
                        {
                         fontFamily:"Courier New",
                         fontSize:"7px",
                         fontWeight:"bold",
                         transform:'translate3d(3px,5px,0)',
                         color:"000009",
                         opacity:"0.3"
                        }
                    }
                    >
                        {this.state.bookDescription}
					</h6>
					
				</BackSide>
			</Flippy>

            <Flippy
				flipOnHover={true}
				flipOnClick={false}
				flipDirection="horizontal"
				ref={(r) => (this.flippy = r)}
				style={{ width: '230px', height: '210px' , transform:'translate3d(50px,-840px,0)',}}
			>
				<FrontSide
					style={{
						borderStyle: 'solid',
						borderWidth: '5px',
						backgroundSize: '230px 210px'
					}}
				>
					<div
						style={{
							textAlign: 'center',
							fontSize: '50px',
							textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'
						}}
					>
						<img src={quote1} width="230px" height="210px"  style={{transform:'translate3d(-20px,-20px,0)'}} />

						<br />
						<i
							class="fas fa-angle-double-left"
							title="click to view details"
							style={{ paddingRight: '650px' }}
						/>
						<i
							class="fas fa-angle-double-right"
							title="click to view details"
							style={{ paddingLeft: '650px' }}
						/>
						<br />
					</div>
				</FrontSide>

				<BackSide
					style={{
						backgroundColor: '#BA55D3',
						borderStyle: 'solid',
                        borderWidth: '5px',
                        backgroundSize: '230px 210px',
					}}
			    >
					<h5
                    style=
                    {
                        {
                         fontFamily:"Courier New",
                         fontSize:"10px",
                         fontWeight:"bold",
                         transform:'translate3d(3px,0px,0)',
                         color:"black",
                         opacity:'0.5'
                        }
                    }
                    >
						{this.state.quote}
					</h5>

                    <h6
                    style=
                    {
                        {
                         fontFamily:"Courier New",
                         fontSize:"8px",
                         fontWeight:"bold",
                         transform:'translate3d(3px,5px,0)',
                         color:"black"
                        }
                    }
                    >
                        {this.state.saidBy}
					</h6>
					
				</BackSide>
			</Flippy>
            </div>
		);
	}
}

// ReactDOM.render(<Profile />, document.getElementById('root'));
export default Result;
