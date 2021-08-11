import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faBootstrap,
	faJsSquare,
	faReact,
	faFigma,
	faNode
} from "@fortawesome/free-brands-svg-icons";

class About extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container d-flex">
					<div className="row">
						<div className="col">
							<h3 className="bio-header-text">skills.</h3>
						</div>
					</div>
				</div>
				<div
					className="container d-flex"
					style={{ marginBottom: "1rem", color: "#3e563e" }}>
					<div className="row"  style={{animation:'1.5s ease-out 0s 1 slideInFromLeft'}}>
						<div className="col" style={{transform: 'translate(x)'}}>
							<FontAwesomeIcon icon={faHtml5} size="7x" />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={faCss3Alt} size="7x" />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={faBootstrap} size="7x" />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={faJsSquare} size="7x" />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={faReact} size="7x" />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={faFigma} size="7x" />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={faNode} size="7x" />
						</div>
					</div>
				</div>

				<div className="container d-flex">
					<div className="row">
						<div className="col">
							<h3 className="bio-header-text">bio.</h3>
						</div>
					</div>
				</div>
				<div className="container d-flex">
					<div className="row">
						<div className="col">
							<h6 className="bio-paragraph-text">
								Hello, my name is Philip Sanders. I am a graduate of
								NuCamp Full Stack Bootcamp. I have also earned a Google
								Certificate in UX Design. I am currently enrolled in a
								Backend Bootcamp rooted in the Python Programming
								Language and teaches SQL(PostgreSQL), Cloud (Azure, AWS,
								Google), and DevOps principles.
							</h6>
						</div>
					</div>
				</div>
				<div className="container">
					<hr
						style={{
							borderTop: "4px solid",
							borderRadius: "2px",
							color: "#3e563e",
							animation:'1.5s ease-out 0s 1 slideInFromLeft'
						}}></hr>
				</div>
				<div className="container d-flex">
					<div className="row">
						<div className="col">
							<h3 className="bio-header-text">interests.</h3>
						</div>
					</div>
				</div>
				<div className="container d-flex">
					<div className="row">
						<div className="col">
							<h6 className="bio-paragraph-text-interests">
								I am very much enjoy learning, and growing both as a
								developer and a human being. So in my free time, you can
								find me taking Udemy Courses, listening to podcasts and
								audiobooks while at the gym, or coding/designing a new
								project. Im passionate about building things (whether
								its a computer program or a self-made bookshelf) and
								enriching the lives of the people around me.
							</h6>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default About;
