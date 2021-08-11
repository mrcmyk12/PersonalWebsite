import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


class Homepage extends Component {
	render() {
		return (
			<div className="homepage-text-div">
			<Typist avgTypingDelay={125} cursor={{show:false}}>
				<h1 className="homepage-text" >philip.sanders</h1>
				<Typist.Delay ms={500} />
				<h2 className="homepage-subtext">ux engineer</h2>
				<Typist.Delay ms={500} />
				<h2 className="homepage-subtext">front end engineer</h2>
			</Typist>
				<Link to='/projects'><Button outline >View Projects</Button></Link>
			</div>
		);
	}
}

export default withRouter(Homepage);
