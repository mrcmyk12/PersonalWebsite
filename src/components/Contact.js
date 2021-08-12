import React, { Component } from "react";
import { Button, Row, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ContactUs from "./ContactUs";

class Contact extends Component {
	render() {
		return (
			<div style={{ height: "900px" }}>
				<div className="container d-flex">
					<div className="row">
						<div className="col">
							<h3 className="bio-header-text">contact.</h3>
						</div>
					</div>
				</div>
				<div className="container d-flex" style={{ color: '#3e563e'}}>
					<div className="row mb-5">
						<div className="col" style={{animation: '1.5s ease-out 0s 1 slideInFromRight'}}>
							<FontAwesomeIcon icon={faLinkedin} size="4x" />
						</div>
						<div className="col" style={{animation: '1.5s ease-out 0s 1 slideInFromRight'}}>
							<FontAwesomeIcon icon={faGithubSquare} size="4x" />
						</div>
						<div className="col" style={{animation: '1.5s ease-out 0s 1 slideInFromRight'}}>
							<FontAwesomeIcon icon={faEnvelope} size="4x" />
						</div>
					</div>
				</div>
				<div className='container'>
				<hr
						style={{
							borderTop: "4px solid",
							borderRadius: "2px",
							color: "#ffffff",
							animation:'1.5s ease-out 0s 1 slideInFromLeft'
						}}></hr>
						</div>
				<div className="container d-flex">
					<div className="row">
						<h3 className="bio-header-text">email me.</h3>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<ContactUs />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
