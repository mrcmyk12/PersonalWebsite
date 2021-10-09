import React, { Component } from "react";
import { PROJECTS } from "../shared/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import {
	faHtml5,
	faCss3Alt,
	faBootstrap,
	faJsSquare,
	faReact,
	faFigma,
	faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import {
	slideInDown,
	slideInLeft,
	slideInRight,
	slideInUp
} from "react-animations";
import Radium, { StyleRoot } from "radium";

class Project extends Component {
	render() {
		const render = this.props.projects.map((project) => {
			return (
				<div key={project.id} className="row">
					<div
						className="col-lg-4"
						style={{ animation: "1.5s ease-out 0s 1 slideInFromLeft" }}>
						<Link to={`/projects/${project.id}`}> 
							<img src={project.titleimage} className="project-image" />
						</Link>
						<a
							style={{ textDecoration: "none", color: "#3e563e" }}
							href={project.githublink}
							target="_blank">
							<div
								style={{
									textAlign: "center",
									paddingLeft: "16px",
									paddingTop: "8px"
								}}>
								<FontAwesomeIcon icon={faGithubSquare} size="lg" />
								<p
									className="bio-paragraph-text"
									style={{
										display: "inline-flex",
										justifyContent: "start",
										marginBottom: "8px"
									}}>
									Link to GitHub Repository
								</p>
							</div>
						</a>
						<a
							style={{ textDecoration: "none", color: "#3e563e" }}
							href={project.websitelink}
							target="_blank">
							<div style={{ alignContent: "start" }}>
								<Button
									outline
									style={{
										marginBottom: "20px",
										fontFamily: "Nunito",
										fontWeight: "bold"
									}}
									className="bio-paragraph-text"
									size="sm">
									Live Site
								</Button>
							</div>
						</a>
					</div>
					<div className="col-lg-8" style={{ textAlign: "start" }}>
						<h2 className="project-header-text">{project.name}</h2>
						<FontAwesomeIcon
							style={{ animation: "1.5s ease-out 0s 1 slideInFromLeft" }}
							icon={faHtml5}
							size="2x"
						/>
						<FontAwesomeIcon
							style={{ animation: "1.5s ease-out 0s 1 slideInFromLeft" }}
							icon={faReact}
							size="2x"
						/>
						<FontAwesomeIcon
							style={{ animation: "1.5s ease-out 0s 1 slideInFromLeft" }}
							icon={faJsSquare}
							size="2x"
						/>
						<FontAwesomeIcon
							style={{ animation: "1.5s ease-out 0s 1 slideInFromLeft" }}
							icon={faBootstrap}
							size="2x"
						/>
						<p
							className="bio-paragraph-text"
							style={{ marginBottom: "0px" }}>
							{project.summary}
						</p>
						<br></br>
					</div>
					<hr
						style={{
							borderTop: "4px solid",
							borderRadius: "2px",
							color: "#ffffff",
							animation:'1.5s ease-out 0s 1 slideInFromLeft'
						}}></hr>
				</div>
			);
		});
		return <div className="container">{render}</div>;
	}
}

export default Project;
