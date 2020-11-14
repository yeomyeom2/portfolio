import React from 'react';
import {Link} from 'react-router-dom'; 

const SocialItem = (props) => {
	const {data} = props;
	
	return (
		<li>
			<div className="pic"><img src={data.filename} alt={data.title}/></div>
			<p className="subject"><Link to={"/gcw/" + data._id}><span>{data.title}</span></Link></p>
			<span className="date">{data.reg_date.split(' ')[0]}</span>
		</li>
	);
};

export default SocialItem;