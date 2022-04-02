import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas'
  + 'na tela.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText('More details');
    userEvent.click(moreDetails);
    const pokemonDetails = screen.getByText('Pikachu Details');
    expect(pokemonDetails).toBeInTheDocument();
    const headingDetails = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(headingDetails).toBeInTheDocument();
    const resumePokemon = screen.getByText('This intelligent Pokémon roasts hard berries'
    + ' with electricity to make them tender enough to eat.');
    expect(resumePokemon).toBeInTheDocument();
  });

  test('Teste se existe na página uma seção com os mapas contendo as localizações do '
  + 'pokémon na tela.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText('More details');
    userEvent.click(moreDetails);
    const headingDetails = screen.getByRole('heading', { level: 2,
      name: 'Game Locations of Pikachu' });
    expect(headingDetails).toBeInTheDocument();
    const locationName = screen.getByText(/Kanto Viridian Forest/i);
    expect(locationName).toBeInTheDocument();
    const locationImage = screen.getAllByAltText(/Pikachu location/i);
    expect(locationImage.length).toBe(2);
    expect(locationImage[0].src).toBe('https://cdn2.bulbagarden.net/'
    + 'upload/0/08/Kanto_Route_2_Map.png');

    // Teste se o usuário pode favoritar um pokémon através da página de detalhes

    const check = screen.getByRole('checkbox');
    expect(check).toBeInTheDocument();
    const labelText = screen.getByText(/Pokémon favoritado?/i);
    expect(labelText).toBeInTheDocument();
  });
});
