import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from './component/Main';
import SocialPage from './component/social/SocialPage';
import SocialCont from './component/social/SocialCont';

import './css/common.scss';
import './css/social.scss';

const App = () => {
	return (
		<div className="GCWwrap">
			<Switch>
				<Route path="/portfolio/gcw/social/:id" component={SocialCont} />
				<Route path="/portfolio/gcw/social" component={SocialPage} />
				<Route path="/portfolio/gcw/" component={Main} />
			</Switch>
		</div>
	);
};

export default App;