import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from 'tests';

import { View } from '.';

describe('<View/>', () => {
	it('It shouldnt be visible Prime Alive', () => {
		render(<View />);

		const title = screen.getByText('Prime Alive');

		expect(title).toBeInTheDocument();
	});
});
