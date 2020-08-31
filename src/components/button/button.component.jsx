import React, {Component} from "react";
import './button.styles.css';

class Button extends Component{
	render() {
		return (<div>
			<button onClick={this.props.handleClick}>
				{this.props.text}
			</button>
		</div>);
	}
}

export default Button;