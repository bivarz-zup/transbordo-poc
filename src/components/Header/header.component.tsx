import Arrows from 'assets/icons/arrows.svg';
import { primeMock } from 'mocks/primeMock';
import React from 'react';

import { BottomContent, Container, Content, TopContent } from './header.styles';

export const HeaderComponent = () => {
	return (
		<Container>
			<Content>
				<TopContent>
					<div>
						<p>
							<span>{primeMock.number}</span>
						</p>
					</div>
					<div>
						<p>
							<span>{primeMock.title}</span>
						</p>
						<img src={Arrows} alt="" />
					</div>
					<div>
						<p>
							Renovado em <span>{primeMock.lastRenewal}</span>
						</p>
					</div>
				</TopContent>
				<BottomContent>
					<div>
						<p>
							Status: <span>{primeMock.status}</span>
						</p>
					</div>
					<div>
						<p>Cliente desde {primeMock.clientSince} </p>
					</div>
					<div>
						<p>Pagamento: {primeMock.payment} </p>
					</div>
				</BottomContent>
			</Content>
		</Container>
	);
};
