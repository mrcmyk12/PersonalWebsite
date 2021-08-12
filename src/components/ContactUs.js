import React from "react";
import emailjs, {init} from "emailjs-com";



export default function ContactUs() {

	init('user_RW5elXiTVWVJ2AQJ8b8mt');

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_uz1tg69",
				"template_wpax4ug",
				e.target,
				"user_RW5elXiTVWVJ2AQJ8b8mt"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<form className="contact-form" onSubmit={sendEmail}>
			<div className="row">
				<input type="hidden" name="contact_number" />
			</div>
			<div className="row">
				<label>Name</label>
				<input type="text" name="user_name" />
			</div>
			<div className="row">
				<label>Email</label>
				<input type="email" name="user_email" />
			</div>
			<div className="row">
				<label>Message</label>
				<textarea name="message" />
			</div>
			<div style={{ marginTop:'1rem'}}>
				<input style={{fontSize:'17px', fontWeight:'bold', fontFamily:'Nunito', color:'#3e563e'}} type="submit" value="Send" />
			</div>
		</form>
	);
}
