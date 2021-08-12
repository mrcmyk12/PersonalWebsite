import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faBootstrap,
	faJsSquare,
	faReact,
	faFigma,
	faLinkedin,
	faGithubSquare
} from "@fortawesome/free-brands-svg-icons";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from "reactstrap";

import { NavLink } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar
					sticky="top"
					light
					className="navbar"
					expand="md"
					style={{ marginBottom: "50px" }}>
					<NavbarToggler onClick={this.toggleNav} />
					<Collapse isOpen={this.state.isNavOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink
									style={{
										fontFamily: "Prompt",
										fontStyle: "normal",
										fontWeight: "bold",
										fontSize: "30px",
										lineHeight: "70px",
										color: "#3E563E"
									}}
									className="nav-link"
									to="/home">
									home
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									style={{
										fontFamily: "Prompt",
										fontStyle: "normal",
										fontWeight: "bold",
										fontSize: "30px",
										lineHeight: "70px",
										color: "#3E563E"
									}}
									className="nav-link"
									to="/projects">
									projects
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									style={{
										fontFamily: "Prompt",
										fontStyle: "normal",
										fontWeight: "bold",
										fontSize: "30px",
										lineHeight: "70px",
										color: "#3E563E"
									}}
									className="nav-link"
									to="/about">
									about
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									style={{
										fontFamily: "Prompt",
										fontStyle: "normal",
										fontWeight: "bold",
										fontSize: "30px",
										lineHeight: "70px",
										color: "#3E563E"
									}}
									className="nav-link"
									to="/contact">
									contact
								</NavLink>
							</NavItem>
						</Nav>
						<span style={{ marginLeft: "600px", color: "#3E563E" }}>
							<h4 style={{ fontFamily: "Permanent Marker" }}>
								Contact Me:
							</h4>
							<a
								href="https://www.linkedin.com/in/philip-sanders-ab385289/"
								style={{ textDecoration: "none", color: "#3e563e" }}
								target="_blank">
								<FontAwesomeIcon size="2x" icon={faLinkedin} />
							</a>
							<a
								href="https://github.com/mrcmyk12"
								style={{ color: "#3e563e" }}
								target="_blank">
								<FontAwesomeIcon
									style={{ marginLeft: "10px" }}
									size="2x"
									icon={faGithubSquare}
								/>
							</a>
							<a
								href="mailto:philip.sanders.create@gmail.com"
								style={{ color: "#3e563e" }}>
								<FontAwesomeIcon
									style={{ marginLeft: "10px" }}
									size="2x"
									icon={faEnvelope}
								/>
							</a>
						</span>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
