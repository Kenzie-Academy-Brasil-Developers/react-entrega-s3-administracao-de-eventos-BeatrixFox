import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: 0;
}
:root{
	--back-blue: #4C4ADA;
	--black: #000000;
	--white: #f5f5f5;
	--dark-green: #04561B;
	--details-color: #A0FFF4;
	--font-details-color: #4E5555;
	--icons-color: #C85311;
	--oxford-blue: #00043aff;
	--up-maroon: #800016ff;
	--sizzling-red: #ff3355ff;
	--beau-blue: #b5cfe3ff;
	--usafa-blue: #004e89ff;
	--royal-blue-dark: #002962ff;
	--firebrick: #c00021ff;
	--ruby-red: #a0001cff;
	--xiketic: #140003ff;
	--alice-blue: #f1f5f8ff;

}
body{
	background-color: var(---back-blue);
	color: var(--black);
}

input{
	font-family: "Roboto Mono", monospace;
	font-size: 1rem;
}

button{
	cursor: pointer;
}

`;
