import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';
import pokemons from '../data' ;
import userEvent from '@testing-library/user-event';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found,'
  + 'se a pessoa não tiver pokémons favoritos.', () => {
    renderWithRouter(<FavoritePokemons />);
    const testFavorite = screen.getByText('No favorite pokemon found');
    expect(testFavorite).toBeInTheDocument();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const textDetails = screen.getByText(/More details/i);
    userEvent.click(textDetails);
    const check = screen.getByRole('checkbox');
    userEvent.click(check);

    renderWithRouter(<FavoritePokemons />);
    const namePokemon = screen.getByText('Pikachu');
    expect(namePokemon).toBeInTheDocument();
  });
});
