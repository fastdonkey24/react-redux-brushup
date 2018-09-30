import React from 'react';

const Ninjas = ({ ninjasList}) => {
	const allNinjas = ninjasList.map( ninja => {
		return (
			<div key='ninja.id' >
				<p> Name : {ninja.name}</p>
				<p> Age : {ninja.age}</p>
			</div>
		)
	})

	return (
		<div>
			{allNinjas}
		</div>
		
	);
}

export default Ninjas;
