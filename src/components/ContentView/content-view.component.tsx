import ArrowRight from 'assets/icons/arrow-r.svg';
import { Sidebar } from 'components/Sidebar';
import React, { useState } from 'react';

import { View } from './components/View/view.component';
import { Aside, Container, MenuButton } from './content-view.styles';

export const SideBarView = () => {
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
			<Sidebar menu={menuList} />
			<View />
		</Container>
	);
};
