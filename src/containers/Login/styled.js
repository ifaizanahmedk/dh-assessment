import styled from "styled-components";

import { Button, Input } from "antd";

export const LoginContainer = styled.div`
	max-width: 300px;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.colors.background};
	padding: 20px;
	border-radius: 8px;
	box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;

export const Title = styled.h1`
	text-align: center;
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 20px;
`;

export const StyledInput = styled(Input)`
	margin-bottom: 15px;
`;

export const StyledButton = styled(Button)`
	width: 100%;
`;
