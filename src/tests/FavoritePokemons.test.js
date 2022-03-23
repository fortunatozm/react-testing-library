import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found,'
  + 'se a pessoa não tiver pokémons favoritos.', () => {
    renderWithRouter(<FavoritePokemons />);
    const testFavorite = screen.getByRole('heading', { level: 2,
      name: 'Favorite pokémons' });
    expect(testFavorite).toBeInTheDocument();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<FavoritePokemons />);
    const testAllFavorites = screen.getAllByRole('' , { level: 2,
      name: 'Favorite pokémons' });
    expect(testAllFavorites).toBeInTheDocument();
  });
});
