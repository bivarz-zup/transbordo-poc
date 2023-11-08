import styled from 'styled-components';

export const Container = styled.div`
	margin: 20px 0px;
	display: flex;
	justify-content: space-between;
	gap: 15px;
`;
export const Aside = styled.aside`
	display: flex;
	flex-direction: column;
	width: 122px;
	min-width: 122px;
`;
export const MenuButton = styled.button`
	border: none;
	border-bottom: 1px solid #d0d0d0;
	text-align: left;
	padding: 0px 12px 0px 20px;
	height: 35px;
	background-color: #fff;
	cursor: pointer;

	&.active {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #660099;
		color: #fff;
	}
`;

export const Main = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: firebrick;
	height: 800px;
`;
