import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado '
  + 'pokémon.', () => {
    renderWithRouter(<App />);
    const pokemonPikachu = screen.getByText('Pikachu');
    expect(pokemonPikachu).toBeInTheDocument();
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.textContent).toBe('Electric');
    const pokemonWeight = screen.getByText('Average weight: 6.0 kg');
    expect(pokemonWeight).toBeInTheDocument();
    const pokemonImg = screen.getByRole('img');
    expect(pokemonImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/'
    + 'Spr_5b_025_m.png');
    expect(pokemonImg.alt).toBe('Pikachu sprite');
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para'
  + 'exibirdetalhes deste Pokémon. O link deve possuir a URL /pokemons/<id>, onde <id> '
  + 'é o id do Pokémon exibido;', () => {
    renderWithRouter(<App />);
    const linkPokemom = screen.getByText('More details').closest('a');
    expect(linkPokemom).toHaveAttribute('href', '/pokemons/25');
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para'
  + 'exibirdetalhes deste Pokémon. O link deve possuir a URL /pokemons/<id>, onde <id> '
  + 'é o id do Pokémon exibido;', () => {
    const { history } = renderWithRouter(<App />);
    const clickMore = screen.getByText('More details');
    userEvent.click(clickMore);
    const moreTitle = screen.getByRole('heading', { level: 2, name: 'Pikachu Details' });
    expect(moreTitle).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const textDetails = screen.getByText(/More details/i);
    userEvent.click(textDetails);
    const check = screen.getByRole('checkbox');
    userEvent.click(check);
    renderWithRouter(<FavoritePokemons />);
    const iconFavo = screen.getByAltText('Pikachu is marked as favorite');
    expect(iconFavo).toBeInTheDocument();
    expect(iconFavo.src).toBe('http://localhost/star-icon.svg');
  });
});
