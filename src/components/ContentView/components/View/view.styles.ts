import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
export const Title = styled.div`
	width: 100%;
	border-bottom: 1px solid #dcdcdc;
	font-weight: 700;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
	height: 35px;
	display: flex;
	align-items: center;
`;

export const DataLine = styled.div`
	padding: 10px 0px;
	width: 100%;
	border-bottom: 1px solid #dcdcdc;
	font-weight: 700;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Description = styled.div`
	margin-left: 10px;
	display: flex;
	align-items: center;
	gap: 15px;
	font-weight: 400;
`;
export const QuantityInformation = styled.div`
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: end;
	flex-direction: column;
	font-weight: 500;

	span {
		font-size: 10px;
		font-weight: 400;
		text-align: right;
	}
`;

export const DataLineDailys = styled.div`
	width: 100%;
	border-bottom: 1px solid #dcdcdc;
	font-weight: 700;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
