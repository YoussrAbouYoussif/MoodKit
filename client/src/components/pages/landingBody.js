import React, { Component } from 'react';
//import logo from './logo.svg';
import Carousel from 'react-bootstrap/Carousel';
import mood from '../layout/mood.gif';
import MoodKit from '../layout/MoodKit.png';
import { Animate, AnimateGroup } from 'react-simple-animate';
import GifPlayer from 'react-gif-player';
import {Button} from 'react-bootstrap';
import { ButtonGroup, CarouselItem } from 'react-bootstrap';
import { MDBAnimation } from "mdbreact";
import Image1 from '../layout/Image1.jpeg';
import Image2 from '../layout/Image2.jpg';
import Image3 from '../layout/Image3.jpeg';
import Image4 from '../layout/Image4.jpeg';


import { MDBCard, MDBCardBody } from 'mdbreact'
import { Random } from 'react-animated-text';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Wave} from 'react-animated-text';

import '../../App.scss';

// import meta from '@babel/core';
class LandingBody extends Component {
	props = {
		startStyle: { opacity: 0 },
		endStyle: { opacity: 1 }
    };
    login() {
		document.location.href = '/login';
    }
    register() {
		document.location.href = '/register';
	}
	render() {
        return (
        <div>
           <Carousel position="sticky" zIndex='0'>
				<Carousel.Item>
					<div >
                    <img src={Image1} width="1250px" height="580px"/>
					</div>
                <Carousel.Caption>
                <h3 style={{color:'	#9932CC'}}>How are you feeling today?</h3>
				</Carousel.Caption> 
                </Carousel.Item>  
                <Carousel.Item>
					<div>
                    <img src={Image2} width="1250px" height="580px"/>
					</div>
                <Carousel.Caption>
					<h3 style={{color:'	#9932CC'}}>Feeling lonely? We're there for you!</h3>
				</Carousel.Caption>    
                </Carousel.Item>  
                <Carousel.Item>
					<div>
                    <img src={Image3} width="1250px" height="580px"/>
					</div>
                <Carousel.Caption>
                <h3 style={{color:'	#9932CC'}}>Feeling happy? We're supporting you!</h3>
				</Carousel.Caption>      
                </Carousel.Item> 
                <Carousel.Item>
					<div>
                    <img src={Image4} width="1250px" height="580px"/>
					</div>
                <Carousel.Caption>
                <h3 style={{color:'	#9932CC'}}>Feeling down? We're here to motivate you!</h3>
				</Carousel.Caption>   
                </Carousel.Item>  
            </Carousel>
            
            <div style=
            {
                {
                 fontFamily:"serif",
                 fontSize:"80px",
                 fontWeight:"bold",
                 fontStyle:"italic",
                 color:'#4B0082',
                 opacity:'1.0',
                 transform:"translate3d(460px,-500px,0)"
                }
            }>
                
                <Wave 
                text="MoodKit"
                right="150px"
                left="300px"
                color="red"
                >
                    
                </Wave>
                    </div>
    
                               <div>
								<Button
                                    variant="outline-purple"
                                    className="btn-block btn-outline-purple z-depth-1a"
									href="/login"
                                    style={{transform:"translate3d(500px,-500px,0px)", width:"80px"}}>
                                    <font color="purple" fontSize="20px"> Login</font>
								</Button>
                                </div>
								<br />
								
									<Button
										variant="outline-purple"
										block
										href="/Register"
                                        style={{transform:"translate3d(620px,-565px,0px)", width:"100px"}}>
                                        <font color="purple" fontSize="20px"> Register</font>
									</Button>                       
                </div>    
		);
	}
}

export default LandingBody;

