import React, { Component } from "react";
import Navigation from "./Nav";
import Homepage from "./Homepage";
import About from "./About";
import ProjectInfo from "./ProjectInfo";
import Projects from "./Projects";
import Contact from "./Contact";
import { PROJECTS } from "../shared/projects";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: PROJECTS
		};
	}

	render() {
		const ProjectWithId = ({ match }) => {
			return (
				<ProjectInfo
					project={
						this.state.projects.filter(
							(project) => project.id === +match.params.projectId
						)[0]
					}
				/>
			);
		};

		return (
			<div>
				<Navigation />

				<Switch>
					<Route path="/home" render={() => <Homepage />} />
					<Route
						exact path="/projects"
						render={() => <Projects projects={this.state.projects} />}
					/>
					<Route
						path="/projects/:projectId"
						component={ProjectWithId}
					/>
					<Route exact path="/about" render={() => <About />} />

					<Route path="/contact" render={() => <Contact />} />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default withRouter(Main);
