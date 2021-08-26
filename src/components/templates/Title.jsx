import React from "react";
import logo from "../../img/logo.png"
import styled from "styled-components";

export const Title = () => {
	return (
		<>
			<Simg src={logo} />
		</>
	)
}

const Simg = styled.img`
	border-radius: 15px;
	margin-top: 10px;
`
