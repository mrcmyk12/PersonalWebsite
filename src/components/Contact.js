import React, { Component } from "react";
import { Button, Row, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

class Contact extends Component {
	render() {
		return (
			<div style={{height:'500px'}}>
				<div className="container d-flex">
					<div className="row">
						<div className="col">
							<h3 className="bio-header-text">contact.</h3>
						</div>
					</div>
				</div>
				<div className="container d-flex">
					<div className="row mb-5">
						<div className="col">
							<FontAwesomeIcon icon={faLinkedin} size="4x" />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={faGithubSquare} size="4x" />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={faEnvelope} size="4x" />
						</div>
					</div>
				</div>
				<div className="container d-flex">
					<div className="row">
						<h3 className="bio-header-text">email me.</h3>
					</div>
				</div>
				<div className="container">
					<Form inline>
						<Row form>
							<Col md={6}>
								<FormGroup>
									<Input type="text" placeholder="Name" style={{marginBottom:'0.5rem'}}/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Input type="text" placeholder="Email" style={{marginBottom:'0.5rem'}}/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Input type="textarea" placeholder="Message" />
								</FormGroup>
							</Col>
						</Row>
					</Form>
				</div>
			</div>
		);
	}
}

export default Contact;
