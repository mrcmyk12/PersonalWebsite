import React, { Component } from "react";
import {
	faHtml5,
	faCss3Alt,
	faBootstrap,
	faJsSquare,
	faReact,
	faFigma,
	faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";

function ProjectInfo(props) {
	const designimages = props.project.designimages.map((images) => {
		return (
			<img
				style={{ margin: "1rem" }}
				className="design-image"
				src={images}
			/>
		);
	});

	const screencaptures = props.project.screencaptures.map((screencap) => {
		return (
			<img
				style={{ margin: "1rem" }}
				className="design-image"
				src={screencap}
			/>
		);
	});

	return (
		<div style={{ marginLeft: "20px" }} key={props.project.id}>
			<div className="row">
				<div className="col-4">
					<img
						className="project-display-image"
						src={props.project.titleimage}
					/>
					<h1 className="project-header-text">{props.project.name}</h1>
					<a
						style={{ textDecoration: "none", color: "#3e563e" }}
						href={props.project.githublink}
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
				</div>
				<div
					style={{
						textAlign: "start",
						marginLeft: "2rem",
						color: "#3e563e"
					}}
					className="col-7">
					<h2 className="project-header-text">tech.</h2>

					<FontAwesomeIcon
						style={{ marginLeft: "10px" }}
						icon={faHtml5}
						size="2x"
					/>
					<FontAwesomeIcon
						style={{ marginLeft: "10px" }}
						icon={faReact}
						size="2x"
					/>
					<FontAwesomeIcon
						style={{ marginLeft: "10px" }}
						icon={faJsSquare}
						size="2x"
					/>
					<FontAwesomeIcon
						style={{ marginLeft: "10px" }}
						icon={faBootstrap}
						size="2x"
					/>
					<hr
						style={{
							borderTop: "4px solid",
							borderRadius: "2px",
							color: "#ffffff"
						}}></hr>
					<h2
						style={{ marginTop: "1rem" }}
						className="project-header-text">
						design process.
					</h2>
					{designimages}
					<hr
						style={{
							borderTop: "4px solid",
							borderRadius: "2px",
							color: "#ffffff"
						}}></hr>
					<h2 className="project-header-text">screen captures.</h2>
					{screencaptures}
				</div>
			</div>
		</div>
	);
}

export default ProjectInfo;
