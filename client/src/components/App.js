import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamList from './StreamList';
import StreamCreate from './StreamCreate';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamShow from './StreamShow';

const App = () => {
  return(
		<div>
			<BrowserRouter>
				<Route path='/' exact component={StreamList} />
				<Route path='/streams/new' exact component={StreamCreate} />
				<Route path='/streams/edit' exact component={StreamEdit} />
				<Route path='/streams/delete' exact component={StreamDelete} />
				<Route path='/streams/show' exact component={StreamShow} />
			</BrowserRouter>
		</div>
	)
}

export default App;