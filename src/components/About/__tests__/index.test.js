// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe('About component renders', () => {
    it('renders', () => {
        render(<About
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
})
