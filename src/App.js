import React, { useState } from "react";

import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";

function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);

	const handleLogin = () => {
		setLoggedIn(true);
	};

	return (
		<div className="App">
			{isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
		</div>
	);
}

export default App;
