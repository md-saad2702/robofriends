import React from 'react';

const Card = ({ name, email, id}) =>{
	return(
		<div className='tc bg-light-purple dib br6 pa3 ma2 grow bw-5 shadow-5'>
		   <img alt ='klaplops' src={`https://robohash.org/${id}test?size=200x200`} />
		   <div>
		      <h2>{name}</h2>
		      <p>{email}</p>
		   </div>
		</div>       
	);
}

export default Card;
