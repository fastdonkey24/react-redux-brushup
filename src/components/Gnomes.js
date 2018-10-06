import React from 'react';
import '../styles/Gnomes.css';

const Gnomes = ({ gnomesList, deleteGnome}) => {
	return (
		<div>
			{gnomesList.map(gnome => {
				return gnome.age > 5 ? (
					<div key={gnome.id} id={"gnome_" + gnome.id} >
						<p> Name : {gnome.name}</p>
						<p> Age : {gnome.age}</p>
						<button onClick={() => { deleteGnome(gnome.id)} }> Remove</button>
					</div>
				) : null
			})}
		</div>	
	)
}

export default Gnomes;
