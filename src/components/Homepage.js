import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


class Homepage extends Component {
	render() {
		return (
			<div style={{height:'800px'}} className="homepage-text-div">
			<Typist avgTypingDelay={100} cursor={{show:false}}>
				<h1 className="homepage-text" >philip.sanders</h1>
				<Typist.Delay ms={100} />
				<h5 className="homepage-subtext">ui/ux designer</h5>
				<Typist.Delay ms={100} />
				<h3 className="homepage-subtext">ux engineer</h3>
				<Typist.Delay ms={100} />
				<h3 className="homepage-subtext">front end engineer</h3>
			</Typist>
				<Link to='/projects'><Button outline >View Projects</Button></Link>
			</div>
		);
	}
}

export default withRouter(Homepage);
