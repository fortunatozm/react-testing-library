import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Pokedex from '../components/Pokedex';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const testPokedexTitle = screen.getByRole('heading', { level: 2,
      name: 'Encountered pokémons' });
    expect(testPokedexTitle).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo '
  + 'pokémon é clicado', () => {
    renderWithRouter(<App />);
    const btText = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(btText).toBeInTheDocument();
    userEvent.click(btText);
    const btNext = screen.getByText('Charmander');
    expect(btNext).toBeInTheDocument();
    userEvent.click(btText);
    userEvent.click(btText);
    userEvent.click(btText);
    userEvent.click(btText);
    userEvent.click(btText);
    userEvent.click(btText);
    userEvent.click(btText);
    userEvent.click(btText);
    const btFirst = screen.getByText('Pikachu');
    expect(btFirst).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);
    const btClick = screen.getByRole('button', { name: 'Próximo pokémon' });
    userEvent.click(btClick);
    const btList = screen.getAllByTestId('pokemon-name');
    expect(btList.length).toBe(1);
  });
});
