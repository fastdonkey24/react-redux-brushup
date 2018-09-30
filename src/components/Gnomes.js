import React from 'react';

const Gnomes = ({ gnomesList}) => {
	const TheGnomes = gnomesList.map( gnome => {
		return (
			<div key='gnome.id' >
				<p> Name : {gnome.name}</p>
				<p> Age : {gnome.age}</p>
			</div>
		)
	})

	return (
		<div>
			{TheGnomes}
		</div>
		
	);
}

export default Gnomes;
