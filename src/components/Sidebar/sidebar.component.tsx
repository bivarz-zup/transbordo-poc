import ArrowRight from 'assets/icons/arrow-r.svg';
import React, { useState } from 'react';

import { Aside, Container, MenuButton } from './sidebar.styles';

export const SideBarComponent = (menu: any) => {
	const [activeButton, setActiveButton] = useState('1');

	const menuList = [
		{ name: 'Saldo', id: '1' },
		{ name: 'Consumo', id: ' 2' },
		{ name: 'Compras', id: '3' },
		{ name: 'Perfil', id: '4' },
		{ name: 'Push/SMS', id: '5' },
		{ name: 'Cupom', id: '6' },
	];
	return (
		<Container>
			<Aside>
				{menuList.map(item => (
					<>
						<MenuButton
							type="button"
							onClick={() => setActiveButton(item.id)}
							className={`${
								item.id === activeButton ? 'active' : ''
							}`}
						>
							{item.name}
							<img src={ArrowRight} alt="Seta Direita" />
						</MenuButton>
					</>
				))}
			</Aside>
		</Container>
	);
};
