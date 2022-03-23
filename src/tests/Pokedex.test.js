import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Pokedex from '../components/Pokedex';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<Pokedex />);
    const testAboutTitle = screen.getByRole('heading', { level: 2,
      name: 'Encountered pokémons' });
    expect(testAboutTitle).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo '
  + 'pokémon é clicado', () => {
    renderWithRouter(<Pokedex />);
    const testAboutImg = screen.getByRole('img');
    expect(testAboutImg).toBeInTheDocument();
    const srcImage = testAboutImg.src;
    expect(srcImage).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/'
    + 'Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
