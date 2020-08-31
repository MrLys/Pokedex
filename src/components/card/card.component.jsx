import React, {Component} from "react";
import './card.styles.css';

class Card extends Component {
	//console.log(props.img);
	render() {
		let type = (this.props.useIcons) ? this.props.icons : this.props.type;
		return (<div className='card-container' key={"pokemon-" + this.props.id}>
			<img alt='Pokemon' src={this.props.img}/>
			<h1>{this.props.name}</h1>
			<h2>{type}</h2>
		</div>);
	}
}

export default Card;