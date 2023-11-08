import styled from 'styled-components';

export const Container = styled.div`
	background: #f7ebfd;
	height: 73px;
	padding: 0px 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	flex-direction: column;

	& span {
		font-weight: 700;
	}

	& p {
		font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont,
			'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		font-weight: 500;
		font-size: 13px;
		color: #660099;
	}
`;
export const Content = styled.div`
	border-radius: 8px;
`;
export const TopContent = styled.div`
	height: 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #cbcbcb;

	& div {
		display: flex;
		align-items: left;
		width: 33%;
	}
`;
export const BottomContent = styled.div`
	height: 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& div {
		display: flex;
		align-items: left;
		width: 33%;
	}
`;
