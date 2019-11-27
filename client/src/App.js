import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingBody from './components/pages/landingBody';
import Result from './components/pages/Result';
//import Register1 from './components/Register';
//import Login from './components/pages/Login';
//import EditProfile from './components/pages/EditProfile';
//import ChangePassword from './components/pages/ChangePassword';
//import ForgotPassword from './containers/ForgotPassword';
//import ResetPassword from './containers/ResetPassword';
//import Notfound from './components/pages/notfound';
//import error from './components/pages/error';
//import verify from './containers/verify';

class App extends Component {
	/*constructor() {
		super();
		localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
  }
  */
	
	/*state = {
		lang: localStorage.getItem('lang'),
		formId: {}
  };
  */
	/*changelang = (lang) => {
		localStorage.setItem('lang', lang);
		this.setState({ lang: lang });
		console.log(lang);
  };
  */

	/*componentDidMount() {
		document.title = 'GAFI';
	}
  */
	/*setFormId = (formId) => {
		this.setState({ formId: formId });
		if (formId.status === 'Unassigned') document.location.href = '/editUnassigned';
		else if (formId.type === 'SSCForm') document.location.href = '/editsscform';
		else document.location.href = '/editspcform';
	};
  */
	render() {
		var currentLocation = window.location.pathname;
	  //var footerNotVisible = false;
		/*if (currentLocation === '/' || localStorage.getItem('isLoggedIn') === 'false') {
			footerNotVisible = true;
		}
    */
		return (
			<div>
					<body
						style={{
							position: 'relative',
							minHeight: '100vh'
						}}
					>
							<div style={{ paddingBottom: '7rem' }}>
								<Router>
									<div>
										<Switch>
											<Route
												exact
												path="/"
												render={(props) => <LandingBody {...props} />}
											/>
										</Switch>
									</div>
								</Router>
								
								<Router>
									<div>
										<Switch>
											<Route
												exact
												path="/result"
												render={(props) => <Result {...props} />}
											/>
										</Switch>
									</div>
								</Router>

							</div>
					</body>
			</div>
		);
	}
}

export default App;
