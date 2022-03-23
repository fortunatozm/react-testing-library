import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se página contém um heading h2 com o texto '
  + 'Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);
    const testNotFoundTitle = screen.getByRole('heading', { level: 2,
      name: /Page requested not found/i });
    expect(testNotFoundTitle).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<NotFound />);
    const testNotFoundImg = screen.getByAltText('Pikachu crying because the page '
    + 'requested was not found');
    expect(testNotFoundImg).toHaveAttribute('src', 'https://media.giphy.com/'
    + 'media/kNSeTs31XBZ3G/giphy.gif');
    // const srcImage = testNotFoundImg.src;
    // expect(srcImage).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
