import React from 'react';
import {Link} from 'react-router-dom';

import store from '../../store';

const Paging = (props) => {
	const {totalPage} = props;
	let currentPage = store.getState().pageNum; //현재 페이지
	const pageSize = 5; //한 페이지에 보여줄 페이지 버튼 수
	const totalGroup = Math.ceil(totalPage/pageSize);
	const pageGroup = Math.ceil(currentPage/pageSize);
	//console.log("현재 페이지:", currentPage);
	//console.log("총 몇 번째 그룹이냐:", totalGroup);
	//console.log("지금 몇 번째 그룹이냐:", pageGroup);

	let lastPage = pageSize * pageGroup; //마지막 페이지
	(lastPage > totalPage) && (lastPage = totalPage)
	console.log("lastPage:", lastPage);

	let firstPage = 0;
	(lastPage%pageSize === 0) ? (firstPage = lastPage - (pageSize-1)) : (firstPage = lastPage - (pageSize-2));
	//let firstPage = lastPage - (pageSize-1);
	//console.log("firstPage:", firstPage);

	const nextPage = lastPage + 1;
	const prevPage = firstPage - 1;
	//console.log("nextPage:", nextPage);
	//console.log("prevPage:", prevPage);


	const createBtn = () => {
		let btn = [];
		for(let i = firstPage ; i <= lastPage ; i++) {
			btn.push(<Link to='/portfolio/gcw/social' key={i} className={currentPage === i ? 'current' : ''}
				onClick={() => store.dispatch({type:'PAGE_CHANGE', pageNum: i})}
			>{i}</Link>);
		}
		return btn;
	};

	return (
		<div className="board_paging">
			<Link to='/portfolio/gcw/social' className={['prev', (pageGroup>=totalGroup) ? 'on' : 'disabled'].join(' ')}
				onClick={() => store.dispatch({type:'PAGE_CHANGE', pageNum: prevPage})}
			>이전 페이지로</Link>
			{createBtn()}
			<Link to='/portfolio/gcw/social' className={['next', (pageGroup<totalGroup) ? 'on' : 'disabled'].join(' ')}
				onClick={() => store.dispatch({type:'PAGE_CHANGE', pageNum: nextPage})}
			>다음 페이지로</Link>
		</div>
	);
};

export default Paging;