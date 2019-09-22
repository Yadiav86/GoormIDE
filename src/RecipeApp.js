import React, { Component } from 'react';
import Recipe from './Recipe.js';
import './RecipeApp.css';

class RecipeApp extends Component {
	render() {
		return(
			<div className="App">
				<Recipe 
					title="pasta" 
					ingredients={['flour','water']}
					instructions="Mix ingredients"
					img="data:image/jpeg;base64,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"
					/>
			</div>
		);
	}
}

export default RecipeApp;