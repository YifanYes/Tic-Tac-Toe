import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [value, setValue] = useState("");

	//Decide si toca pintar una X o una O
	const switchTurn = turn => {
		if (value == "" && turn == true) {
			setValue("X");
		} else if (value == "" && turn == false) {
			setValue("O");
		}
		props.valueFunction();
	};

	//Devuelve una casilla
	return (
		<div
			className="square"
			onClick={() => {
				switchTurn(props.turn);
				props.saveValues(props.turn, props.squarePosition);
			}}>
			{value}
		</div>
	);
};

Square.propTypes = {
	valueFunction: PropTypes.func,
	saveValues: PropTypes.func,
	checkWinner: PropTypes.func,
	turn: PropTypes.bool,
	squarePosition: PropTypes.number
};

export default Square;
