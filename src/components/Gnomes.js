import React from 'react';

const Gnomes = ({ gnomesList}) => {
	return (
		<div>
			{gnomesList.map(gnome => {
				return gnome.age > 5 ? (
					<div key={gnome.id} id={"gnome_" + gnome.id} >
						<p> Name : {gnome.name}</p>
						<p> Age : {gnome.age}</p>
					</div>
				) : null
			})}
		</div>	
	)
}

export default Gnomes;
