import React, { useState } from "react";
import PropTypes from "prop-types";
import { LoginContainer, StyledButton, StyledInput, Title } from "./styled";

const Login = ({ onLogin }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		if (username === "yourUsername" && password === "yourPassword") {
			onLogin();
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<LoginContainer>
			<Title>Login</Title>
			<StyledInput
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<StyledInput.Password
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<StyledButton type="primary" onClick={handleLogin}>
				Login
			</StyledButton>
		</LoginContainer>
	);
};

Login.propTypes = {
	onLogin: PropTypes.func.isRequired,
};

export default Login;
