import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

describe('Teste o componente <About.js />.', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const testAboutTitle = screen.getByRole('heading', { level: 2,
      name: 'About Pokédex' });
    expect(testAboutTitle).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const testAboutPar1 = screen.getByText('This application simulates a Pokédex, a '
    + 'digital encyclopedia containing all Pokémons');
    expect(testAboutPar1).toBeInTheDocument();

    const testAboutPar2 = screen.getByText('One can filter Pokémons by type, and see'
    + ' more details for each one of them');
    expect(testAboutPar2).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<About />);
    const testAboutImg = screen.getByRole('img');
    expect(testAboutImg).toBeInTheDocument();
    const srcImage = testAboutImg.src;
    expect(srcImage).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/' 
    + 'Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
