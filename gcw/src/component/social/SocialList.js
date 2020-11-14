import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import SocialItem from './SocialItem';
import Paging from './Paging';
import store from '../../store';

const SocialList = () => {
	const [socialData, setSocialData] = useState([]);
	let pageNum = store.getState().pageNum;
	const [pageTotal, setPageTotal] = useState(0);
	const pageSize = 3;

	useEffect(() => {
		const apiSocial = async () => {
			try {
				const response = await axios.get(`//test-idback.withhive.com/test/api/getCom2usCompanyInfo/social?lang=ko&pagenum=${pageNum}&pagesize=${pageSize}`);
				setSocialData(response.data.data);
				setPageTotal(response.data.totalCount);
			}catch {
				alert("api 호출 에러");
			}
		};
		apiSocial();

	}, [pageNum, pageSize]);
	
	const listSocial = socialData.map((data, index) => <SocialItem key={index} data={data} />);

	const totalPage = Math.ceil(pageTotal/pageSize);

	return (
		<Fragment>
			<ul className="list-social">
				{listSocial}
			</ul>
			<Paging totalPage={totalPage}/>
		</Fragment>
	);
};

export default SocialList;