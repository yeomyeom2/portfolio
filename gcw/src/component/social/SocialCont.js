import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const SocialCont = (props) => {
	const {match} = props;
	const socialId = match.params.id;
	const [socialData, setSocialData] = useState([]);

	useEffect(() => {
		const apiSocial = async () => {
			const response = await axios.get(`https://test-idback.withhive.com/test/api/getCom2usCompanyInfo/social?id=${socialId}`);
			setSocialData(response.data.data[0]);
		};
		apiSocial();
	}, [socialId]);
	
	return (
		<div className="GCWcontents">
			<div className="board-view">
				<dl>
					<dt>{socialData.title} <span className="date">{socialData.reg_date}</span></dt>
					<dd className="article" dangerouslySetInnerHTML={{__html:socialData.description}}></dd>
				</dl>
			</div>
			<div className="board_foot">
				<Link to="/gcw" className="btn_base">목록보기</Link>
			</div>
		</div>
	);
};

export default SocialCont;