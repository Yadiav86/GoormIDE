import React, {Component} from 'react';

class Recipe extends Component {
	render() {
		const {title, img, instructions} = this.props;
		const ingredients = this.props.ingredients.map((ing, index) => (
			<li key={index}>{ing}</li>
		))
		return (
			<div>
				<div>
					<img src={img} alt={title} />
				</div>
					<ul>
					<div>{title}</div>
						{ingredients}
					</ul>
					<p>{instructions}</p>
			</div>
		);
	}
}

export default Recipe;