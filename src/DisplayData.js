import React from 'react';
import './DisplayData.css';

export class DisplayData extends React.Component{
	render() {
		return (
			<div id="layout-content">
				<div className="bioContainer">
					<img src={this.props.passedVal.avatar_url ? this.props.passedVal.avatar_url : "https://avatars0.githubusercontent.com/u/29385?v=4"} />
					<h1>User: { this.props.passedVal.login ? this.props.passedVal.login : '[ No User Found ]'}</h1>
					<br/><br/><br/><br/>
					<ul>
					<li>Name : {this.props.passedVal.name ? this.props.passedVal.name : '[ No Name Provided ]'}</li>
					<li>Location : {this.props.passedVal.location ? this.props.passedVal.location : '[ No Location Provided ]'}</li>
					<li>Bio : {this.props.passedVal.bio ? this.props.passedVal.bio : '[ No Bio Provided ]'}</li>
					<li>For Hire? : {this.props.passedVal.hireable ? "Yes" : 'No'}</li>
					</ul>
				</div>
			</div>
    	);
	}
}